<template>
	<div id="wrap">
		<div id="header">
			<h1>{{list.title}}</h1>
		</div>
		<div id="main-wrap-big">
			<!--banner-->
			<div id="banner" v-bind:class="{'widban':img,'minban':imgs}">
				<img :src="list.picture" />
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
				<!--<div id="Directory-options-item" v-for="item in ulList1" :key="item" @click="changeColor(1, item)" :class='{active:index1==item}'>
						{{item}}
				</div>-->
				<div id="Directory-options-item" @click="chapters"  v-bind:class="{'ces':is,'cess':iss}">Chapter1</div>
				<div id="Directory-options-item" @click="chapters2" v-bind:class="{'ces':is1,'cess':iss}">Chapter2</div>
				<div id="Directory-options-item" @click="chapters3" v-bind:class="{'ces':is2,'cess':iss}">Chapter3</div>
				<div id="Directory-options-item" @click="chapters4" v-bind:class="{'ces':is3,'cess':iss}">Chapter4</div>
				<div id="Directory-options-item" @click="chapters5" v-bind:class="{'ces':is4,'cess':iss}">Chapter5</div>
				<!--<div id="Directory-options-item">Chapter7</div>
				<div id="Directory-options-item">Chapter8</div>-->
				<!--<div id="Directory-options-item" @click="show">More</div>-->
			</div>
			<!--main-->
			<div id="main-wrap">
				<div id="main-subject">
					<!-- <h3>{{chapter.chapter_title}}</h3> -->
				</div>
				<div id="main-text" v-bind:class="{'pcsize':size,'minsize':sizee}">
				<!--<p>{{index1}}</p>-->
				<!--<textarea>{{chapter.content}}</textarea>-->
				<p v-html="compiledMarkdown"></p>
					<!--<p>Dragon Mountain Calendar, Year 9616. Winter. Tranquil Sun Province, Azure River County, within the Water Rites Town. A boy about seven or eight years old dressed in exquisitely tailored clothes made of white fur dashed dashed through the mountains with a bag on his back. His red lips parted in smile to reveal his pearly teeth. He held a spear of black wood in his right hand. Snow gently drifted off the rustled leaves from the surrounding trees as he pursued a terror-stricken wild deer. "Alright!" The boy hoisted up the short spear. His body tilted slightly backwards, strength flowing from his waist to his right arm as he threw the spear! Whoosh! The short spear whistled through the air, piercing a few tree leaves as it covered a distance of 30 meters, just barely scraping past the rear of the wild deer. Only a speck of blood remained on the deer’s butt after it landed in the snow. The wild deer accelerated with all of its might towards the depths of the mountains. But just as it was about to run out of sight… A rock flew by. The rock flew through the through the mountain forest like a laser, instantly closing the 100 meter gap. With a thump, it pierced through the trunk of a large tree and then the deer’s skull. The wild deer swayed from side to side as its momentum carried it forward ten more meters before crashing into the ground. "Father!" The boy turned his head and looked into the distance. "Don’t help me. A little more and I would have got it." "That deer would have escaped if I didn’t help. Your spear’s accuracy while running is still inadequate. Tonight, go back and practice using the spear another 500 times." The forceful voice resonated from far away. Two figures appeared in the distance.. One was a rather sturdy middle-aged man with black hair and black eyes who carried a box of weapons on his back. The other was even bulkier, towering at over two meters in height. His arms were thicker than human thighs, his head was that of a lion. He truly did have a lion’s head and a human’s body! His messy blonde hair clearly marked him as one of the seldom seen ‘Lionmen’ of the beastman race. He also carried a box. The middle-aged man smiled, "Tong San, old friend, you see how great my son is? He’s only eight yet he’s already as strong as a grown man." "Mn. Xue Ying is not bad. It won’t be a problem for him to surpass you in the future," Tong San teased. "Of course he’ll be stronger than me. When I was eight, I was still laughing around and playing with the village’s children. I didn’t understand anything at all. I only got a chance to start cultivating qi after entering the army!" The middle-aged man sighed in regret. "I may not be able to provide my son with the best conditions for training, but as his father, I will spare no effort to raise him properly!" "Dong Bo, it’s already impressive that you’ve become a Heaven Rank Knight after starting off as a commoner and purchased your own territory to become a lord." The brawny lion-man smiled. This middle-aged male was the lord of a territory of more than 100 square kilometers: Baron Dong Bo Lie! Baron was the lowest title of nobility in the Xia Clan’s Mountain Dragon Empire. When the empire had first been established, the awarding of noble titles was very strict. The current empire had already existed for 9000 years. This goliath had now fallen to the point where the government permitted low rank noble titles to be bought and sold. Dong Bo Lie and his wife had decided to buy a noble title only because they had a child. After buying a piece of land, they had named it Snow Eagle Territory after their son!It was clear how much they loved him. Of course, this was only a small piece of land in Water Rites County. "I only started cultivating Qi when I was twenty years old, but my son is different. He’s only eight right now. I estimate that once he’s around ten years old he can begin cultivating Qi." Dong Bo Lie roared with laughter. "He will definitely surpass me." Dong Bo Lie looked at his son with fatherly love and expectation. "Considering what I’ve seen, ten years old sounds about right." The brawny lion-man also approved. With all their life experience, their judgement was surely accurate. "Father, you could actually throw a rock through a tree from so far away?" The boy stood next to the tree. He tried to hug it, but was unable to completely wrap his arms around it. Its trunk had a massive hole. "It would take forever for me to cut down a tree this thick." "Now you know the power of a Heaven Rank Knight," Tong San said. Dong Bo Lie chuckled. As a father, he still liked to show off in front of his son. "As powerful as a god?" The boy deviously grinned. "God?" Dong Bo Lie and the Tong San went silent. The Dragon Mountain Empire’s founder, the Dragon Mountain Emperor, was a formidable god. This was common knowledge, almost everyone in this world knew this. Dong Bo Lie could be considered a brave individual within the army, but compared to a god? There was simply no comparison. "It seems practicing 500 times is too little for you tonight. Mn. Let’s add one another 1000" Dong Bo Lie licked his lips. "Father!" The boy opened his eyes wide. "You, you..." "Looks like you still dare to argue with me! Remember, when arguing with your father, you will definitely suffer losses. Alright, now go back, go back." Dong Bo Lie said. Tong San took out a flute, put it in his mouth, and played a few low notes. The sound spread throughout the mountains. Soon, twenty armored soldiers rapidly rushed over. "Take the deer back." Dong Bo Lie commanded. "Yes, m’lord." The soldiers respectfully responded. Dong Bo Lie and Tong San brought Xue Ying to the peak of the mountain. A large number of horses and approximately 100 soldiers were gathered here. A mysterious purple-gowned lady was seated on a blanket atop the snow. Next to the purple-gowned lady was a child about two or three years old jumping around. The soldiers looked at the purple-gowned lady with reverence. This purple-gowned lady was a powerful mage! "Pebble, come look who’s here," the lady said. The two or three year old child immediately turned his head to look, eyes brightening. "Carry me, brother. Carry me, brother." The child turned around and ran over to Xue Ying. The lady also smiled at this scene. "Pebble." Xue Ying walked forward and crouched down. His younger brother Qing Shi threw himself into his embrace. "Carry me, brother. Carry me, brother!" Xue Ying carried his younger brother and kissed him. "Pebble, I hunted a deer today. Look." Xue Ying pointed at the deer the soldiers carried. "Veer? Veer?" Qing Shi opened his crow-black eyes wide as his mouth let out an unclear sound. Dong Bo Qing Shi was only two years old. Try as he might to speak, his words were still unclear and didn’t understand the meaning. "It’s a deer, a type of animal found on our family’s mountain." "Xue Ying, why don’t you give me your little brother." The purple-gowned lady also got up and walked over. "Yes, mother." Xue Ying handed over his little brother. The purple-robed lady said, "I brought some sweet olive cakes. They’re in the basket and should still be hot. Why don’t you hurry up and eat them?" "Cake?" Xue Ying’s eyes brightened and his mouth watered. Realizing that he was drooling, he immediately dashed over. "I want to eat! I want to eat!" Qing Shi immediately struggled from his mother’s embrace. He became very energetic whenever cake was mentioned. Actually, he was quite disobedient when eating. "Of course there’s some for you too, you little glutton." The purple-robed lady saw Dong Bo Lie and Tong San, "You two hurry up too. I made some food for you to eat as well." "Ha ha ... Master is not only powerful in magic, but also in the kitchen," said the brawny lion-man. Tong San had once been a slave when he was little, and had gone from being the purple-gowned lady’s servant to one of her followers. Even though many years had passed, and their relationship had grown to become like that of family, Tong San Insisted on calling her "Master." ... Once Xue Ying was full, he looked into the distance. From the top of the mountain, he could see a few mountains and some farmland with a single glance. Everywhere he looked was his family’s territory. His mother and father had stopped their days of adventuring when he was born, and instead, purchased a title of nobility and a large piece of land. The entire strip of land had been titled Snow Eagle Territory! Dong Bo Xue Ying took a long stretch, his face full of happiness. He had a mother and father who loved him dearly. He had a cute little brother. He had the many kind people of his territory. With this type of life, Dong Bo Xue Ying was extremely satisfied. The only thing that gave him a headache was that his father’s training was too painful. "Practicing 1000 more times on top of the 500… and I still need to practice my spear techniques..." Dong Bo Xue Ying’s face turned sour. ****** Nightfall, under the waning moon. The wind whistled. Boom! A thousand meters above the ground, a giant bird flew quickly, resembling like a black cloud. This giant bird had four wings and a wingspan of over twenty meters. Its flying speed surpassed the speed of sound. It was the extremely tyrannical and terrible demon beast, the Four-Winged Vulture. Two figures sat cross-legged on its back. One was a man in silver armor, while the other was robed in grey and carried a purple staff. "Where are we?" asked the grey-robed person. "Master, we have already entered Water Rites County. We should arrive at Snow Eagle Territory in about half an hour." The silver-armoured man lowered his head, clearly distinguishing his lower position. "I’ll finally see my sister again in half an hour." The grey-robed person’s voice carried heavy emotions. "You really are quite capable of hiding. Even when pursued by our family, you were able to hide for more than fifteen years..." In the darkness of the night, the Four-Winged Vulture headed straight for Snow Eagle Territory.</p>-->
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
						<div id="Extension-face-center"><span>MeeJee Team</span></div>
						<div id="Extension-face-right" @click="followf"><a href="https://www.facebook.com/MeeJeeNovels/" target="_blank">Follow</a></div>
					</div>
					<div id="Extension-twitter">
						<div id="Extension-face-left"><img src="../../static/images/twitter.png" /></div>
						<div id="Extension-face-center1"><span>@MeeJee Team</span></div>
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
						<h2>Maybe you will like:</h2></div>
					<!--<div id="Recommend-main" v-for="item in bookid" :key="item" :id="item">-->
					<div id="Recommend-main">
						<!--<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>
						<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>
						<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>
						<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>
						<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>
						<div id="Recommend-main-item"><img src="../../static/images/qitatuijian.png"/></div>-->
						<!--<div class="Recommend-main-item" @click="a(item)">{{item}}</div>-->
						<div class="swiper-container">
							<swiper :options="swiperOption" ref="mySwiper" style="display:flex,justify-content:  space-between;">
								<!-- slides -->
								<swiper-slide class="Recommend-main-item"><router-link to="/"><img :src="recommend.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="ReturnoftheSoldierKing"><img :src="recommend1.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="MyNightclubLandlady"><img :src="recommend2.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="TheTaleoftheGhostEyes"><img :src="recommend3.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="TheTaoistcareer"><img :src="recommend4.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="CardMaker"><img :src="recommend5.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"><router-link to="PsychicTattoo"><img :src="recommend6.picture" ></router-link></swiper-slide>
								<swiper-slide class="Recommend-main-item"></swiper-slide>
								<swiper-slide class="Recommend-main-item"></swiper-slide>
							</swiper>
						</div>	
					</div>
				</div>
			</div>
		</div>
		<!--Footer-->
		<div id="footer-big" v-bind:class="{'y':flag}">
			<div id="footer">
				<button id="f-button1" @click="followf"><a href="https://m.facebook.com/?refsrc=https%3A%2F%2Fwww.facebook.com%2F&_rdr" target="_blank">Follow</a></button>
			</div>
		</div>
		<!--Catalog-window-->
		<div id="window-wrap" v-show="isshow">
			<div id="Catalog-window">
				<div id="wrong" @click="hide"><img src="../../static/images/guanbi.png" /></div>
				<div id="catalog-main">
					<ul>
						<li v-for="li in ulList" :key="li" @click="changeColor(2, li)" :class='{active:index==li}'>Chapter 1: Snow Eagle Territory</li>
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
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import marked from 'marked';
	export default {
		data() {
			return {
				isshow: false,
				flag: false,
				list: [],
				recommend:[],recommend1:[],recommend2:[],recommend3:[],recommend4:[],recommend5:[],recommend6:[],
				is:false,is1:false,is2:false,is3:false,is4:false,iss:false,
				chapter:[],
				bookid: [],
				detailId: this.getBookId(),
				chapterid: "",
				faceid: "",
				ulList1: ['chapter1','chapter2','chapter3','chapter4','chapter5'],
				index1: 1,
				ulList: [1,2,3,4,5,6,7,8],
				index: 1,
				page:"",
				chapterlist:[//模拟数据（后台取得）
				"the chapter of the 1",
				"the chapter of the 2",
				"the chapter of the 3",
				"the chapter of the 4",
				"the chapter of the 5",
				"the chapter of the 6",
				"the chapter of the 7"
				],
				chapter2:[],
				chapterindex: 1,//章节数
				chaptercontent: "",//显示内容
				pages:"",
				chapter_id: "",
				top:"",img:false,imgs:false,size:false,sizee:false,content:"",
				isftoast:false,nextchap:false,backchap:false,mailfalse:false,nextcpt:true,precpt:true,
				swiperOption: {
					freeMode : true,
					slidesPerView:3
      			}
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
			this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:1},
			{emulateJSON:true})
			.then(res => {
			this.is=true;
			this.iss=true;
			this.precpt=false;
			this.list = (res.body.ResultDate.bookInfo);
			this.chapter = (res.body.ResultDate.chapterInfo);
			this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
			this.detailId =(res.body.ResultDate.bookInfo.id);
			this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
			this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
				},err => {
			//alert('wrong');
				console.log('err');		
			});

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
			//推荐列表
// 			this.$http.post('https://www.meejee.net/chapter/',{book_id:1,chapter_id:1},
// 			{emulateJSON:true})
// 			.then(res => {
// //			this.list = (res.body.ResultDate.bookInfo);
// 			this.recommend = (res.body.ResultDate.suggestionBooks[0]);
// 			this.recommend1 = (res.body.ResultDate.suggestionBooks[1]);
// 			this.recommend2 = (res.body.ResultDate.suggestionBooks[2]);
// 			this.recommend3 = (res.body.ResultDate.suggestionBooks[3]);
// 			this.recommend4 = (res.body.ResultDate.suggestionBooks[4]);
// 			this.recommend5 = (res.body.ResultDate.suggestionBooks[5]);
// 			this.recommend6 = (res.body.ResultDate.suggestionBooks[6]);
// //				console.log(this.recommend);
// 				},err => {
// 			//alert('wrong');
// 				console.log('err');		
// 			});
			//章节
			
			//模拟接口取数据，这里直接赋值
			//this.pages();
//			this.chaptercontent = this.chapterlist[0];
//			this.index1 = this.chaptercontent;
		},
		methods: {
			//章节
			chapters:function(){
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:1},
				{emulateJSON:true})
				.then(res => {
				this.is=true;
				this.is1=false;
				this.is2=false;
				this.is3=false;
				this.is4=false;
				this.nextcpt=true;
				this.precpt=false;
	//			this.list = (res.body.ResultDate.bookInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					},err => {
				//alert('wrong');
					console.log('err');		
				});
			},
			chapters2:function(){
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:2},
				{emulateJSON:true})
				.then(res => {
				this.is=false;
				this.is1=true;
				this.is2=false;
				this.is3=false;
				this.is4=false;
				this.precpt=true;
				this.nextcpt=true;
	//			this.list = (res.body.ResultDate.bookInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					},err => {
				//alert('wrong');
					console.log('err');		
				});
			},	
			chapters3:function(){
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:3},
				{emulateJSON:true})
				.then(res => {
				this.is=false;
				this.is1=false;
				this.is2=true;
				this.is3=false;
				this.is4=false;
				this.precpt=true;
				this.nextcpt=true;
	//			this.list = (res.body.ResultDate.bookInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					},err => {
				//alert('wrong');
					console.log('err');		
				});
			},	
			chapters4:function(){
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:4},
				{emulateJSON:true})
				.then(res => {
				this.is=false;
				this.is1=false;
				this.is2=false;
				this.is3=true;
				this.is4=false;
				this.precpt=true;
				this.nextcpt=true;
	//			this.list = (res.body.ResultDate.bookInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					},err => {
				//alert('wrong');
					console.log('err');		
				});
			},
			chapters5:function(){
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:5},
				{emulateJSON:true})
				.then(res => {
				this.is=false;
				this.is1=false;
				this.is2=false;
				this.is3=false;
				this.is4=true;
				this.precpt=true;
				this.nextcpt=false;
	//			this.list = (res.body.ResultDate.bookInfo);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					},err => {
				//alert('wrong');
					console.log('err');		
				});
			},	
			//分页
			next:function(){
				this.chapter_id =this.chapter_id+1;
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:this.chapter_id},
				{emulateJSON:true}
			).then(res => {
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.chapterinfo = (res.body.ResultDate.chapterInfo.next_chapter_id);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.top = document.getElementById('main-wrap-big').scrollTop=500;
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					if(this.chapterinfo==0){
						this.is=false;
						this.is1=false;
						this.is2=false;
						this.is3=false;
						this.is4=true;
						this.nextcpt=false;
//						this.nextchap=true;
//						setInterval(() => { 
//					    this.nextchap=false;
//					    }, 3000)
					}
					if(this.chapter_id==1){this.is=true;this.is1,this.is2,this.is3,this.is4,this.is5=false;this.prechap=false;this.nextcpt=true;}
					if(this.chapter_id==2){this.is1=true;this.is=false,this.is2,this.is3,this.is4,this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==3){this.is=false;this.is1=false;this.is2=true;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==4){this.is=false;this.is1=false;this.is2=false;this.is3=true;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==5){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=true;this.is5=false;this.nextcpt=false;this.precpt=true;}
				},err => {
//					console.log('err');		
				});
			},
			back:function(){
				this.chapter_id =this.chapter_id-1;
				this.$http.post('https://www.meejee.net/chapter/',{book_id:7,chapter_id:this.chapter_id},
				{emulateJSON:true})
				.then(res => {
				this.chapter = (res.body.ResultDate.chapterInfo);
				this.chapterinfo = (res.body.ResultDate.chapterInfo.pre_chapter_id);
				this.content = (res.body.ResultDate.chapterInfo.content).replace(/\n/g, "<br/>");
				this.top = document.getElementById('main-wrap-big').scrollTop=500;
				this.detailId =(res.body.ResultDate.bookInfo.id);
				this.chapter_id = parseInt(res.body.ResultDate.chapterInfo.chapter_id);
				this.$router.push({query: {detailId: this.detailId,chapter_id:this.chapter_id}}) // 跳转
					if(this.chapterinfo==0){
						this.precpt=false;
//						this.backchap=true;
//						setInterval(() => { 
//					    this.backchap=false;
//					    }, 3000)
					}
					if(this.chapter_id==1){this.is=true;this.is1=false;this.is2=false;this.is3=false;this.is4=false;this.is5=false;this.prechap=false;this.nextcpt=true;}
					if(this.chapter_id==2){this.is=false;this.is1=true;this.is2=false;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==3){this.is=false;this.is1=false;this.is2=true;this.is3=false;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==4){this.is=false;this.is1=false;this.is2=false;this.is3=true;this.is4=false;this.is5=false;this.nextcpt=true;this.precpt=true;}
					if(this.chapter_id==5){this.is=false;this.is1=false;this.is2=false;this.is3=false;this.is4=true;this.is5=false;this.nextcpt=false;this.precpt=true;}
					},err => {
				//alert('wrong');
					console.log('err');		
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
			b:function(){
				console.log(item);
			},
			//章节选项样式切换
			changeColor: function (s, a,index1) {
				if(s == 1) {
//					this.chapterid = this.index1;
					
					this.index1 = a;
					console.log(this.index1)
					
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
					this.flag = false;
					this.img=false;
					this.imgs=true;
					this.size=false;
					this.sizee=true;
				}
			},
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
		/*background: black;*/
		position: fixed;
		/*top: 7.125rem;*/
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
	#facetost li{
		padding-top: 0.15625rem;
	}
	*{
		font-family: "Microsoft YaHei";
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
		/*margin-bottom:3.063888rem;*/
	}
	
	#header {
		width: 10rem;
		height: 1.694444rem;
		line-height: 1.694444rem;
		text-align: center;
		color: #36219d;
		margin: auto;
		background-size:10rem 1.694444rem;
		box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);
		-webkit-box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);
		-moz-box-shadow: 0px 0.10625rem 0.39375rem rgba(0,0,0,0.1);
		z-index: 102;
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
		line-height: 1.327777rem;
		font-size: 0.438888rem;
		text-indent:0.78125rem;
		color: #36219d;
		margin: auto;
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
		background: url(../../static/images/shitianniu.png)no-repeat;
		background-size: 2.3rem 0.777777rem;
		color: white;		
	}
	/*#Directory-options-item.active{
		background: url(../../static/images/tangchuangxuanze.png);
		background: #36219d;
		border-radius: 0.3333333rem;
		color: white;
		width: 2.3rem;
		height: 0.777777rem;
	}*/
	/*main-text*/
	
	#main-subject{
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
		overflow-x: hidden;
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
		font-size:0.4275rem;
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
		height: ;
		/*text-align: center;*/
		margin: auto;
		color: rgba(0, 0, 0, 0.75);
		text-align:justify;
		text-justify:distribute;
		/*font-size:0.34375rem;*/
		font-family: Microsoft YaHei;
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
		line-height: 1.056666rem;
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
		height: 9.3222222rem;
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
		height: 1.763888rem;
		background: url(../../static/images/Facebookxuanfu.png)no-repeat;
		background-size: 100% 1.763888rem;
		position: fixed;
		bottom: 0;
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
		margin-top: 0.5333rem;
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
		height: 14.5327rem;
		background: rgba(0, 0, 0, .4);
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