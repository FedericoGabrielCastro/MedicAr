import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1
    },
    appbar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - 240px)`,
            marginLeft: 240
        }
    }
}))