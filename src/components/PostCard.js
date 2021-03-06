import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';



export default function PostCard(props) {
 
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.singlePost?.owner?.picture} />
        }
        title={props.singlePost?.title}
        subheader={props.singlePost?.publishDate}
      />
      <CardMedia
        component="img"
        image={props.singlePost?.image}
        alt="img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {props.singlePost?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginLeft:"auto"}}>
          <InsertCommentIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
