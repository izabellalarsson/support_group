<?php

declare(strict_types=1);

error_reporting(E_ALL & ~E_NOTICE);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

// Register post-types
require get_template_directory().'/post-types/branch.php';
require get_template_directory().'/post-types/project.php';
require get_template_directory().'/post-types/news.php';




//-----------------------------------------------------------------
// Added Branches to Rest API
//-----------------------------------------------------------------
add_action( 'init', 'my_branch_cpt' );
function my_branch_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'Branches'
    );
    register_post_type( 'branch', $args );
}

function my_rest_prepare_branch($data, $post, $request) {
  $_data = $data->data;

  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;

  return $data;
}
add_filter("rest_prepare_branch", 'my_rest_prepare_branch', 10, 3);

//-----------------------------------------------------------------
// Added News to Rest API
//-----------------------------------------------------------------
add_action( 'init', 'my_news_cpt' );
function my_news_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'News'
    );
    register_post_type( 'news', $args );
}
//-----------------------------------------------------------------
// Added Project to Rest API
//-----------------------------------------------------------------
add_action( 'init', 'my_project_cpt' );
function my_project_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'Projects'
    );
    register_post_type( 'project', $args );
}


// Register taxonomies if needed
require get_template_directory().'/taxonomies/activities.php';

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);


