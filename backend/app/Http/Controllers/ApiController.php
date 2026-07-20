<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuItem;
use App\Models\Branch;
use App\Models\Contact;
use App\Models\Memory;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
    /**
     * Get all menu items grouped or simple list.
     */
    public function getMenu()
    {
        $items = MenuItem::all();
        return response()->json($items);
    }

    /**
     * Get all branch locations.
     */
    public function getBranches()
    {
        $branches = Branch::where('status', 'Active')->get();
        return response()->json($branches);
    }

    /**
     * Handle visitor contact form submissions.
     */
    public function storeContact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Inquiry submitted successfully!',
            'data' => $contact
        ], 201);
    }

    /**
     * Get all published (approved) customer memories for the public Memories wall.
     */
    public function getMemories()
    {
        $memories = Memory::where('status', 'approved')
            ->orderByDesc('created_at')
            ->get();

        return response()->json($memories);
    }

    /**
     * Handle a visitor's memory/photo submission. Always starts as "pending"
     * so nothing appears on the site until it's approved.
     */
    public function storeMemory(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'message' => 'required|string|max:2000',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120', // 5MB max
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $photoPath = null;
        if ($request->hasFile('photo')) {
            // Stored under storage/app/public/memories, served via /storage symlink
            $photoPath = $request->file('photo')->store('memories', 'public');
        }

        $memory = Memory::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
            'photo_path' => $photoPath,
            'status' => 'pending',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for sharing! Your memory will appear on the site once reviewed.',
            'data' => $memory
        ], 201);
    }

    /**
     * [Admin] List all memories regardless of status, newest first.
     */
    public function getAllMemoriesAdmin(Request $request)
    {
        return response()->json(Memory::orderByDesc('created_at')->get());
    }

    /**
     * [Admin] Approve or reject a pending memory.
     */
    public function updateMemoryStatus(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|in:pending,approved,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $memory = Memory::findOrFail($id);
        $memory->status = $request->status;
        $memory->save();

        Log::channel('daily')->info('Memory moderation status changed', [
            'admin_id' => $request->user()->id,
            'memory_id' => $memory->id,
            'status' => $memory->status,
            'ip' => $request->ip(),
        ]);

        return response()->json(['status' => 'success', 'data' => $memory]);
    }

    /**
     * [Admin] Delete a memory (and its photo file, if any).
     */
    public function deleteMemoryAdmin(Request $request, $id)
    {
        $memory = Memory::findOrFail($id);
        if ($memory->photo_path) {
            Storage::disk('public')->delete($memory->photo_path);
        }
        $memory->delete();

        Log::channel('daily')->info('Memory moderation deleted', [
            'admin_id' => $request->user()->id,
            'memory_id' => $memory->id,
            'ip' => $request->ip(),
        ]);

        return response()->json(['status' => 'success']);
    }
}
