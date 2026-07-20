<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdmin extends Command
{
    protected $signature = 'admin:create {email? : The administrator email address} {--name= : Administrator display name}';

    protected $description = 'Create or promote a user as an administrator';

    public function handle(): int
    {
        $email = $this->argument('email') ?: $this->ask('Administrator email');
        $name = $this->option('name') ?: $this->ask('Administrator name');
        $password = $this->ask('Administrator password');

        if (! filter_var($email, FILTER_VALIDATE_EMAIL) || ! $name || strlen((string) $password) < 12) {
            $this->error('Provide a valid email, a name, and a password of at least 12 characters.');
            return self::FAILURE;
        }

        User::updateOrCreate(['email' => $email], [
            'name' => $name,
            'password' => Hash::make($password),
            'is_admin' => true,
        ]);

        $this->info('Administrator account created or updated.');
        return self::SUCCESS;
    }
}
