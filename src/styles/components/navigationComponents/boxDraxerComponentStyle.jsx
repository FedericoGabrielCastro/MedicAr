import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}))
