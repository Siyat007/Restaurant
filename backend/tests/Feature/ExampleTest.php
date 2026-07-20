<?php

namespace Tests\Feature;

use App\Models\Memory;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_memory_submissions_are_throttled(): void
    {
        $payload = ['name' => 'Visitor', 'message' => 'A happy memory'];

        foreach (range(1, 3) as $attempt) {
            $this->postJson('/api/memories', $payload)->assertCreated();
        }

        $this->postJson('/api/memories', $payload)->assertStatus(429);
    }

    public function test_moderation_requires_an_authenticated_administrator(): void
    {
        $this->getJson('/api/admin/memories')->assertUnauthorized();

        $user = User::factory()->create(['is_admin' => false]);
        $this->actingAs($user)->getJson('/api/admin/memories')->assertForbidden();

        $admin = User::factory()->create(['is_admin' => true]);
        Memory::create([
            'name' => 'Visitor',
            'message' => 'A pending memory',
            'status' => 'pending',
        ]);

        $this->actingAs($admin)
            ->getJson('/api/admin/memories')
            ->assertOk()
            ->assertJsonCount(1);
    }
}
