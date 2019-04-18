<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('event', [
        'has_archive' => true,
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
        'menu_icon' => 'dashicons-admin-home',
        'menu_position' => 3,
        'public' => true,
    ]);
});