<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('event', [
        'has_archive' => true,
        'show_in_rest' => true,
        'labels' => [
            'add_new_item' => __('Add New Event'),
            'edit_item' => __('Edit Event'),
            'name' => __('Events'),
            'search_items' => __('Search Event'),
            'singular_name' => __('Event'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
            'excerpt'
        ],
        'menu_icon' => 'dashicons-tickets-alt',
        'menu_position' => 12,
        'public' => true,
    ]);
});