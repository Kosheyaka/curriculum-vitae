import { Link, Typography } from '@mui/material';
import * as React from 'react';

const LinkWrapped = (props) => {
  const { href, text } = props;
  return (
    <Typography>
      <Link href={href} color={ 'inherit' }>{text}</Link>
    </Typography>
  );
};

export default LinkWrapped;
