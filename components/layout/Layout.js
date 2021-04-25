import MainNavigation from './MainNavigation';
//import classes from './Layout.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#000000'
  },
}));


function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Paper elevation={0} style={{ width:'100%', textAlign:'center' ,backgroundColor:'#fcb8d2', height:'30px', padding:'5px'}} square>
        <Typography variant="subtitle2" >WE ARE DOING OUR BEST TO DELIVER YOUR ORDER ON TIME, HOWEVER, WE MAY EXPERIENCE DELAYS SOMEWHERE ALONG THE WAY AS WE TRY TO KEEP EVERYONE SAFE.</Typography>
        </Paper>
        <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
