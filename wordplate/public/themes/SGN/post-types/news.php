<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('news', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add News'),
            'edit_item' => __('Edit News'),
            'name' => __('News'),
            'search_items' => __('Search News'),
            'singular_name' => __('News'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-testimonial',
        'menu_position' => 0,
        'public' => true,
    ]);
});