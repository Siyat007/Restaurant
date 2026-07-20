<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AdminAuthController extends Controller
{
    public function csrfToken(Request $request)
    {
        return response()->json(['token' => $request->session()->token()]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Invalid login request.'], 422);
        }

        $credentials = $validator->validated();
        if (! Auth::attempt($credentials)) {
            Log::warning('Failed admin login', ['email' => $credentials['email'], 'ip' => $request->ip()]);
            return response()->json(['message' => 'Invalid credentials.'], 422);
        }

        if (! $request->user()->is_admin) {
            Auth::logout();
            Log::warning('Non-admin login attempted to access moderation', ['email' => $credentials['email'], 'ip' => $request->ip()]);
            return response()->json(['message' => 'Invalid credentials.'], 422);
        }

        $request->session()->regenerate();
        Log::info('Admin login', ['admin_id' => $request->user()->id, 'ip' => $request->ip()]);

        return response()->json(['user' => ['name' => $request->user()->name, 'email' => $request->user()->email]]);
    }

    public function me(Request $request)
    {
        return response()->json(['user' => ['name' => $request->user()->name, 'email' => $request->user()->email]]);
    }

    public function logout(Request $request)
    {
        $adminId = $request->user()->id;
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        Log::info('Admin logout', ['admin_id' => $adminId, 'ip' => $request->ip()]);

        return response()->json(['status' => 'success']);
    }
}
