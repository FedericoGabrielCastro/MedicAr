import React, { useState } from 'react'
import { Hidden } from '@material-ui/core'

import { useStyles } from '../styles/components/navigationContainerStyle'
import Navbar from './navigationComponents/navbarComponent'
import BoxDraxerComponent from './navigationComponents/boxDraxerComponent'


const NavigationContainer = () => {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)

    const openSidebar = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <Navbar openSidebar={openSidebar}/>
            <Hidden xsDown>
                <BoxDraxerComponent variant="permanent" open={true}/>
            </Hidden>
            <Hidden >
                <BoxDraxerComponent variant="temporary" open={open} onClose={openSidebar}/>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}/>
                    Contendio de la pagina papa
            </div>
        </div>
    )
}

export default NavigationContainer
