<template>
	
	<div id="wrap">
		<div id="main-wrap-big">
			<div id="banner" v-bind:class="{'widban':img,'minban':imgs}">
				<Slider></Slider>
			</div>
		<div id="header">
			<h1>{{list.title}}</h1>
		</div>
			<!--author-->
			<div id="author">
				<span>Author: {{list.author}}</span>
			</div>
			<!--introduce-->
			<div id="introduce" v-bind:class="{'pcsize':size,'minsize':sizee}">
				<p>{{list.discription}}</p>
			</div>
			<!--Directory-options-->
			<div id="Directory-options">
				<div id="Directory-options-item" v-for="item,index in ulList.slice(0, 8)"" :key="index" @click="changeColor(1,item,item.chapters_id)" :class='{active:index1==item}'>Chapter{{item.chapters_id}}</div>
				<div id="Directory-options-item" @click="show">More</div>
			</div>
			<!--main-->
			<div id="main-wrap">
				<div id="main-subject">
					<!-- <h3>{{chapter.chapter_title}}</h3> -->
				</div>
				<div id="main-text" v-bind:class="{'pcsize':size,'minsize':sizee}">
				<!--<p>{{index1}}</p>-->
				<!--<textarea>{{chapter.content}}</textarea>-->
				<p  id="p" v-html="compiledMarkdown"></p>
				</div>
				<div id="main-bottom">
					<p><img src="../../static/images/jiesudian.png" /></p>
					<span>To be continued</span>
				</div>
				<div id="Chapter-options">
					<!--<div id="Chapter-options-item" @click="topages(1)"><span>Previous</span></div>-->
					<div id="Chapter-options-item" @click="back" v-show="precpt"><span>Previous</span></div>
					<!--<div id="Chapter-options-item" @click="topages(2)"><span>Next</span></div>-->
					<div id="Chapter-options-item" @click="next" v-show="nextcpt"><span>Next</span></div>
				</div>
			</div>
			<!--Extension-->
			<div id="Extension">
				<div id="Extension-up">
					<p>If you want to get the newest update, you can follow us</p>
				</div>
				<div id="Extension-center">
					<div id="Extension-face">
						<div id="Extension-face-left"><img src="../../static/images/facebook.png" /></div>
						<div id="Extension-face-center"><span>MeeJee</span></div>
						<div id="Extension-face-right" @click="followf"><a href="https://www.facebook.com/MeeJeeNovels/" target="_blank">Follow</a></div>
					</div>
					<div id="Extension-twitter">
						<div id="Extension-face-left"><img src="../../static/images/twitter.png" /></div>
						<div id="Extension-face-center1"><span>@MeeJee</span></div>
						<div id="Extension-face-right" @click="followt"><a href="https://twitter.com/MeejeeNovels" target="_blank">Follow</a></div>
					</div>
				</div>
				<div id="Extension-bottom">
					<p>Or you can leave your Email here,we will sent the newest chapter to you when the book is updated</p>
					<input type="text" name="text" id="text" value="" />
					<div id="email-submit" @click="face(faceid)">Subscribe</div>
				</div>
				<!--Recommend-->
				<div id="Recommend">
					<div id="Recommend-top" @click="recommend">
						<h2>You might also like:</h2></div>
					<!--<div id="Recommend-main" v-for="item in bookid" :key="item" :id="item">-->
					<div id="Recommend-main">
						<div class="swiper-container">
							<swiper :options="swiperOption" ref="mySwiper" style="display:flex,justify-content:  space-between;">
								<!-- slides -->
								<swiper-slide class="Recommend-main-item"><router-link to="AGuestinaGhostHouse"><img :src="recommend.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="ReturnoftheSoldierKing"><img :src="recommend1.picture" ></router-link></swiper-slide>
								<!--<swiper-slide class="Recommend-main-item"><router-link to="MyNightclubLandlady"><img :src="recommend2.picture" ></router-link></swiper-slide>-->
								 <swiper-slide class="Recommend-main-item"><router-link to="TheTaleoftheGhostEyes"><img :src="recommend3.picture" ></router-link></swiper-slide> 
								<!-- <swiper-slide class="Recommend-main-item"><router-link to="TheTaoistcareer"><img :src="recommend4.picture" ></router-link></swiper-slide> -->
								<!-- <swiper-slide class="Recommend-main-item"><router-link to="CardMaker"><img :src="recommend5.picture" ></router-link></swiper-slide> -->
								<!-- <swiper-slide class="Recommend-main-item"><router-link to="PsychicTattoo"><img :src="recommend6.picture" ></router-link></swiper-slide> -->
								<swiper-slide class="Recommend-main-item"></swiper-slide>
								<!-- <swiper-slide class="Recommend-main-item"></swiper-slide> -->
							</swiper>
						</div>											
					</div>
				</div>
			</div>
		</div>
		<!--Footer-->
		<div id="footer-big" v-bind:class="{'y':flag}">
			<div id="footer">
				<button id="f-button1" @click="followf"><a href="https://www.facebook.com/MeeJeeNovels/" target="_blank">Follow</a></button>
			</div>
		</div>
		<!--Catalog-window-->
		<div id="window-wrap" v-show="isshow">
			<div id="Catalog-window">
				<div id="wrong" @click="hide"><img src="../../static/images/guanbi.png" /></div>
				<div id="catalog-main">
					<ul>
						<li v-for="item,index in ulList" :key="index" @click="changeColor(1,item,item.chapters_id)" :class='{active:index==item}'>{{item.chapters_title}}</li>
					</ul>
				</div>
			</div>
		</div>
		<!--chaptertoast-->
		<div id="nextchap" v-show="nextchap"><li>It's the last chapter updated,</li><li>please wait</li></div>
		<div id="backchap" v-show="backchap"><span> It's the first chapter.</span></div>
		<!--facetost-->
		<div id="facetost" v-show="isftoast"><li>You have subscribed the</li><li>{{list.title}}</li></div>
		<!--emailface-->
		<div id="mailfalse" v-show="mailfalse"><span>Please enter a correct email</span></div>
	</div>
