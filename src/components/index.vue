<template>
      <!--<div id="cover-warp">
          <img src="../../static/images/index.jpg">
      </div>-->
 <div id="warp">
			<div class="swiper-container">
				<swiper :options="swiperOption" ref="mySwiper" style="display:flex,justify-content:  space-between;">
				<!--<swiper :options="swiperOption" ref="mySwiper">-->
					<swiper-slide class="Recommend-main-item"><img src="https://meejee.net/booksfile/appcover/index.jpg" class="im"/></swiper-slide>
					<swiper-slide class="Recommend-main-item"><router-link to='AGuestinaGhostHouse'><img src="https://meejee.net/booksfile/appcover/cov1.jpg" class="im"/></router-link></swiper-slide>
					<swiper-slide class="Recommend-main-item"><router-link to='TheTaleoftheGhostEyes'><img src="https://meejee.net/booksfile/appcover/cov.jpg" class="im"/></router-link></swiper-slide>
				 	<swiper-slide class="Recommend-main-item"><router-link to='ReturnoftheSoldierKing'><img src="https://meejee.net/booksfile/appcover/cov2.jpg" class="im"/></router-link></swiper-slide>
				</swiper>
			</div>	
  </div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import marked from 'marked';
	export default {
		data() {
			return {
				swiperOption: {
//						loop : true
//					slidesPerView:1
            }
      }
   }
}
</script>
<style scoped>
	#warp{
		/*width: 200px;
		height: 500px;
		background: black;*/
	}
	#cover-warp{
		width: 10rem;
		height: 17.7866666rem;
		margin: auto;		
	}
	#cover-warp img{
		width: 10rem;
		height: 17.7866666rem;
	}
#Recommend-main-item{
		width: 10rem;
		height: 17.7866666rem;	
}
#Recommend-main-item img{
		width: 10rem;
		height: 17.7866666rem;	
}
.im{
		width: 10rem;
		height: 17.7866666rem;	
}
</style>
