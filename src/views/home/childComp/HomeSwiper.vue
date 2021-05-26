<template>
  <div>
    <swiper class="swiper">
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index';
	export default {
		name: 'HomeSwiper',
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {

		}
	}
</script>

<style>
.swiper{
  height: 160px;
}
</style>