</template>

<script>
	//	vue.prototype.basepath = '//47.94.240.34:5432/follow/';
	import Slider from "./slider";
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import marked from 'marked';
	export default {
		components:{
			Slider
		},
		data() {
			return {
				swiperOption: {
					freeMode : true,
					slidesPerView:3
      		  },
				img:false,
				imgs:false,
				isshow: false,
				flag: false,
				list: [],
				recommend:[],recommend1:[],recommend2:[],recommend3:[],recommend4:[],recommend5:[],recommend6:[],
				chapter:[],
				bookid: [],
				detailId: this.getBookId(),
				chapterid: "",
				bookid:"",
				faceid: "",
				ulList1: [],
				is:false,is1:false,is2:false,is3:false,is4:false,is5:false,iss:false,
				index1: 1,
				ulList: [],
				index: 1,
				page:"",
				chapter2:[],
				chapterindex: 1,//章节数
				chaptercontent: "",//显示内容
				pages:"",
				chapter:"",
				chapter_id: "",
				top:"",
				content:"",
				size:false,sizee:false,isftoast:false,nextchap:false,backchap:false,mailfalse:false,nextcpt:true,precpt:true
			}
		},

		mounted() {
		  this.width();
		  //this.request();
		  //this.topages();
		},
		computed:{
			compiledMarkdown(){
				return marked(this.content);
			}
		},
		created() {
			this.getBookId();
			// this.$http.post('http://47.94.240.34/chapter/',{book_id:1,chapter_id:this.chapterindex},
			this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:1},
			{emulateJSON:true})
			.then(res => {
			this.is=true;
			this.iss=true;
			this.precpt=false;
			this.list = (res.body.ResultDate.bookInfo);
			this.chapter = (res.body.ResultDate.chapterInfo);
			this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
			this.ulList = (res.body.ResultDate.bookInfo.chapters);
			this.ulList1 = (res.body.ResultDate.bookInfo.chapters);
			// this.content = (res.body.ResultDate.chapterInfo.content);
			this.detailId =(res.body.ResultDate.bookInfo.id);
			this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
//			let zx=this.$route.query;
			// console.log(this.$route.query)
			this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) 
			// console.log(this.$route.query)
			this.bookid= this.$route.query.detailId;
			// this.chapterid= this.$route.query.chapter_id;
			// console.log(this.bookid)
			},err => {
				console.log(error);		
			});

			// this.$http.get('https://47.94.240.34/chapter/',{params: {book_id:this.bookid,chapter_id:this.chapterid}})
			// // ,{emulateJSON:true})
			// .then(res => {
			// 	// this.content = (res.body.ResultDate.chapterInfo.content);
			// 	this.bookid= this.$route.query.detailId;
			// 	this.chapterid= this.$route.query.chapter_id;
			// },err => {
			// 	console.log(err)
			// });

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
            this.$http.post('https://www.meejee.net/chapter/',{book_id:5,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend4=res.body.ResultDate.bookInfo;
            });
            this.$http.post('https://www.meejee.net/chapter/',{book_id:6,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend5=res.body.ResultDate.bookInfo;
            });
            this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:1},
            {emulateJSON:true})
            .then(res=> {
				this.recommend6=res.body.ResultDate.bookInfo;
            });
			// //推荐列表
			// this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:1},
			// {emulateJSON:true})
			// .then(res => {
			// this.recommend = (res.body.ResultDate.suggestionBooks[0]);
			// this.recommend1 = (res.body.ResultDate.suggestionBooks[1]);
			// this.recommend2 = (res.body.ResultDate.suggestionBooks[2]);
			// this.recommend3 = (res.body.ResultDate.suggestionBooks[3]);
			// this.recommend4 = (res.body.ResultDate.suggestionBooks[4]);
			// this.recommend5 = (res.body.ResultDate.suggestionBooks[5]);
			// this.recommend6 = (res.body.ResultDate.suggestionBooks[6]);
			// // console.log(res.body.ResultDate.suggestionBooks)
			// // console.log('asd')
			// 	},err => {
			// //alert('wrong');
			// 	console.log(error);		
			// });
			//章节			
			//模拟接口取数据，这里直接赋值
			//this.pages();
