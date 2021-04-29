import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { useStyle } from '../styles/layouts/homePageStyle'
import NavbarComponent from '../components/navbarComponent'
import homeSwitchItems from '../routes/homeSwitchItems'

const HomePage = () => {
    const classes = useStyle()

    return (
        <BrowserRouter>
            <NavbarComponent/>
            <Switch>
                {homeSwitchItems.map((item) => {
                    return (
                        <Route path={item.path} exact component={item.component}/>
                    )
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default HomePage
