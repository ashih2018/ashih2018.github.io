import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

const classes = makeStyles;

class ProjectCard extends Component {
  state = {};

  render() {
    return (
      <span>
        <Card className={`${classes.root} card-wrapper`}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media} media-wrapper`}
              image={this.props.projectImage}
              title={this.props.projectTitle}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.props.projectTitle}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {this.props.projectDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Github
            </Button>
            <Button size='small' color='primary'>
              Devpost
            </Button>
          </CardActions>
        </Card>
      </span>
    );
  }
}

export default ProjectCard;
