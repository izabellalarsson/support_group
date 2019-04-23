<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('project', [
        'has_archive' => true,
        'show_in_rest' => true,
        'labels' => [
            'add_new_item' => __('Add New Project'),
            'edit_item' => __('Edit Project'),
            'name' => __('Projects'),
            'search_items' => __('Search Project'),
            'singular_name' => __('Project'),
        ],
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-editor-ol',
        'menu_position' => 13,
        'public' => true,
    ]);
});