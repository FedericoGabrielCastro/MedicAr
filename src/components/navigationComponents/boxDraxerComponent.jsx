import { Drawer, Divider } from '@material-ui/core'

import { useStyles } from '../../styles/components/navigationComponents/boxDraxerComponentStyle'
import MenuNavComponent from './menuNavComponent' 

const BoxDraxerComponent = (props) => {
    const classes = useStyles()

    return (
        <Drawer 
            className={classes.drawer} 
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}> 
            <div className={classes.toolbar}></div>
            <Divider/>
            <MenuNavComponent/>
        </Drawer>
    )
}

export default BoxDraxerComponent
