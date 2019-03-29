<?php 

declare(strict_types=1);

add_action('init', function () {
    register_taxonomy('facebook', ['branch'], [
        'hierarchical' => true,
        'labels' => [
            'add_new_item' => __('Add New facebook'),
            'edit_item' => __('Edit facebook'),
            'name' => __('facebook'),
            'search_items' => __('Search facebook'),
            'singular_name' => __('facebook'),
        ],
        'show_admin_column' => true,      
    ]);
});