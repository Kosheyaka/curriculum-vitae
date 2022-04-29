import { Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import useStyles from '../styles';
import AboutMe from './AboutMe';

const Header = () => {
  const classes = useStyles();
  return (
    <Paper elevation={ 2 } className={ classes.paperHeader }>
      <Grid container>

        <Grid item xs={ 4 } className={ classes.headerGridItem }>
          <div style={ { padding: 10, textAlign: 'right' } }>
            <img src={ './photo.jpg' } className={ classes.avatar } alt={''}/>
          </div>
        </Grid>

        <Grid item xs={ 8 } className={ classes.headerGridItem }>
          <Typography variant={ 'h3' }>
            Dmitry Volkov
          </Typography>
          <AboutMe/>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default Header;
