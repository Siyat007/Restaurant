<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuItem;
use App\Models\Branch;
use App\Models\Contact;
use Illuminate\Support\Facades\Validator;

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
        $branches = Branch::all();
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
}
