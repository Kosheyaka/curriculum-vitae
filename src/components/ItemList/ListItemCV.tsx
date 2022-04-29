import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { IContact } from '../../info';
import LinkWrapped from '../LinkWrapped';
import ListItemIconCV from '../Block/BlockHeaderIcon';

const ListItemCV = ({ contact }: { contact: IContact }) => {
  const { type, link, text } = contact;
  return (
    <ListItem>
      <ListItemIconCV type={ type }/>
      { text && link ? <LinkWrapped href={ link } text={ text }/> : text }
    </ListItem>
  );
};

export default ListItemCV;
