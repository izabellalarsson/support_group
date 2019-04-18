<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('thanks', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Thanks'),
            'edit_item' => __('Edit Thanks'),
            'name' => __('Thanks'),
            'search_items' => __('Search Thanks'),
            'singular_name' => __('Thanks'),
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