//			this.chaptercontent = this.chapterlist[0];
//			this.index1 = this.chaptercontent;	
//			this.ro();
		},
		methods: {
			ro:function(){
				let zx=this.$route.query(this.detailId);
				console.log(zx)
			},
			//章节
						
			//分页
			next:function(){
				this.chapter_id =this.chapter_id+1;
//				this.nc=this.nc+1;
				this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:this.chapter_id},
				{emulateJSON:true}
			).then(res => {
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.chapterinfo = (res.body.ResultDate.chapterInfo.next_chapter_id);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.top = document.getElementById('main-wrap-big').scrollTop=500;
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
				
//				this.nc =this.chapter_id+1;
				console.log(this.nc)
					if(this.chapterinfo==0){
						this.is,this.is2,this.is3,this.is4=false;
						this.is5=true;
//						this.nextchap=true;
//						setInterval(() => { 
//					    this.nextchap=false;
//					    }, 3000)
						this.nextcpt=false;
				}		
					if(this.chapter_id==1){this.is=true;this.is1,this.is2,this.is3,this.is4,this.is5=false;this.prechap=false;this.nextcpt=true;}
					if(this.chapter_id==2){this.is1=true;this.is=false,this.is2,this.is3,this.is4,this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==3){this.is=false;this.is1=false;this.is2=true;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==4){this.is=false;this.is1=false;this.is2=false;this.is3=true;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==5){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=true;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==6){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=false;this.is5=true;this.nextcpt=false;this.precpt=true;}							
			},err => {
//					console.log('err');		
				});
			},
			back:function(){
				this.chapter_id =this.chapter_id-1;
				this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:this.chapter_id},
				{emulateJSON:true})
				.then(res => {
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapterinfo = (res.body.ResultDate.chapterInfo.pre_chapter_id);
				this.top = document.getElementById('main-wrap-big').scrollTop=500;
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					if(this.chapterinfo==0){
//						this.backchap=true;
//						setInterval(() => { 
//					    this.backchap=false;
//					    }, 3000)
						this.precpt=false;
					}
					if(this.chapter_id==1){this.is=true;this.is1=false;this.is2=false;this.is3=false;this.is4=false;this.is5=false;this.prechap=false;this.nextcpt=true;}
					if(this.chapter_id==2){this.is=false;this.is1=true;this.is2=false;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==3){this.is=false;this.is1=false;this.is2=true;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==4){this.is=false;this.is1=false;this.is2=false;this.is3=true;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==5){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=true;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==6){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=false;this.is5=true;this.nextcpt=false;this.precpt=true;}				
				},err => {
					console.log('a')
				});				
			},
			//分页
			//
			topages: function(w,index1) {
			if(w == 1 && this.chapterindex > 1) {//模拟
			this.chapterindex = this.chapterindex - 1;//模拟
			
			} else if (w == 2) {//模拟
			this.chapterindex = this.chapterindex + 1;//模拟
			
			}
			this.chaptercontent = this.chapterlist[this.chapterindex];//模拟
//			this.index1 = this.chaptercontent;
			},
			getBookId: function (){
				//这里发送请求获取bookid，成功回调里面给bookid赋值，给detailId赋值
//				this.bookid = [1,2,3,4,5,6];
//				this.detailId = this.bookid[0];
			},
			//章节选项样式切换
			changeColor: function (s,a,item) {		
			this.chp=item;
			this.$http.post('https://www.meejee.net/chapter/',{book_id:"2",chapter_id:this.chp},{emulateJSON:true}
			).then(res => {
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.isshow=false;				
				console.log(res)
					},err => {
				console.log('err');		
			})
				if(s == 1) {
					this.index1 = a;
				} else if(s == 2) {
					this.index = a;
				} else {}
			},
			show:function() {
				this.isshow = true;
			},
			hide:function() {
				this.isshow = false;
			},
			width:function() {
				//			let width = document.body.offsetWidth;
				let width = document.getElementById('wrap').offsetWidth;
				if(width > 500) {
					this.flag = true;
					this.img =true;
					this.midban=false;
					this.size=true;
					this.sizee=false;
				} else {
					this.flag = false;
					this.img=false;
					this.imgs=true;
					this.size=false;
					this.sizee=true;
				}
			},
			//facebook 
			face:function() {
				let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
				let mail = document.getElementById('text').value;
//				console.log(this.faceid);	
				if(reg.test(mail)) {
//					alert('ok');
//					console.log(mail)
					this.$http.post('https://www.meejee.net/subscibe/',{book_id:this.detailId,chapter_id:this.chapter_id,email:mail,type:'facebook'},{emulateJSON:true}
				    ).then(res => {
//				    	mail = mail.replace("Microso","");
						this.isftoast=true;
						console.log(this)
					        setInterval(() => { 
					            this.isftoast=false;
					        }, 4000)
						document.getElementById('text').value="";
//					console.log(res);
					},err => {
				//alert('wrong');
					console.log('err');		
					});
					}else {
						this.mailfalse=true;
//						document.getElementById('facetost').innerText="Please enter a correct email";
						console.log(this)
					        setInterval(() => { 
					            this.mailfalse=false;
					        }, 4000)
						document.getElementById('text').value="";						
//						return;
					}
					if(mail == '') {
						this.mailfalse=true;
						document.getElementById('facetost').innerText="Please enter the mailbox";
						console.log(this)
					        setInterval(() => { 
					            this.mailfalse=false;
					        }, 4000)
					}
			},
			//facebook follow
			followf() {
					console.log(this.detailId);				
					this.$http.post('https://www.meejee.net/follow/',{book_id:this.detailId,chapter_id:this.chapter_id,type:'facebook'},{emulateJSON:true}
				    ).then(res => {
					console.log(res);
					},err => {
				//alert('wrong');
					console.log('err');		
					});
			},
			//twitter follow
			followt()　{
					this.$http.post('https://www.meejee.net/follow/',{book_id:this.detailId,chapter_id:this.chapter_id,type:'twitter'},{emulateJSON:true}
				    ).then(res => {
					console.log(res);
					},err => {
				//alert('wrong');
					console.log('err');		
					});				
			},
			a(item) {
//				let i = item;
//				this.faceid = item;
//				console.log(i);
//				this.detailId = item;
			}

		}
	}
