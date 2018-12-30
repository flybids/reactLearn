import Home from '../components/home/home'
import news from '../components/news/news';
import Head from '../components/head';
import NotFound from '../components/404/index'

import NewsDetail from '../components/newsDetail/details'


const routes = [
    {
        exact:true,
        path:'/',
        component:Home
    },
    {
        path:'/news',
        component:news,
        children:[
            {
                exact:true,
                path:'/newsDetails/:msg',
                component:NewsDetail
            },
            {
                exact:true,
                path:'/newsDetails',
                component:NewsDetail  
            }
        ]
    },
    {
        path:'/user',
        component:Head
    },
    {
        exact:true,
        component:NotFound
    }
]
export default routes