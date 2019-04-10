<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('journey', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Journey'),
            'edit_item' => __('Edit Journey'),
            'name' => __('Journies'),
            'search_items' => __('Search Journey'),
            'singular_name' => __('Journey'),
        ],
        'supports' => [
            'content',
            'title'
        ],
        'menu_icon' => 'dashicons-admin-site',
        'menu_position' => 3,
        'public' => true,
    ]);
});