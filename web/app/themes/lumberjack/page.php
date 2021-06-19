<?php

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 */

namespace App;

use App\Http\Controllers\Controller;
use Rareloop\Lumberjack\Http\Responses\TimberResponse;
use Rareloop\Lumberjack\Page;
use Timber\Timber;

class PageController extends Controller
{
    public function handle()
    {
        $context = Timber::get_context();
        $page = new Page();
        $context['post'] = $page;
        $context['title'] = $page->title;
        $context['content'] = $page->content;
        $context['main_navigation'] = new \Timber\Menu( 'main_navigation' );
        $context['footer_col_1'] = new \Timber\Menu( 'footer_col_1' );
        $context['footer_col_2'] = new \Timber\Menu( 'footer_col_2' );
        $context['footer_col_3'] = new \Timber\Menu( 'footer_col_3' );
        $context['footer_col_4'] = new \Timber\Menu( 'footer_col_4' );

        $context['page_blocks'] = $this->pageBlocks($page->id);

        // dd($context);

        return new TimberResponse('templates/generic-page.twig', $context);
    }



   /**
     * @param $id
     * @return mixed
     */
    public static function pageBlocks($id)
    {
        return get_field('content_blocks', $id);
    }
}
