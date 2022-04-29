import List from '@mui/material/List';
import * as React from 'react';
import { IContact } from '../../info';
import ListItemCV from './ListItemCV';

const ListCV = ({ contacts }: { contacts: IContact[] }) => {
  const renderListItem = (contact: IContact, index: number) => <ListItemCV contact={ contact } key={ index }/>;

  return (
    <List>
      { contacts.map((c, i) => renderListItem(c, i)) }
    </List>
  );
};

export default ListCV;
