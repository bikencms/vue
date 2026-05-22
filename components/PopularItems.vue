<script setup>

const props = defineProps(['id', 'date', 'title', 'totalEp', 'thumbnail'])
const id = props.id
const date = props.date
const title = props.title
const totalEp = props.totalEp
const thumbnail = props.thumbnail
</script>

<template>
    <div class="tv-show tv_show type-tv_show status-publish has-post-thumbnail hentry category-apple-tv category-u-drama">
        <div class="tv-show__poster">
            <div class="box-tv-channel">
                <img src="/images/appletv.png" alt="" width="60" height="31" class="tv-channel">
            </div>
            <a :href="{path: '/episode/' + id}" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link"><img width="300"
                height="450"
                :src="thumbnail.src"
                class="tv-show__poster--image tv_show__poster--image" alt="" loading="lazy"
                :srcset="thumbnail.srcset"
                sizes="(max-width: 300px) 100vw, 300px">
            </a>
        </div>
        <div class="tv-show__body"><span class="tv-show__meta--release-year">{{ date }}</span>
            <a :href="{path: '/episode/' + id}" class="masvideos-LoopTvShow-link masvideos-loop-tv-show__link tv-show__link">
                <span style="display:none" class="span_sea_ep_title">{{ totalEp }}화</span>
                <h3 class="masvideos-loop-tv-show__title  tv-show__title">{{ title }}</h3>
            </a>
            <span class="tv-show__meta--genre">
                <a href="/tv-show-genre/%eb%93%9c%eb%9d%bc%eb%a7%88/" rel="tag">드라마</a>
            </span>
        </div>
    </div>
</template>