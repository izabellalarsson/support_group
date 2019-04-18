<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('partner', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Partner'),
            'edit_item' => __('Edit Partner'),
            'name' => __('Partners'),
            'search_items' => __('Search Partner'),
            'singular_name' => __('Partner'),
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