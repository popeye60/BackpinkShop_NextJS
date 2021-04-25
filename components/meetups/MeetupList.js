import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
      <Container>
        <div className={classes.flex}>
            {props.meetups.map((meetup) => (
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                price={meetup.price}
                size={meetup.size}
                detail={meetup.detail}
              />
            ))}
        </div>
      </Container>
     
  );
}

export default MeetupList;
