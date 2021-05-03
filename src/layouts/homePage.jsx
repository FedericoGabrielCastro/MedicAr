import { BrowserRouter,  } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/globalTheme'

import NavigationContainer from '../components/navigationContainer'

// import homeSwitchItems from '../routes/routes'

const HomePage = () => {
    // const classes = useStyle()

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <NavigationContainer/>
                {/* <Switch>
                    {homeSwitchItems.map((item) => {
                        return (
                            <Route path={item.path} exact component={item.component}/>
                            
                        )
                    })}
                </Switch> */}
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default HomePage