import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
}))