<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('thanks', [
        'has_archive' => true,
        'show_in_rest' => true,
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
        'menu_icon' => 'dashicons-thumbs-up',
        'menu_position' => 17,
        'public' => true,
    ]);
});