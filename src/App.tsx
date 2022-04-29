import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import BlockWrapper from './components/Block/BlockWrapper';
import Header from './header/Header';
import ContactsCV from './columnLeft/ContactsCV';
import EducationCV from './columnLeft/EducationCV';
import LanguagesCV from './columnLeft/LanguagesCV';
import JobPreferencesCV from './columnRight/JobPreferencesCV';
import TechStackCV from './columnRight/TechStackCV';

const App = () =>
  (
    <Container maxWidth="md">
      <Box sx={ { my: 4 } }>
        <Grid container spacing={ 2 }>

          <Grid item xs={ 14 }>
            <Header/>
          </Grid>

          <Grid item xs={ 4 }>
            <BlockWrapper inner={ ContactsCV } text={ 'Contacts' } iconType={ 'Contacts' }/>
            <BlockWrapper inner={ LanguagesCV } text={ 'Languages' } iconType={ 'Language' }/>
            <BlockWrapper inner={ EducationCV } text={ 'Education' } iconType={ 'School' }/>
          </Grid>

          <Grid item xs={ 8 }>
            <BlockWrapper inner={ JobPreferencesCV } text={ 'Job Preferences' } iconType={ 'Work' }/>
            <BlockWrapper inner={ TechStackCV } text={ 'Tech stack' } iconType={ 'HomeRepairService' }/>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );

export default App;
