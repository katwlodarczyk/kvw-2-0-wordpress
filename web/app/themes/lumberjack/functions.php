<?php

use App\Http\Lumberjack;

// Create the Application Container
$app = require_once('bootstrap/app.php');

// Bootstrap Lumberjack from the Container
$lumberjack = $app->make(Lumberjack::class);
$lumberjack->bootstrap();

// Import our routes file
require_once('routes.php');

// Set global params in the Timber context
add_filter('timber_context', [$lumberjack, 'addToContext']);

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    => 'General Options',
        'menu_title'    => 'Options',
        'menu_slug'     => 'general-options',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}
function add_to_context($context)
{
    $context['options'] = get_fields('option');
    return $context;
}
