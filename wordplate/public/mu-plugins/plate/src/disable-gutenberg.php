<?php

/*
 * This file is part of WordPlate.
 *
 * (c) Vincent Klaiber <hello@vinkla.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

// Hide try Gutenberg panel.
remove_action('try_gutenberg_panel', 'wp_try_gutenberg_panel');

// Deregister Gutenberg's front-end block styles.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_style('wp-block-library');
});
