import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../../styles/components/navigationComponents/navbarComponentStyle'

import MenuIcon from '@material-ui/icons/Menu'

const Navbar = (props) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <IconButton className={classes.menuButton} aria-label="menu" color="inherit" onClick={() => props.openSidebar()}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    MedicAr
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
