<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        fwrite(STDERR, print_r($response->baseResponse->getContent(), true));

        $response->assertStatus(200);
    }
}
