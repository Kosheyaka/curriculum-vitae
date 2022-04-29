import { Link, Typography } from '@mui/material';
import * as React from 'react';

const LinkWrapped = ({ href, text }: { href: string; text: string; }) =>
  (
    <Typography>
      <Link href={ href } color={ 'inherit' }>{ text }</Link>
    </Typography>
  );

export default LinkWrapped;
