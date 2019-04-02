<?php 

declare(strict_types=1);

add_action ('init', function (){
    register_taxonomy('activity', ['branch'], [
        'hierarchical' => true,
        'show_admin_column' => true, 
        'show_in_rest' => true,
        'labels' => [
            'name' => __('Activities'),
            'singular_name' => __('Activity'),
            'edit_item' => __('Edit Activity'),
            'add_new_item' => __('Add New Activity'),
        ]
    ]);
});