import * as React from 'react';
import AboutItem from '../components/AboutItem';
import { Info } from '../info';

const JobPreferencesCV = () =>
  (
    <>
      <div style={ { padding: 10 } }>
        <AboutItem items={ Info.career }/>
      </div>
    </>
  );

export default JobPreferencesCV;
