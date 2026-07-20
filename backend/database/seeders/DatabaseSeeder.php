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
        MenuItem::updateOrCreate(['name' => 'Biasa'], [
            'name' => 'Biasa',
            'description' => 'Classic bowl of Ansari Famous Cendol.',
            'price' => 2.00,
            'category' => 'cendol',
            'tag' => 'Classic',
            'badge' => 'Original'
        ]);

        MenuItem::updateOrCreate(['name' => 'Berkacang'], [
            'name' => 'Berkacang',
            'description' => 'Cendol served with red beans.',
            'price' => 2.20,
            'category' => 'cendol',
            'tag' => 'Popular'
        ]);

        MenuItem::updateOrCreate(['name' => 'Berjagung'], [
            'name' => 'Berjagung',
            'description' => 'Cendol served with sweet corn.',
            'price' => 2.20,
            'category' => 'cendol'
        ]);

        MenuItem::updateOrCreate(['name' => 'Berpulut'], [
            'name' => 'Berpulut',
            'description' => 'Cendol served with glutinous rice.',
            'price' => 2.60,
            'category' => 'cendol',
            'tag' => 'Local Favourite'
        ]);

        MenuItem::updateOrCreate(['name' => 'Kacang & Jagung'], [
            'name' => 'Kacang & Jagung',
            'description' => 'Cendol served with red beans and sweet corn.',
            'price' => 2.40,
            'category' => 'cendol'
        ]);

        MenuItem::updateOrCreate(['name' => 'Kacang & Pulut'], [
            'name' => 'Kacang & Pulut',
            'description' => 'Cendol served with red beans and glutinous rice.',
            'price' => 2.80,
            'category' => 'cendol'
        ]);

        MenuItem::updateOrCreate(['name' => 'Kacang & Pulut & Jagung (SP)'], [
            'name' => 'Kacang & Pulut & Jagung (SP)',
            'description' => 'Special cendol with red beans, glutinous rice, and sweet corn.',
            'price' => 3.00,
            'category' => 'cendol',
            'badge' => 'Special'
        ]);

        MenuItem::updateOrCreate(['name' => 'Take Away Cendol Kecil'], [
            'name' => 'Take Away Cendol Kecil',
            'description' => 'Small packed cendol for take away.',
            'price' => 2.50,
            'category' => 'takeaway'
        ]);

        MenuItem::updateOrCreate(['name' => 'Take Away Cendol Berkacang'], [
            'name' => 'Take Away Cendol Berkacang',
            'description' => 'Packed cendol with red beans for take away.',
            'price' => 2.70,
            'category' => 'takeaway'
        ]);

        MenuItem::updateOrCreate(['name' => 'Take Away Cendol Besar'], [
            'name' => 'Take Away Cendol Besar',
            'description' => 'Large packed cendol for take away.',
            'price' => 4.40,
            'category' => 'takeaway'
        ]);

        MenuItem::updateOrCreate(['name' => 'Take Away Cendol Besar Berkacang'], [
            'name' => 'Take Away Cendol Besar Berkacang',
            'description' => 'Large packed cendol with red beans for take away.',
            'price' => 4.70,
            'category' => 'takeaway'
        ]);

        MenuItem::updateOrCreate(['name' => 'Pasembor'], [
            'name' => 'Pasembor',
            'description' => 'Pasembor served packed or plated.',
            'price' => 4.70,
            'category' => 'savory',
            'tag' => 'Local Favorite'
        ]);

        // Seed Branches
        Branch::updateOrCreate(['city' => 'Taiping Stall'], [
            'city' => 'Taiping Stall',
            'address' => '92, Jalan Barrack, 34000 Taiping, Perak, Malaysia',
            'status' => 'Active'
        ]);
    }
}
