import { Link, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';
import { Info } from '../info';

const LanguagesCV = () => {
  const certLink = (text: string, href: string) => <Link href={ href } color={ 'inherit' }>{ text }</Link>
  return (
    <>
      <List>
        {
          Info.languages.map((l, i) =>
            <ListItem key={ i } style={ { display: 'inline-block' } }>
              <Typography variant={ 'body1' } style={{ fontWeight: 'bold' }}>
                { `${ l.flag } ${ l.title }` }
              </Typography>
              <Typography variant={ 'caption' }>
                Level: { `${ l.level }` }
              </Typography>
              <br/>
              <Typography variant={ 'caption' }>
                { l.cert ? certLink(l.cert.certName, l.cert.certLink) : '' }
              </Typography>
            </ListItem>
          )
        }
      </List>

    </>
  );
};

export default LanguagesCV;
