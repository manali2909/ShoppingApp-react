import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,  
  root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 'auto',
    },
    image: {
      width: 'auto',
      height: 'auto',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  export default useStyles;