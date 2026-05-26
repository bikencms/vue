<script setup>
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute()
    const title = route.params.title
    const { isMobile } = useDevice()
    const isWatching = ref(false)
    const startedWatch = ref(false)

    definePageMeta({
        scrollToTop: true,
        pageTransition: {
            name: 'page', 
            mode: 'out-in',
            onAfterEnter: () => {                
                $(document).on("click", function(e) {
                    $(".site-header__offcanvas").hasClass("toggled") && ($(".navbar-toggler").is(e.target) || 0 !== $(".navbar-toggler").has(e.target).length || $(".offcanvas-collapse").is(e.target) || 0 !== $(".offcanvas-collapse").has(e.target).length || ($(".site-header__offcanvas").removeClass("toggled"),
                    $("body").removeClass("off-canvas-active")))
                })

                //Movie sidebar filter
                $(".handheld-sidebar-toggle .sidebar-toggler").on("click", function() {
                    $(this).closest(".site-content").toggleClass("active-hh-sidebar")
                }),
                $(document).on("click", function(e) {
                    $(".site-content").hasClass("active-hh-sidebar") && ($(".handheld-sidebar-toggle").is(e.target) || 0 !== $(".handheld-sidebar-toggle").has(e.target).length || $("#secondary").is(e.target) || 0 !== $("#secondary").has(e.target).length || $(".site-content").toggleClass("active-hh-sidebar"))
                })
            }
        }
    }) 

    const { data, pending, status }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/movies/details', {
            params: {
                slug: title
            }
        }).then(result => {
            if (!process.server && result.title) {
                document.title = result.title + ' – 코코아티비 :: KOKOATV.NET'
            }
            return result
        }),
        {
            default: () => ({
                genres: [],
                relateds: Array.from(Array(isMobile ? 6 : 8), (_, index) => ({}))
            })
        }
    )

    const { refresh, pending: pendingLinks }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/movies/details', {
            params: {
                watch: data.value.id
            }
        }).then(result => {
            if (result.watchLinks) {
                data.value.watchLinks = result.watchLinks
                if (startedWatch.value) {
                    $('.site-header, .site-footer').addClass('watching')
                    isWatching.value = true
                }
            } else {
                result.watchLinks = []
            }
            return result
        }),
        {
            immediate: false
        }
    )

    const { refresh: refreshCountView } = useAsyncData(
        () => $fetch($apiBaseUrl() + '/movies/details', {
            params: {
                countViewId: data.value.id
            }
        }),
        {
            immediate: false
        }
    )

    useHead({
        title: (data && data.value.title && data.value.title.length ? data.value.title : title) + ' – 코코아티비 :: KOKOATV.NET',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: title + ' - 코코아티비 :: MOVIEAXN.COM 에서 무료로 즐기세요, 넷플릭스, 와차, 디즈니 플러스등 각종 OTT 컨텐츠를 감상하실 수 있습니다.'
            }
        ],
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");',
                body: true
            }
        ]
    });

    const onWatching = () => {
        startedWatch.value = true
        if (!data.value.watchLinks) {
            if (!pending && !pendingLinks) {
                refresh()
            }
        } else if (data.value.watchLinks.length) {
            $('.site-header, .site-footer').addClass('watching')
            isWatching.value = true;
        }
    }

    const onStopWatching = () => {
        isWatching.value = false;
        $('.site-header, .site-footer').removeClass('watching')
    }

    watch(
        () => data.value.id,
        () => {
            refresh()
            refreshCountView()
        }
    )

    onMounted(() => {
        if (status.value == 'error') {
            navigateTo({path: '/'})
        }
        if (!window.firstPageLoad) {
            window.firstPageLoad = true
            refresh()
            refreshCountView()
        }
    })

</script>
<template>
    <div class="movie-template-default single-movie masvideos single-movie-v2 full-width dark">
        <div class="site-content " tabindex="-1">
            <div class="container">
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <div class="movie type-movie status-publish has-post-thumbnail hentry">
                            <div class="single-movie__player-container stretch-full-width">
                                <Watch :links="data.watchLinks" :isWatching="isWatching" @on-stop-watching="onStopWatching" />
                                <div v-if="!isWatching" class="single-movie__player-container--inner container">
                                    <MovieBreadScrumb :title="data.title" :pending="pending" />
                                    <div class="ads-movie-top"></div>
                                    <div class="single-movie__row row">
                                        <MovieIntroInfoMobile v-if="isMobile"
                                            :pending = "pending"
                                            :id="data.id"
                                            :year="data.year"
                                            :duration="data.duration"
                                            :title="data.title"
                                            :originalTitle="data.originalTitle"
                                            :genres="data.genres"
                                            :src="data.src"
                                            :description="data.description"
                                            :outlink="data.outlink"
                                            :casts="data.casts"
                                            @on-watching="onWatching"
                                        />
                                        <MovieIntroInfo v-if="!isMobile"
                                            :pending = "pending"
                                            :id="data.id"
                                            :year="data.year"
                                            :duration="data.duration"
                                            :title="data.title"
                                            :originalTitle="data.originalTitle"
                                            :genres="data.genres"
                                            :src="data.src"
                                            :description="data.description"
                                            :outlink="data.outlink"
                                            :casts="data.casts"
                                            @on-watching="onWatching"
                                        />
                                        <div class="single-movie-ads-box ads-responsive-height">
                                            <div class="kokoads Movie_Post_Top_336_280"></div>
                                            <div class="ads-box-child">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kokoads Movie_Post_Middle_728_90"></div>
                                    <center>
                                        <div class="home-movie-section-aside-header"></div>
                                    </center>
                                </div>
                            </div>
                            <section class="movie__related" v-if="!isWatching">
                                <div class="movie__related--inner">
                                    <h2 class="movie__related--title">관련 컨텐츠</h2>
                                    <MovieIntroRelatedList :data="data.relateds" :isMobile="isMobile" :pending="pending" />
                                    <div class="kokoads Movie_Post_Bottom_728_90"></div>
                                </div>
                            </section>
                            <div style="text-align: center;margin-top: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>