import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import alter from '../assets/alter.gif';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProfileCard({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dateObject = new Date(data.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
  const formattedDate = dateObject.toLocaleDateString('en-IN', options);
  console.log(dateObject);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.profile.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.profile.username}
        subheader={formattedDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.avatar}
        alt="Paella dish"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = alter;
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.Bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>Details:</Typography>
          <Typography variant="body1" paragraph>
          <strong>Job Title:</strong> {data.jobTitle}
          </Typography>
          <Typography variant="body1" paragraph>
          <strong>Name:</strong> {data.profile.firstName} {data.profile.lastName}
          </Typography>
          <Typography variant="body1" paragraph>
          <strong>Email:</strong> {data.profile.email} 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
