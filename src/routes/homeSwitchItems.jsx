import AboutView from '../views/aboutView'
import FavoritesView from '../views/favoritesView'
import DesconocidoView from '../views/desconocidoView'

const homeSwitchItems = [
    {
        path: '/',
        component: AboutView
    },
    {
        path: '/desconocido',
        component: DesconocidoView
    },
    {
        path: '/favorites',
        component: FavoritesView
    },
]

export default homeSwitchItems