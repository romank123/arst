<?php
use Bitrix\Main\Page\Asset;
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)   die();
$asset = Asset::getInstance();

?>

<?php
if(!in_array($APPLICATION->GetCurPage(), ['/calc_ajax.php']))
{
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- head -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?

    $asset->addCss(SITE_TEMPLATE_PATH."/css/bootstrap.min.css");
    $asset->addCss(SITE_TEMPLATE_PATH."/fonts/merriweather.css");
    $asset->addCss(SITE_TEMPLATE_PATH."/css/main.min.css");

    ?>

    <? $APPLICATION->ShowHead();?>
    <!--<link rel="stylesheet" href="fonts/merriweather.css">-->
    <title><?$APPLICATION->ShowTitle();?></title>

    <script src="https://api-maps.yandex.ru/2.1/?apikey=590cf9b2-218d-41a5-a9fe-241c6e741bb5&lang=ru_RU"></script>
    <!-- ./head -->
</head>



<?php
if(!in_array($APPLICATION->GetCurPage(), ['/calc.php']))
{
?>
<body>
<? //$APPLICATION->ShowPanel(); ?>
<!-- Renders partials  -->


<div id="bgHead" class="container-fluid bg-head">
    <div id="blur" class="blur">
        <!-- header -->

        <nav id="nav" class="navbar navbar-expand-lg navbar-light justify-content-center px-xxl-5">
            <div class="row navbar navbar-toggler d-lg-none d-flex justify-content-between w-100">
                <img class="col-4 col-md-auto order-0 w-25 w-md-100" src="<?php echo SITE_TEMPLATE_PATH; ?>/images/logo.png" alt="">
                <a class="col-4 col-md-auto btn btn-primary text-center order-btn order-1" data-bs-toggle="modal"
                   data-bs-target="#ModalCalc" onclick="setTimeout(updateButtonPosition, .5);" href="#">Рассчитать <br>
                    стоимость</a>
                <div class="col-7 col-md-4 text-center mx-auto menu-mob order-md-2 order-3">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Новороссийск
                            </a>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                +7 (928)-203-77-79
                            </a>
                            <ul class="dropdown-menu pt-4" aria-labelledby="navbarDropdownMenuLink">
                                <li class="nav-item">
                                    <div class="text-center">
                                        <a class="nav-link anapa" href="#">анапа</a>
                                        <a class="nav-link" href="#">+7 (928)-203-77-79 </a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="text-center">
                                        <a class="nav-link gelen" href="#">геленджик</a>
                                        <a class="nav-link" href="#">+7 (928)-203-77-79</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button class="col-2 col-md-auto navbar-toggler order-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="row navbar-nav mb-2 mb-lg-0 justify-content-center align-items-center w-100 menu-coll">

                    <div class="col-12 col-xxl-6 width-coll">
                        <div class="items-1 row justify-content-center align-items-center flex-column flex-lg-row flex-nowrap justify-content-xxl-end">
                            <li class="col-auto nav-item">
                                <a class="nav-link active" aria-current="page" href="/">главная</a>
                            </li>
                            <li class="col-auto nav-item">
                                <a class="nav-link" href="catalog.php">каталог товаров</a>
                            </li>
                            <li class="col-auto nav-item">
                                <a class="nav-link" href="#contacts">контакты</a>
                            </li>
                            <li class="col-auto"><a class="navbar-brand d-none d-lg-block" href="/"></a>
                            </li>
                        </div>
                    </div>

                    <div class="col-12 col-xxl-6 width-coll">
                        <div class="items-1 row justify-content-center align-items-center flex-nowrap justify-content-xxl-start">
                            <? $APPLICATION->IncludeComponent(
                                "bitrix:news.list",
                                "city_top_header",
                                array(
                                    "ACTIVE_DATE_FORMAT" => "d.m.Y",
                                    "ADD_SECTIONS_CHAIN" => "Y",
                                    "AJAX_MODE" => "N",
                                    "AJAX_OPTION_ADDITIONAL" => "",
                                    "AJAX_OPTION_HISTORY" => "N",
                                    "AJAX_OPTION_JUMP" => "N",
                                    "AJAX_OPTION_STYLE" => "Y",
                                    "CACHE_FILTER" => "N",
                                    "CACHE_GROUPS" => "Y",
                                    "CACHE_TIME" => "36000000",
                                    "CACHE_TYPE" => "A",
                                    "CHECK_DATES" => "Y",
                                    "DETAIL_URL" => "",
                                    "DISPLAY_BOTTOM_PAGER" => "Y",
                                    "DISPLAY_DATE" => "Y",
                                    "DISPLAY_NAME" => "Y",
                                    "DISPLAY_PICTURE" => "Y",
                                    "DISPLAY_PREVIEW_TEXT" => "Y",
                                    "DISPLAY_TOP_PAGER" => "N",
                                    "FIELD_CODE" => array("", ""),
                                    "FILTER_NAME" => "",
                                    "HIDE_LINK_WHEN_NO_DETAIL" => "N",
                                    "IBLOCK_ID" => "7",
                                    "IBLOCK_TYPE" => "catalogs",
                                    "INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
                                    "INCLUDE_SUBSECTIONS" => "Y",
                                    "MESSAGE_404" => "",
                                    "NEWS_COUNT" => "30",
                                    "PAGER_BASE_LINK_ENABLE" => "N",
                                    "PAGER_DESC_NUMBERING" => "N",
                                    "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                                    "PAGER_SHOW_ALL" => "N",
                                    "PAGER_SHOW_ALWAYS" => "N",
                                    "PAGER_TEMPLATE" => "azkm",
                                    "PAGER_TITLE" => "Новости",
                                    "PARENT_SECTION" => "",
                                    "PARENT_SECTION_CODE" => "",
                                    "PREVIEW_TRUNCATE_LEN" => "",
                                    "PROPERTY_CODE" => array(
                                        0 => "phone",
                                        1 => "url",
                                        2 => "email",

                                    ),

                                    "SET_BROWSER_TITLE" => "Y",
                                    "SET_LAST_MODIFIED" => "N",
                                    "SET_META_DESCRIPTION" => "Y",
                                    "SET_META_KEYWORDS" => "Y",
                                    "SET_STATUS_404" => "N",
                                    "SET_TITLE" => "Y",
                                    "SHOW_404" => "N",
                                    "SORT_BY1" => "ACTIVE_FROM",
                                    "SORT_BY2" => "SORT",
                                    "SORT_ORDER1" => "DESC",
                                    "SORT_ORDER2" => "ASC",
                                    "STRICT_SECTION_CHECK" => "N"
                                )
                            ); ?>
                        </div>

                    </div>
                </ul>
            </div>
        </nav>
        <!-- ./header -->        <!-- header block -->
        <?php
        }
        }
        ?>

