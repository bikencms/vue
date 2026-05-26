<script setup>
    const onClickSearchBtn = (event) => {
        $('.dropdown-menu').toggleClass('show')
        $('.dropdown-menu').find('input').focus()
    }

    const onToggleSubmenu = (event) => {
        $(event.target).parent().toggleClass('show')
    }

    const onClickMenuItem = (ele) => {
        $(ele.target).closest(".site-header__offcanvas").toggleClass("toggled")
    }
</script>

<template>
    <header class="handheld-header site-header handheld-stick-this light">
        <div class="container-fluid">
            <div class="site-header__inner">
                <div class="site-header__left">
                    <div class="site-header__offcanvas">
                        <button class="site-header__offcanvas--toggler navbar-toggler" data-toggle="offcanvas"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="13">
                                <path
                                    d="M0 13L0 11.4 16 11.4 16 13 0 13ZM0 5.7L16 5.7 16 7.3 0 7.3 0 5.7ZM0 0L16 0 16 1.6 0 1.6 0 0Z">
                                </path>
                            </svg></button>
                        <div class="offcanvas-drawer">
                            <div class="offcanvas-collapse" data-simplebar="init">
                                <div class="simplebar-wrapper" style="margin: 0px -24px;">
                                    <div class="simplebar-height-auto-observer-wrapper">
                                        <div class="simplebar-height-auto-observer"></div>
                                    </div>
                                    <div class="simplebar-mask">
                                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                            <div class="simplebar-content"
                                                style="padding: 0px 24px; height: auto; overflow: hidden;">
                                                <div class="site_header__offcanvas-nav">
                                                    <ul id="menu-main-menu-2" class="offcanvas-nav yamm">
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page nav-item show">
                                                            <NuxtLink title="영화" to="/movie/" class="nav-link show" @click="onClickMenuItem">
                                                                <span class="dashicons fas fa-film after-menu-image-icons"></span>
                                                                <span class="menu-image-title-after menu-image-title">영화</span>
                                                            </NuxtLink>
                                                        </li>
                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                                            <NuxtLink title="TV" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false"
                                                                class="dropdown-toggle nav-link" @click="onToggleSubmenu">
                                                                <span class="dashicons dashicons-laptop after-menu-image-icons"></span>
                                                                <span class="menu-image-title-after menu-image-title">TV</span>    
                                                            </NuxtLink>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                                    <NuxtLink title="드라마" to="/k-drama/"
                                                                        class="dropdown-item show" @click="onClickMenuItem">드라마</NuxtLink>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                                    <NuxtLink title="예능" to="/k-show/"
                                                                        class="dropdown-item show" @click="onClickMenuItem">예능</NuxtLink>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item show">
                                                                    <NuxtLink title="시사다큐" to="/k-sisa/"
                                                                        class="dropdown-item show" @click="onClickMenuItem">시사</NuxtLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item show">
                                                            <NuxtLink title="미드" to="/u-drama/" class="nav-link show" @click="onClickMenuItem">
                                                                <span class="dashicons dashicons-admin-site-alt3 after-menu-image-icons"></span>
                                                                <span class="menu-image-title-after menu-image-title">미드</span>
                                                            </NuxtLink>
                                                        </li>
                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item show">
                                                            <NuxtLink title="OTT/Web" data-toggle="dropdown" class="dropdown-toggle nav-link" @click="onToggleSubmenu">
                                                                <span class="dashicons fas fa-cube after-menu-image-icons"></span>
                                                                <span class="menu-image-title-after menu-image-title">OTT</span>
                                                            </NuxtLink>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Amazon Prime Video" to="/ott-web/amazon-prime-video/" key="k-drama" @click="onClickMenuItem">Amazon Prime Video</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Apple TV" to="/ott-web/apple-tv/" key="apple-tv" @click="onClickMenuItem">Apple TV</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Disney +" to="/ott-web/disney/" key="disney" @click="onClickMenuItem">Disney +</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="HBO max" to="/ott-web/hbo-max/" key="hbo-max" @click="onClickMenuItem">HBO max</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Netflix" to="/ott-web/netflix/" key="netflix" @click="onClickMenuItem">Netflix</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Peacock" to="/ott-web/peacock/" key="peacock" @click="onClickMenuItem">Peacock</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="Tving" to="/ott-web/tving/" key="tving" @click="onClickMenuItem">Tving</NuxtLink>
                                                                </li>
                                                                <li class="menu-item">
                                                                    <NuxtLink title="watcha" to="/ott-web/watcha/" key="watcha" @click="onClickMenuItem">watcha</NuxtLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                                </div>
                                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                    <div class="simplebar-scrollbar"
                                        style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div>
                                </div>
                                <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                    <div class="simplebar-scrollbar"
                                        style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="site-header__logo">
                        <NuxtLink to="/" class="custom-logo-link" rel="home" aria-current="page">
                            <img width="653" height="152"
                                src="/images/logo-300x300.png"
                                class="custom-logo lazyload" alt="코코아티비 :: MOVIEAXN.COM"
                                sizes="(max-width: 653px) 100vw, 653px">
                            </NuxtLink>
                    </div>
                </div>
                <div class="site-header__right">
                    <div class="ader_site-he_search">
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" @click.prevent="onClickSearchBtn"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                    <path
                                        d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z">
                                    </path>
                                </svg></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <form role="search" method="get"
                                        class="search-form masvideos-search masvideos-search-tv_show" action="/search">
                                        <label class="screen-reader-text" for="masvideos-search-field-1">Search
                                            for:</label>
                                        <input type="search" id="masvideos-search-field-1"
                                            class="search-field ui-autocomplete-input" placeholder="검색 ..." value=""
                                            name="s" autocomplete="off">
                                        <button type="submit" class="search-submit"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18">
                                                <path
                                                    d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z">
                                                </path>
                                            </svg><span class="screen-reader-text">Search</span></button>
                                        <!-- <input type="hidden" name="post_type" value="" /> -->
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!-- /.site-header__right -->
            </div>
        </div>
    </header>
</template>