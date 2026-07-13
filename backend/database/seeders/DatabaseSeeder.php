<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MenuItem;
use App\Models\Branch;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed Menu Items
        MenuItem::create([
            'name' => 'Biasa',
            'description' => 'Classic bowl of Ansari Famous Cendol.',
            'price' => 2.00,
            'category' => 'cendol',
            'tag' => 'Classic',
            'badge' => 'Original'
        ]);

        MenuItem::create([
            'name' => 'Berkacang',
            'description' => 'Cendol served with red beans.',
            'price' => 2.20,
            'category' => 'cendol',
            'tag' => 'Popular'
        ]);

        MenuItem::create([
            'name' => 'Berjagung',
            'description' => 'Cendol served with sweet corn.',
            'price' => 2.20,
            'category' => 'cendol'
        ]);

        MenuItem::create([
            'name' => 'Berpulut',
            'description' => 'Cendol served with glutinous rice.',
            'price' => 2.60,
            'category' => 'cendol',
            'tag' => 'Heritage'
        ]);

        MenuItem::create([
            'name' => 'Kacang & Jagung',
            'description' => 'Cendol served with red beans and sweet corn.',
            'price' => 2.40,
            'category' => 'cendol'
        ]);

        MenuItem::create([
            'name' => 'Kacang & Pulut',
            'description' => 'Cendol served with red beans and glutinous rice.',
            'price' => 2.80,
            'category' => 'cendol'
        ]);

        MenuItem::create([
            'name' => 'Kacang & Pulut & Jagung (SP)',
            'description' => 'Special cendol with red beans, glutinous rice, and sweet corn.',
            'price' => 3.00,
            'category' => 'cendol',
            'badge' => 'Special'
        ]);

        MenuItem::create([
            'name' => 'Take Away Cendol Kecil',
            'description' => 'Small packed cendol for take away.',
            'price' => 2.50,
            'category' => 'takeaway'
        ]);

        MenuItem::create([
            'name' => 'Take Away Cendol Berkacang',
            'description' => 'Packed cendol with red beans for take away.',
            'price' => 2.70,
            'category' => 'takeaway'
        ]);

        MenuItem::create([
            'name' => 'Take Away Cendol Besar',
            'description' => 'Large packed cendol for take away.',
            'price' => 4.40,
            'category' => 'takeaway'
        ]);

        MenuItem::create([
            'name' => 'Take Away Cendol Besar Berkacang',
            'description' => 'Large packed cendol with red beans for take away.',
            'price' => 4.70,
            'category' => 'takeaway'
        ]);

        MenuItem::create([
            'name' => 'Pasembor',
            'description' => 'Pasembor served packed or plated.',
            'price' => 4.70,
            'category' => 'savory',
            'tag' => 'Local Favorite'
        ]);

        // Seed Branches
        Branch::create([
            'city' => 'Taiping Flagship',
            'address' => 'Jalan Taming Sari (Main Road), 34000 Taiping, Perak',
            'status' => 'Active'
        ]);
    }
}
