<template>
	<div id="box">
		<input type="button"  value="点击" @click="toggle" />
		<div id="item" v-show="isshow" transition="fade"></div>
		<span>{{mode}}</span><br>
		<p><input type="text" v-model="mode"/></p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isshow:true,
				mode:'hello!'
			}
		},
		methods:{
			toggle(){
				this.isshow=!this.isshow;
			}
		}
	}
</script>
<style>
	.fade-transition{
		transition:1s all ease;
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-leave{
		opacity: 0;
		transform: translateX(200px);
	}
	#box{
		width: 200px;
		height: 200px;
		margin: auto;
	}
	#item{
		width: 100px;
		height: 100px;
		background: darkslategray;
		margin-top: 20px;
	}
</style>
