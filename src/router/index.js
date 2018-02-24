import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/i22'
import Novel from '@/components/novel'
import Novel2 from '@/components/novel2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path: '/novel',
    	component: Novel
    },{
    	path: '/novel2',
    	component: Novel2    	
    }
  ]
})
