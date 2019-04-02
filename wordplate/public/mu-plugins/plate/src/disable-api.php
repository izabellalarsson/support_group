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

// Require authentication for all requests for the REST API.
add_filter('rest_authentication_errors', function ($result) {
    if (!empty($result)) {
        return $result;
    }

    if (!is_user_logged_in()) {
        return new WP_Error('rest_not_logged_in', 'You are not currently logged in.', ['status' => 401]);
    }

    return $result;
});
