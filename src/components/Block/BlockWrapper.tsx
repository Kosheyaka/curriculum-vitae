import { Box, Paper } from '@mui/material';
import { ComponentClass } from 'react';
import * as React from 'react';
import useStyles from '../../styles';
import BlockHeader from './BlockHeader';

const BlockWrapper = (
  { inner, text, iconType }: { inner: ComponentClass; text: string; iconType: string; }
) => {
  const InnerComponent = inner;
  const classes = useStyles();
  return (
    <>
      <Box marginBottom={ 2 }>
        <Paper elevation={ 2 } className={ classes.paper }>
          <BlockHeader text={ text } iconType={ iconType }/>
          <InnerComponent/>
        </Paper>
      </Box>
    </>
  );
};

export default BlockWrapper;


