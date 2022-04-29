import List from '@mui/material/List';
import * as React from 'react';
import ListItemCV from './ListItemCV';

const ListCV = ({ contacts }) => {
  const renderListItem = (contact, index) => <ListItemCV contact={ contact } key={ index }/>;

  return (
    <List>
      { contacts.map((c, i) => renderListItem(c, i)) }
    </List>
  );
};

export default ListCV;
