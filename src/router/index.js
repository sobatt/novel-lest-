import Vue from 'vue'
import Router from 'vue-router'
import AGuestinaGhostHouse from '@/components/AGuestinaGhostHouse'
import CardMaker from '@/components/CardMaker'
import TheTaoistCareer from '@/components/TheTaoistcareer'
import PsychicTattoo from '@/components/PsychicTattoo'
import TheTaleoftheGhostEyes from '@/components/TheTaleoftheGhostEyes'
import MyNightclubLandlady from '@/components/MyNightclubLandlady'
import ReturnoftheSoldierKing from '@/components/ReturnoftheSoldierKing'
import a from '@/components/a'
import index from '@/components/index'
import slider from '@/components/slider'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'ReturnoftheSoldierKing',
            component: ReturnoftheSoldierKing
        },
        {
            path: '/AGuestinaGhostHouse',
            name: 'AGuestinaGhostHouse',
            component: AGuestinaGhostHouse
        },
        {
            path: '/CardMaker',
            name: 'CardMaker',
            component: CardMaker
        },
        {
            path: '/TheTaoistcareer',
            component: TheTaoistCareer
        },
        {
            path: '/PsychicTattoo',
            component: PsychicTattoo
        },
        {
            path: '/TheTaleoftheGhostEyes',
            component: TheTaleoftheGhostEyes
        },
        {
            path: '/MyNightclubLandlady',
            component: MyNightclubLandlady
        },
        {
            path: '/ReturnoftheSoldierKing',
            component: ReturnoftheSoldierKing
        }
    ]
})