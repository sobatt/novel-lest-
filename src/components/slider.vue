<template>
	<div id="head" v-bind:class="{'widban':img,'minban':imgs}">
		<div class="swiper-container">
			<swiper :options="swiperOption" ref="mySwiper" style="display:flex,justify-content:  space-between;">
				<swiper-slide class="Recommend-main-ite"><router-link to="ReturnoftheSoldierKing"><img :src="recommend1.picture" class="im"></router-link></swiper-slide>
				<swiper-slide class="Recommend-main-ite"><router-link to="TheTaleoftheGhostEyes"><img src="https://meejee.net/booksfile/appcover/aaaa.jpg" class="im"/></router-link></swiper-slide> 
				<swiper-slide class="Recommend-main-ite"><router-link to="AGuestinaGhostHouse"><img :src="recommend.picture" class="im"></router-link></swiper-slide>
						<!--<swiper-slide class="Recommend-main-item"><router-link to="MyNightclubLandlady"><img :src="recommend2.picture" ></router-link></swiper-slide>-->
			     <div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>
		</div>		
	</div>	
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	
	
	export default {
		data() {
			return {
				img:false,
				imgs:false,
				swiperOption: {
					autoplay:true,
					 scrollbar: {
			            el: '.swiper-scrollbar',
			            hide: true
			         },
					 pagination: {
		             el: '.swiper-pagination',
		             clickable: true
		        },  
		         navigation: {
		            nextEl: '.swiper-button-next',
		            prevEl: '.swiper-button-prev'
		          },

		         
           },
           
           recommend:[],recommend1:[],recommend2:[],recommend3:[]
      }
  },
  created(){
            this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend=res.body.ResultDate.bookInfo;
            });
            this.$http.post('https://www.meejee.net/chapter/',{book_id:2,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend1=res.body.ResultDate.bookInfo;
            });
            this.$http.post('https://www.meejee.net/chapter/',{book_id:3,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend2=res.body.ResultDate.bookInfo;
            });
            this.$http.post('https://www.meejee.net/chapter/',{book_id:4,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend3=res.body.ResultDate.bookInfo;
            });
            window.onload=function(){
//          	console.log(document.getElementsByClassName('swiper-pagination-bullet')[0]);
//          	documentgetElementsByClassName('swiper-pagination-bullet')[0].style.backgroundColor = 'red';
            	
            }
  }
}
	
		
</script>
<style scoped>
	.widban {
		width: 5.3rem;
		height: 4rem;
		margin:0 auto;	
	}
	.widban .swiper-container{
		width: 5.3rem;
		height: 4rem;
/*		margin-left: 10%;*/
	}
	.widban .im{
		width: 5.3rem;
		height: 4rem;		
	}
	.minban {
		width: 10rem;
		height: 6.944444rem;
		margin:0 auto;
	}
	.minban .swiper-container {
		width: 10rem;
		height: 6.944444rem;
	}
	.swiper-container{
		width: 10rem;
		height: 6.944444rem;	
		-webkit-box-shadow: 0px 0.10625rem 0.39375rem 0.1rem rgba(0,0,0,0.3);	
	}
	#head{
		width: 10rem;
		height: 6.944444rem;
		position: absolute;
		left: 0;
		right: 0;
		/*-webkit-box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);*/
		margin: auto;
	}
	#Recommend-main-ite{
		width: 10rem;
		height:6.944444rem;
	}
	#Recommend-main-ite img{
		width: 10rem;
		height: 6.944444rem;
	}
	.im{
		width: 10rem;
		height: 6.65rem;	
	}
	.swiper-pagination-bullet{
		background:blue;
	}
	/*#slider span{
		background:red;
		
	}*/

</style>