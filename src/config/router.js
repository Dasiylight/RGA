import * as VueRouter from 'vue-router'
import Frail from '../components/Frail.vue'
import Sarcf from '../components/Sarcf.vue'
import Snaq from '../components/Snaq.vue'
import Q1 from '../components/RCS/Q1.vue'
import Q2 from '../components/RCS/Q2.vue'
import Q1a from '../components/RCS/Q1a.vue'
import Res from '../components/Res.vue'

const routes = [
    {
      path:'/frail',
      component:Frail
    },
    {
      path:'/sarcf',
      component:Sarcf
    },
    {
      path:'/snaq',
      component:Snaq
    },
    {
      path:'/',
      redirect:'/q2'
    },
    {
      path:'/q1',
      component:Q1
    },
    {
      path:'/q2',
      component:Q2
    },
    {
      path:'/q1a',
      component:Q1a
    },
    {
      path:'/res',
      component:Res
    }

  ]

const router = VueRouter.createRouter({
  history:VueRouter.createWebHistory(),
  routes:routes,
  // base: "./"
});

export default router