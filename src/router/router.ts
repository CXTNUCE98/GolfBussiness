import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Main from '../pages/Main.vue'
import Introduce from '../pages/Introduce.vue'
import GolfClups from '../pages/GolfClups.vue'
import GolfBags from '../pages/GolfBags.vue'
import GolfAccessories from '../pages/GolfAccessories.vue'
import GolfFashion from '../pages/GolfFashion.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'
import CRUD from '../pages/CRUD.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: Home,
          children: [
            {
                path: '/',
                component: Main,
            },
            {
                path: 'gioi-thieu',
                component: Introduce,
            },
            {
                path: 'gay-golf',
                component: GolfClups,
            },
            {
                path: 'tui-golf',
                component: GolfBags,
            },
            {
                path: 'thoi-trang-golf',
                component: GolfFashion,
            },
            {
                path: 'phu-kien-golf',
                component: GolfAccessories,
            },  
            {
                path: 'tin-tuc',
                component: News,
            },    
            {
                path: 'lien-he',
                component: Contact,
            }, 
          ]
        },
        {
            path: '/crud',
            component: CRUD,
        }
      ]
})
