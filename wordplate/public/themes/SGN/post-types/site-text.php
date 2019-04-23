<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('site-text', [
        'has_archive' => true,
        'show_in_rest' => true,
        'labels' => [
            'add_new_item' => __('Add New Site-Text'),
            'edit_item' => __('Edit Site-Text'),
            'name' => __('Site-Text'),
            'search_items' => __('Search Site-Text'),
            'singular_name' => __('Site-Text'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail' 
        ],
        'menu_icon' => 'dashicons-editor-paste-text',
        'menu_position' => 18,
        'public' => true,
    ]);
});