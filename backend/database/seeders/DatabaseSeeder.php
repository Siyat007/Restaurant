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
            'name' => 'Cendol Biasa (Traditional Cendol)',
            'description' => 'The standard heritage bowl. A refreshing mix of fresh pandan green noodles, creamy coconut milk, shaved ice, and our signature Gula Melaka syrup.',
            'price' => 3.50,
            'category' => 'cendol',
            'tag' => 'Classic',
            'badge' => 'Original'
        ]);

        MenuItem::create([
            'name' => 'Cendol Kacang (Red Beans)',
            'description' => 'Our traditional cendol served with a generous topping of slow-cooked, sweetened red kidney beans adding a soft, nutty texture.',
            'price' => 4.00,
            'category' => 'cendol',
            'tag' => 'Popular'
        ]);

        MenuItem::create([
            'name' => 'Cendol Pulut (Glutinous Rice)',
            'description' => 'Features a scoop of sticky, perfectly steamed glutinous rice (pulut), making the dessert richer and extra filling.',
            'price' => 4.20,
            'category' => 'cendol',
            'tag' => 'Heritage'
        ]);

        MenuItem::create([
            'name' => 'Cendol Special (Red Beans & Pulut)',
            'description' => 'The ultimate bowl. A double-loaded combination featuring both sweet red kidney beans and sticky glutinous rice (pulut).',
            'price' => 4.80,
            'category' => 'cendol',
            'tag' => 'Highly Recommended',
            'badge' => 'Best Seller'
        ]);

        MenuItem::create([
            'name' => 'Pasembur Traditional (Rojak)',
            'description' => 'Famous Malaysian Indian street salad. A crispy heap of shredded cucumber, turnip, bean curd, and potato fritters topped with a warm, sweet, and spicy peanut gravy.',
            'price' => 7.00,
            'category' => 'savory',
            'tag' => 'Local Favorite'
        ]);

        MenuItem::create([
            'name' => 'Pasembur Special (With Squid)',
            'description' => 'Our traditional Pasembur loaded with premium boiled egg, crispy prawn fritters, and marinated honey-spiced cuttlefish.',
            'price' => 9.00,
            'category' => 'savory',
            'badge' => 'Premium'
        ]);

        MenuItem::create([
            'name' => 'Ais Kacang (ABC)',
            'description' => 'A traditional Malaysian shaved ice mountain topped with sweet cream corn, red beans, grass jelly, rose syrup, and evaporated milk.',
            'price' => 5.00,
            'category' => 'dessert'
        ]);

        // Seed Branches
        Branch::create([
            'city' => 'Taiping Flagship',
            'address' => 'Jalan Taming Sari (Main Road), 34000 Taiping, Perak',
            'status' => 'Active'
        ]);

        Branch::create([
            'city' => 'Kuala Lumpur',
            'address' => 'Proposed branch: Golden Triangle district',
            'status' => 'Planned'
        ]);

        Branch::create([
            'city' => 'Penang',
            'address' => 'Proposed branch: Georgetown Heritage Zone',
            'status' => 'Planned'
        ]);

        Branch::create([
            'city' => 'Johor Bahru',
            'address' => 'Proposed branch: JB Central',
            'status' => 'Planned'
        ]);

        Branch::create([
            'city' => 'Alor Setar',
            'address' => 'Proposed branch: City Center',
            'status' => 'Planned'
        ]);

        Branch::create([
            'city' => 'Ipoh',
            'address' => 'Proposed branch: Ipoh Old Town',
            'status' => 'Planned'
        ]);
    }
}
