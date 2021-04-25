import { useRouter } from 'next/router';
// import Card from '../ui/Card';
//import classes from './MeetupItem.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  media: {
    height: 400,
    overflow: 'hidden'
  },
  actions: {
    backgroundColor:'#000000',
    width:'100%',
    alignItems:'center'
  },
  button: {
    width:'100%',
    color:'#fcb8d2'
  },
  card: {
    width: '30%',
    height: 'auto',
    marginBottom: 30,
    backgroundColor:'#fcb8d2'
  }
});

function MeetupItem(props) {
  const router = useRouter();
  const classes = useStyles();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent style={{ textAlign:'center'}}>
            <h1 gutterBottom variant="h5" component="h2">
              {props.title}
            </h1>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button className={classes.button} size="small" color="primary" onClick={showDetailsHandler}>
            <h2>{props.price}</h2>
          </Button>
        </CardActions>
      </Card>
  );
}

export default MeetupItem;
