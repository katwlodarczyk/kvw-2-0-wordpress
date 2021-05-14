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
        // $context['page_blocks'] = $this->pageBlocks($page->id);
        // dd($context);

        return new TimberResponse('templates/generic-page.twig', $context);
    }

    /**
     * @param $id
     * @return mixed
     */
    // public function pageBlocks($id)
    // {
    //     $layouts = collect(get_field('layouts', $id));

    //     foreach ($layouts as $key => $layout) {
    //         if ($layout) {
    //             if ($layout['acf_fc_layout'] === 'call_to_action') {
    //                 $layouts[$key] = $this->getCallToActionsWithLinkedPages($layout);
    //             }

    //             if ($layout['acf_fc_layout'] === 'latest_articles') {
    //                 $layouts[$key] = $this->getLatestNewsWithNews($layout, $id);
    //             }

    //             if ($layout['acf_fc_layout'] === 'faqs') {
    //                 $layouts[$key] = $this->getFaqData($layout);
    //             }

    //             if ($layout['acf_fc_layout'] === 'meet_the_team') {
    //                 $layouts[$key] = $this->getAdditionalProfileData($layout);
    //             }
    //         }
    //     }

    //     return $layouts;
    // }
}
