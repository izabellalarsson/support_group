<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('award', [
        'has_archive' => true,
        'show_in_rest' => true,
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
        'menu_icon' => 'dashicons-awards',
        'menu_position' => 15,
        'public' => true,
    ]);
});