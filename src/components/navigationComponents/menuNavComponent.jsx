import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck'

const MenuNavComponent = () => {

    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="texto"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText primary="texto 2"/>
                </ListItem>

                <Divider/>
            </List>
        </div>
    )
}

export default MenuNavComponent
