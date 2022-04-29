import { AppBar, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import useStyles from '../../styles';
import BlockHeaderIcon from './BlockHeaderIcon';

const BlockHeader = ({ text, iconType }: { text: string; iconType: string; }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" variant={ 'elevation' } className={ classes.blockBar }>
      <Toolbar variant={ 'dense' }>
        <BlockHeaderIcon type={ iconType }/>
        <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
          { text }
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default BlockHeader;
