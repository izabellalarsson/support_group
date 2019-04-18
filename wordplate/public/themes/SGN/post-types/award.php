<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('award', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Award'),
            'edit_item' => __('Edit Award'),
            'name' => __('Awards'),
            'search_items' => __('Search Award'),
            'singular_name' => __('Award'),
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