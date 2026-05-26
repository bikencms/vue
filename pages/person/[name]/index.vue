<script setup>
    import { nextTick, ref } from 'vue'
    const { $apiBaseUrl } = useNuxtApp()
    const route = useRoute();
    const router = useRouter();
    const pageTitle = ref('코코아티비 :: MOVIEAXN.COM')

    definePageMeta({
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

    const orderBy = ref(route.query.orderBy || 'date')
    const page = ref(route.query.page || 1)
    const name = route.params.name

    const defaultData = {
        items: Array.from(Array(30), (_, index) => ({})),
        src: '/images/cast_no_thumnbnail.svg'
    }
    const { data, pending }  = useLazyAsyncData(
        () => $fetch($apiBaseUrl() + '/cast/detail', {
            params: {
                slug: name,
                orderBy: orderBy.value || undefined,
                page: page.value
            }
        }).then(data => {
            pageTitle.value = data.name + ' – 코코아티비 :: MOVIEAXN.COM'
            return data
        }),
        {
            default: () => defaultData,
            watch: [orderBy, page]
        }
    )

    const onChangeOrderBy = (event) => {
        let val = event.target.value
        let query = Object.assign({}, route.query)
        query.orderBy = val
        query.page = 1
        router.push({query: query})
        orderBy.value = val
        page.value = 1
        nextTick()
    }

    const onSelectPage = function(val) {
        let query = Object.assign({}, route.query)
        query.page = val
        router.push({query: query})
        page.value = val
        $('#scrollUp').trigger('click')
    }

    useHead({
        title: pageTitle,
        script: [
            {
                children: 'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-NL156SRJ6P"),gtag("config","UA-160268616-2");',
                body: true
            }
        ]
    })

</script>

<template>
    <div class="archive post-type-archive-tv_show masvideos masvideos-archive sidebar-left dark height-responsive">
        <div id="content" class="site-content" name="person" tabindex="-1">
            <div class="container">
                <nav class="masvideos-breadcrumb">
                    <NuxtLink to="/">Home</NuxtLink>
                    <span class="delimiter">
                        <svg width="4px" height="7px">
                            <path fill-rule="evenodd"
                                d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z">
                            </path>
                        </svg>
                    </span>
                    <NuxtLink to="/person">Person</NuxtLink>
                    <span class="delimiter">
                        <svg width="4px" height="7px">
                            <path fill-rule="evenodd"
                                d="M3.978,3.702 C3.986,3.785 3.966,3.868 3.903,3.934 L1.038,6.901 C0.920,7.022 0.724,7.029 0.598,6.916 L0.143,6.506 C0.017,6.393 0.010,6.203 0.127,6.082 L2.190,3.945 C2.276,3.829 2.355,3.690 2.355,3.548 C2.355,3.214 1.947,2.884 1.947,2.884 L1.963,2.877 L0.080,0.905 C-0.037,0.783 -0.029,0.593 0.095,0.479 L0.547,0.068 C0.671,-0.045 0.866,-0.039 0.983,0.083 L3.823,3.056 C3.866,3.102 3.875,3.161 3.885,3.218 C3.945,3.267 3.988,3.333 3.988,3.415 L3.988,3.681 C3.988,3.689 3.979,3.694 3.978,3.702 Z">
                            </path>
                        </svg>
                    </span>{{ data.name }}
                </nav>
                <div class="site-content__inner">
                    <div id="primary" class="content-area">
                        <main id="main" class="site-main" role="main">
                            <div class="kokoads Actor_Top_728_90"></div>
                            <header class="page-header">
                                <h1 class="page-title">{{ data.name }}</h1>
                            </header>
                            <div class="vodi-control-bar">
                                <div class="vodi-control-bar__right">
                                    <div class="tv-shows-ordering">
                                        <svg class="svg-icon svg-icon__sort" aria-hidden="true" role="img"
                                            focusable="false" width="17px" height="14px">
                                            <path fill-rule="evenodd"
                                                d="M4.034,-0.001 C4.248,0.009 4.401,0.071 4.578,0.113 C4.699,0.294 4.899,0.408 4.967,0.644 C4.967,1.606 4.967,2.568 4.967,3.529 C4.967,5.972 4.967,8.414 4.967,10.856 C4.980,10.856 4.993,10.856 5.006,10.856 C5.641,10.224 6.276,9.591 6.911,8.958 C7.041,8.873 7.329,8.745 7.572,8.806 C7.930,8.896 8.016,9.121 8.233,9.337 C8.293,10.165 7.817,10.389 7.377,10.818 C6.639,11.539 5.900,12.260 5.161,12.982 C4.928,13.209 4.395,13.909 4.073,13.969 C3.952,13.787 3.760,13.663 3.606,13.513 C3.270,13.184 2.933,12.855 2.596,12.526 C2.052,11.982 1.507,11.438 0.963,10.894 C0.717,10.666 0.471,10.438 0.224,10.211 C0.148,10.110 0.119,9.993 0.030,9.907 C0.015,9.698 -0.048,9.491 0.069,9.337 C0.171,8.957 0.746,8.634 1.235,8.882 C1.922,9.540 2.609,10.198 3.296,10.856 C3.296,7.465 3.296,4.073 3.296,0.682 C3.358,0.600 3.351,0.467 3.412,0.379 C3.511,0.235 3.714,0.158 3.840,0.037 C3.938,0.035 3.984,0.034 4.034,-0.001 ZM12.781,0.037 C12.820,0.037 12.859,0.037 12.898,0.037 C13.999,1.125 15.101,2.214 16.202,3.302 C16.427,3.522 17.287,4.153 16.902,4.668 C16.828,4.945 16.613,4.994 16.435,5.162 C16.280,5.174 16.124,5.187 15.969,5.200 C15.631,5.108 15.447,4.842 15.230,4.630 C14.712,4.137 14.193,3.643 13.675,3.150 C13.675,6.553 13.675,9.958 13.675,13.362 C13.514,13.560 13.485,13.804 13.209,13.893 C13.076,14.007 12.700,14.044 12.548,13.931 C11.760,13.719 12.004,12.233 12.004,11.273 C12.004,8.566 12.004,5.858 12.004,3.150 C11.991,3.150 11.978,3.150 11.965,3.150 C11.676,3.589 10.996,4.095 10.604,4.479 C10.404,4.673 10.198,4.996 9.943,5.124 C9.784,5.204 9.589,5.200 9.360,5.200 C9.238,5.102 9.043,5.080 8.932,4.972 C8.848,4.890 8.822,4.751 8.738,4.668 C8.699,3.730 9.312,3.462 9.827,2.960 C10.811,1.986 11.796,1.011 12.781,0.037 Z">
                                            </path>
                                        </svg>
                                        <form method="get">
                                            <select @change="onChangeOrderBy" class="orderby">
                                                <option value="titleAsc" v-bind:selected="orderBy == 'titleAsc'">A 부터 Z</option>
                                                <option value="titleDesc" v-bind:selected="orderBy == 'titleDesc'">Z 부터 A</option>
                                                <option value="date" v-bind:selected="orderBy == 'date'">시간순</option>
                                                <option value="rating" v-bind:selected="orderBy == 'rating'">별점순</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="vodi-archive-wrapper" data-view="grid">
                                <div class="tv-shows columns-6 movies columns-6">
                                    <div class="tv-shows__inner movies__inner">
                                        <PersonMediaItem v-for="(item, index) in data.items" :key="index"
                                            :pending="pending"
                                            :id="item.id"
                                            :title="item.title"
                                            :slug="item.slug" 
                                            :originalTitle="item.originalTitle" 
                                            :src="item.src"
                                            :srcSet="item.srcSet"
                                            :seasonNumber="item.seasonNumber"
                                            :episodeNumber="item.episodeNumber"
                                            :category="item.category"
                                            :postType="item.postType"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Pagination v-if="data && data.total * 1 > data.perPage * 1" 
                                :total="data.total" 
                                :perPage="data.perPage" 
                                :currentPage="page" 
                                :orderBy="orderBy"
                                @on-select-page="onSelectPage"
                            />
                            <div class="kokoads Actor_Bottom_728_90"></div>
                        </main>
                    </div>
                    <div id="secondary" class="widget-area sidebar-area tv-show-sidebar sidebar-custom" role="complementary">
                        <div class="kokoads Actor_Sidebar_Top_336_280"></div>
                        <div class="widget-area-inner">
                            <PersonThumbnail :pending="pending" :id="data.id" :name="data.name" :src="data.src" />
                        </div>
                        <div class="kokoads Actor_Sidebar_Bottom_336_280"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>