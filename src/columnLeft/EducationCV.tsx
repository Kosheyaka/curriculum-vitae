import { CardContent, Typography } from '@mui/material';
import * as React from 'react';
import { Info } from '../info';

const EducationCV = () => {
  return (
    <>
      <CardContent>

        <Typography variant={ 'body1' } component="div">
          { Info.education.fullName }
        </Typography>

        <Typography variant={ 'caption' } color="text.secondary">
          { Info.education.faculty }, { Info.education.grade }
        </Typography>

      </CardContent>
    </>
  );
};

export default EducationCV;
