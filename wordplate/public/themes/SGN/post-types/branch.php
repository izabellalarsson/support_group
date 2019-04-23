<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('branch', [
        'has_archive' => true,
        'show_in_rest' => true,
        'labels' => [
            'add_new_item' => __('Add New Branch'),
            'edit_item' => __('Edit Branch'),
            'name' => __('Branch'),
            'search_items' => __('Search Branch'),
            'singular_name' => __('Branch'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
            'excerpt'
        ],
        'menu_icon' => 'dashicons-admin-home',
        'menu_position' => 11,
        'public' => true,
    ]);
});