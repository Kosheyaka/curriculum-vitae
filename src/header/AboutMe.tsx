import * as React from 'react';
import AboutItem from '../components/AboutItem';
import { Info } from '../info';

const AboutMe = () =>
  (
    <div style={ { padding: 10 } }>
      <AboutItem items={ Info.aboutMe }/>
    </div>
  );

export default AboutMe;
