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

  returnDevpost() {
    if (this.props.projectDevpost != null) {
      return (
        <a
          href={this.props.projectDevpost}
          target='_blank'
          className='devpost'>
          <Button size='small' color='primary' >
              Devpost
          </Button>
        </a>
        
      )
    }
  }

  render() {
    return (
      <div className='cardbox-wrapper'>
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
              <Typography variant='body2' color='textSecondary' component='p' className='project-desc'>
                {this.props.projectDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Github
            </Button>
            {this.returnDevpost()}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
