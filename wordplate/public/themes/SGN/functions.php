<?php

declare(strict_types=1);

error_reporting(E_ALL & ~E_NOTICE);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

// Register post-types
require get_template_directory().'/post-types/branch.php';
require get_template_directory().'/post-types/project.php';
require get_template_directory().'/post-types/event.php';
require get_template_directory().'/post-types/journey.php';
require get_template_directory().'/post-types/thanks.php';
require get_template_directory().'/post-types/award.php';
require get_template_directory().'/post-types/site-text.php';
require get_template_directory().'/post-types/partner.php';

//-----------------------------------------------------------------
// Added Branches to Rest API
//----------------------------------------------------------------- 
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
// Added Awards to Rest API
//----------------------------------------------------------------- 

function my_rest_prepare_award($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_award", 'my_rest_prepare_award', 10, 3);

//-----------------------------------------------------------------
// Added Thanks to Rest API
//----------------------------------------------------------------- 

function my_rest_prepare_thanks($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_thanks", 'my_rest_prepare_thanks', 10, 3);

//-----------------------------------------------------------------
// Added Partners to Rest API
//----------------------------------------------------------------- 


function my_rest_prepare_partner($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_partner", 'my_rest_prepare_partner', 10, 3);

//-----------------------------------------------------------------
// Added Project to Rest API
//-----------------------------------------------------------------

function my_rest_prepare_project($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_project", 'my_rest_prepare_project', 10, 3);
//-----------------------------------------------------------------
// Added Events to Rest API
//-----------------------------------------------------------------

function my_rest_prepare_event($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_event", 'my_rest_prepare_event', 10, 3);
//-----------------------------------------------------------------
// Added Journey to Rest API
//-----------------------------------------------------------------


function my_rest_prepare_journey($data, $post, $request) {
  $_data = $data->data;
  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;
  return $data;
}
add_filter("rest_prepare_journey", 'my_rest_prepare_journey', 10, 3);


//-----------------------------------------------------------------
// Shortening the excerpt
//-----------------------------------------------------------------
function new_excerpt_more( $more ) {
    return '';
}
add_filter('excerpt_more', 'new_excerpt_more');

// Register taxonomies if needed
require get_template_directory().'/taxonomies/activities.php';

// Remove Posts from Admin Sidebar
function remove_menu () 
{
   remove_menu_page('edit.php');
   remove_menu_page('edit-comments.php');
   remove_menu_page( 'themes.php' ); 

} 

add_action('admin_menu', 'remove_menu');

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


