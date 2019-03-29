<?php 

declare(strict_types=1);

add_action('init', function () {
    register_taxonomy('example', ['branch'], [
        'hierarchical' => true,
        'labels' => [
            'add_new_item' => __('Add New Example'),
            'edit_item' => __('Edit Example'),
            'name' => __('Example'),
            'search_items' => __('Search Example'),
            'singular_name' => __('Example'),
        ],
        'show_admin_column' => true,      
    ]);
});