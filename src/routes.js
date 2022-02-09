import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'


const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'home',
    },
    {
        path: 'about',
        component: <AboutUs />,
        label: 'about'
    },
]

export default routes;