</script>

<style scoped>
	*{
		font-family: "Microsoft YaHei";
	}
	#nextchap{
		width: 7rem;
		height: 1.8rem;
		background: rgba(0,0,0,0.6);
		/*background: black;*/
		position: fixed;
		color: white;
		text-align: center;
		/*line-height: 1.1rem;*/
		font-size: 0.4125rem;
		border-radius: 0.208125rem;
		margin: auto;
		left:0; right:0; top:0; bottom:0;
	}
	#nextchap li{
		padding-top: 0.15625rem;
	}
	#backchap{
		width: 7rem;
		height: 1.1rem;
		background: rgba(0,0,0,0.6);
		position: fixed;
		color: white;
		text-align: center;
		line-height: 1.1rem;
		font-size: 0.5125rem;
		border-radius: 0.208125rem;
		margin: auto;
		left:0; right:0; top:0; bottom:0;
	}
	#facetost{
		width: 4.5rem;
		height: 1.35rem;
		background: rgba(0,0,0,0.6);
		font-family: "微软雅黑";
		position: fixed;
		left:0; right:0; top:0; bottom:0;
		color: white;
		font-size: 0.28rem;
		text-align: center;
		border-radius:0.125rem ;
		margin: auto;
	}
	#mailfalse{
		width: 5.2rem;
		height: 1.35rem;
		line-height: 1.35rem;
		background: rgba(0,0,0,0.6);
		font-family: "微软雅黑";
		position: fixed;
		left:0; right:0; top:0; bottom:0;
		color: white;
		font-size: 0.38rem;
		text-align: center;
		border-radius:0.125rem ;
		margin: auto;
	}
	#facetost li{
		padding-top: 0.15625rem;
	}
	.y {
		display: none;
	}
	#wrap {
		width: 10rem;
		height: 100%;
		margin: 0 auto;
	}
	
	#main-wrap-big {
		height: 100%;
		overflow-y: scroll;
		position: absolute;
		-webkit-overflow-scrolling: touch;
	}
	
	#header {
		width: 10rem;
		height: 1.694444rem;
		line-height: 1.694444rem;
		text-align: center;
		color: #36219d;
		margin: auto;
		background-size:10rem 1.694444rem;
		/*box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);
		-webkit-box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);
		-moz-box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);*/
	}
	#header h1{
		/*width:400px;*/
		margin-top: 0.3266666rem;
		text-align:left;
		text-indent: 0.76rem;
	}
	.widban {
		width: 5.3rem;
		height: 4rem;
		margin:0 auto;	
	}
	.widban img{
		width: 5.3rem;
		height: 4rem;
/*		margin-left: 10%;*/
	}
	.minban {
		width: 10rem;
		height: 6.944444rem;
		margin:0 auto;
	}
	.minban img {
		width: 10rem;
		height: 6.944444rem;
	}
	/*Author*/
	
	#author {
		width: 10rem;
		height: 1.327777rem;
		/*line-height: 0.1rem;*/
		font-size: 0.438888rem;
		text-indent:0.76rem;
		color: #36219d;
		margin: auto;
		/*margin-bottom: 0.2666666rem;*/
	}
	
	
	#Directory-options {
		width: 8.333333rem;
		/*height: 0.984375rem;*/
		padding-top: 0.477777rem;
		margin: auto;
		background: white;
	}
	
	.cess {
		width: 2.3rem;
		height: 0.777777rem;
		line-height: 0.777777rem;
		background: white;
		float: left;
		margin-left: 0.346666rem;
		margin-top: 0.416666rem;
		border-radius: 0.055555rem;
		text-align: center;
		font-size: 0.333333rem;
		background: url(../../static/images/weixuananniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		color: rgba(54, 33, 157, 0.3);
	}
	.ces{
		width: 2.3rem;
		height: 0.777777rem;
		line-height: 0.777777rem;
		/*background: white;*/
		float: left;
		margin-left: 0.346666rem;
		margin-top: 0.416666rem;
		border-radius: 0.055555rem;
		text-align: center;
		font-size: 0.333333rem;
		background:url(../../static/images/shitianniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		color: white;		
	}
	
	#Directory-options-item {
		width: 2.3rem;
		height: 0.777777rem;
		line-height: 0.777777rem;
		background: white;
		float: left;
		margin-left: 0.346666rem;
		margin-top: 0.416666rem;
		border-radius: 0.055555rem;
		text-align: center;
		font-size: 0.333333rem;
		background: url(../../static/images/weixuananniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		color: rgba(54, 33, 157, 0.3);

	}
	#Directory-options-item.active{
		background: url(../../static/images/tangchuangxuanze.png);
		background: #36219d;
		border-radius: 0.3333333rem;
		/*background-size: 7rem 0.777777rem;*/
		color: white;
		width: 2.3rem;
		height: 0.777777rem;
	}
	/*main-text*/
	
	#main-subject {
		width: 8.5rem;
		/*height: 1.22222rem;*/
		font-size: 0.38rem;
		color: #36219d;
		line-height: 1.22222rem;
		text-align: center;
		margin-top: 4.1rem;
		margin-left: auto;
		margin-right: auto;
	}
	
	#main {
		width: 9.583333rem;
		text-align: center;
		/*margin-top: 1.8625rem;*/
	}
	
	#main-text {
		width: 8.5rem;
		/*height: 100%;*/
		margin: auto;
		/*text-align: center;*/
		/*color: rgba(0, 0, 0, 0.87);*/
		/*font-size:0.40625rem;*/
		font-family: Microsoft YaHei;
		text-align:justify;
		text-justify:distribute;
		}
	.pcsize{
		font-family: Microsoft YaHei;
		text-align:justify;
		text-justify:distribute;
		font-size:0.22rem;
		color: rgba(0, 0, 0, 0.87);
		width: 8.5rem;
		margin: auto;
	}	
	.minsize{
		font-family: Microsoft YaHei;
		text-align:justify;
		text-justify:distribute;
		font-size:0.4675rem;
		color: rgba(0, 0, 0, 0.87);
		width: 8.5rem;
		margin: auto;
	}
	#main-text  p{
		font-family: Microsoft YaHei;
	}
	#introduce {
		/*width: 9.583333rem;*/
		width: 8.5rem;
		/*height: 100%;*/
		/*text-align: center;*/
		margin: auto;
		color: rgba(0, 0, 0, 0.75);
		text-align:justify;
		text-justify:distribute;
		/*font-size:0.34375rem;*/
		font-family: Microsoft YaHei;
	}
	#introduce p{
		margin-top: -0.5rem;
	}
	#main-bottom {
		width: 3.8rem;
		height: 0.933333rem;
		margin: auto;
		margin-top: 0.32rem;
		text-align: center;
		color: #36219D;
		font-size: 0.346666rem;
	}
	
	#main-bottom img {
		width: 0.5rem;
		height: 0.5rem;
	}
	
	#Chapter-options {
		width: 9.583333rem;
		margin: 0.416666rem auto;
		height: 1.388888rem;
		font-size: 0.333333rem;
		padding-top: 0.2rem;
		display: flex;
		justify-content: space-around;
		
	}
	
	#Chapter-options-item:nth-of-type(1) {
		width: 2.3rem;
		height: 0.777777rem;
		line-height: 0.777777rem;
		text-align: center;
		background: url(../../static/images/weixuananniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		/* margin-left: 0.416666rem; */
		/* float: left; */
		color: rgba(54, 33, 157, 0.3);
	}
	
	#Chapter-options-item:nth-of-type(2) {
		width: 2.3rem;
		height: 0.777777rem;
		line-height: 0.777777rem;
		text-align: center;
		background: url(../../static/images/weixuananniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		/* margin-right: 0.416666rem; */
		/* float: right; */
		color: rgba(54, 33, 157, 0.3);
	}
	/*Extension*/
	
	#Extension {
		width: 10rem;
		height: 9.066666rem;
		text-align: center;
		margin: auto;
		background: url(../../static/images/lianxibeijing.png)no-repeat;
		background-size: 10rem 10.066666rem;
	}
	
	#Extension-up {
		height: 1.066666rem;
		line-height: 1.066666rem;
		font-size: 0.32rem;
		color: rgba(0, 0, 0, .7);
		text-align: left;
		text-indent: 0.4rem;
	}
	
	#Extension-face {
		width: 10rem;
		height: 1.6rem;
		background-size: 10rem 2rem;
	}
	
	#Extension-face-left {
		width: 1.133333rem;
		height: 1.133333rem;
		margin-top: 0.4rem;
		margin-left: 0.4rem;
		float: left;
	}
	
	#Extension-face-left img {
		width: 1.133333rem;
		height: 1.133333rem;
		border-radius: 0.144444rem;
	}
	
	#Extension-face-center {
		width: 4rem;
		height: 1.133333rem;
		line-height: 2rem;
		float: left;
		font-size: 0.48rem;
		color: rgba(0, 0, 0, 0.87);
		font-weight: bold;
		margin-left: 0.1rem;
	}
	
	#Extension-face-center1 {
		width: 4rem;
		height: 1.133333rem;
		line-height: 2rem;
		float: left;
		font-size: 0.48rem;
		color: rgba(0, 0, 0, 0.87);
		font-weight: bold;
		margin-left: 0.3rem;
	}
	
	#Extension-face-right {
		width: 2.133333rem;
		height: 0.666666rem;
		background: url(../../static/images/shitianniu.png)no-repeat;
		background-size: 2.133333rem 0.666666rem;
		float: right;
		margin-top: 0.656666rem;
		color: #FFFFFF;
		line-height: 0.666666rem;
		text-align: center;
		margin-right: 0.4rem;
	}
	#Extension-face-right a{
		color: #FFFFFF;
		font-size: 0.375rem;
	}
	#Extension-twitter {
		width: 10rem;
		height: 1.6rem;
		/*background: url(../../static/images/Facebookxuanfu.png);*/
		background-size: 10rem 2rem;
	}
	#Extension-bottom p {
		width: 9.2rem;
		height: 0.32rem;
		/*padding-top: 0.533333rem;*/
		font-size: 0.32rem;
		color: rgba(0, 0, 0, .7);
		text-align: left;
		/* text-indent: 0.4rem; */
		margin: auto;
		padding-top: 0.2rem;
	}
	
	#text {
		width: 9.2rem;
		height: 0.8rem;
		margin: auto;
		margin-top: 1.08rem;
		background: url(../../static/images/youxiangshuru.png)no-repeat;
		background-size: 9.2rem 0.8rem;
		border: none;
		outline: none;
		text-indent: 0.426666rem;
		color: rgb(54, 33, 157);
		font-size: 0.32rem;
	}
	
	#email-submit {
		width: 2.4rem;
		height: 0.866666rem;
		line-height: 0.866666rem;
		background: url(../../static/images/shitianniu.png)no-repeat;
		background-size: 2.4rem 0.866666rem;
		margin: 0.22rem auto;
		color: #FFFFFF;
		font-size: 0.396666rem;
	}
	/*Recommend*/
	
	#Recommend {
		width: 10rem;
		height: 10.853333rem;
		margin: auto;
		/*background: black;*/
	}
	
	#Recommend-top {
		width: 10rem;
		height: 1.4rem;
		background: white;
		text-align: left;
		line-height: 2.1rem;
		text-indent: 0.4rem;
		font-weight: bold;
		color: RGB(54,33,157);
	}
	
	#Recommend-main {
		width: 10rem;
		height: 3.066666rem;
		margin-top: 0.426666rem;
		/* overflow-x: scroll;
		overflow-y: hidden; */
		/* display: flex;
		justify-content: flex-start; */
	}
	#Recommend-main-wrap {
		width: 12.4rem;
		/* display: flex;
		justify-content: flex-start; */
	}	
	.Recommend-main-item:nth-of-type(1){
		margin-left: 0;
	}
	.Recommend-main-item:nth-of-type(8){
		width: 14rem;
		/* background: black; */
		margin-left: 0.9rem;
	}
	.Recommend-main-item {
		width: 4rem;
		height: 2.666666rem;
		margin-left: 1rem;
	}
	
	.Recommend-main-item img {
		width: 4.2rem;
		height: 2.776666rem;
	}
	/*Footer*/
	
	#footer {
		width: 100%;
		/*height: 0.6533333rem;*/
		background: url('https://meejee.net/booksfile/appcover/bbbb.png')no-repeat;
		background-position: 0 -0.2466666rem;
		-webkit-box-shadow: 0px -0.10625rem 0.39375rem 0.1rem rgba(0,0,0,0.3);	
		background-size: 100% 1.763888rem;
		position: fixed;
		bottom: -0.3rem;
		left: 0;
		z-index: 99;
		/*display: none;*/
	}
	
	#footer-face {
		width: 2rem;
		height: 2rem;
		background: url(../../static/images/facebook.png)no-repeat;
		background-size: 1rem 1rem;
		background-position-x: 0.416666rem;
		background-position-y: 0.31111111rem;
		float: left;
	}
	
	#footer-center {
		width: 4.777777rem;
		height: 1.294444rem;
		margin-top: 0.377777rem;
		float: left;
	}
	
	#footer-center span:nth-of-type(1) {
		font-size: 0.416666rem;
		font-weight: bold;
	}
	
	#f-button1 {
		float: right;
		margin-top: 0.3333rem;
		width: 2.4rem;
		height: 0.866666rem;
		line-height: 0.866666rem;
		background: url(../../static/images/shitianniu.png)no-repeat;
		background-size: 2.4rem 0.866666rem;
		border: none;
		margin-right: 0.2rem;
		outline: none;
		color: #FFFFFF;
		font-size: 0.375rem;
	}
	/*Catalog-window*/
	
	#window-wrap {
		width: 10rem;
		height: 100%;
		margin: 0 auto;
		position: relative;
	}
	
	#Catalog-window {
		width: 10rem;
		height: 19.5327rem;
		<!-- background: rgba(0, 0, 0, .4); -->
		position: absolute;
		top: 0;
	}
	
	#wrong {
		width: 0.4rem;
		height: 0.4rem;
		float: right;
		margin-top: 0.689966rem;
		margin-right: 1rem;
	}
	
	#wrong img {
		width: 0.52rem;
		height: 0.733333rem;
	}
	
	#catalog-main {
		width: 9.383333rem;
		height: 6.566666rem;
		margin: auto;
		margin-top: 1.333333rem;
		background: #FFFFFF;
		background: url(../../static/images/tanchaungbeijing.png)no-repeat;
		background-size: 9.383333rem 6.566666rem;
		overflow-y: scroll;
	}
	
	#catalog-main ul {
		padding-top: 0.266666rem;
	}
	
	#catalog-main li {
		width: 8.133333rem;
		height: 0.666666rem;
		background: white;
		margin: auto;
		text-align: center;
		line-height: 0.666666rem;
		background: url(../../static/images/tanchuangweixuan.png);
		background-size: 8.133333rem 0.666666rem;
		color: #FFFFFF;
		margin-top: 0.32rem;
		color: #000000;
	}
	
	/*#catalog-main li:nth-of-type(1),*/
	#catalog-main li.active {
		background: url(../../static/images/tangchuangxuanze.png);
		background-size: 8.133333rem 0.666666rem;
		color: white;
	}
	
	#catalog-main li:nth-last-of-type(1) {
		margin-bottom: 0.266666rem;
	}
</style>

