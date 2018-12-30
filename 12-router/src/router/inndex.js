import Home from '../components/Home'
import User from '../components/User';
import News from '../components/News';
import NotFound from '../components/404';

const routes = [
    {
        exact:true,
        path:'/',
        component:Home
    },
    {
        path:'/news',
        component:News
    },
    {
        path:'/user',
        component:User
    },
    {
        component:NotFound
    }
]

export default routes