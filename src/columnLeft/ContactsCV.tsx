import * as React from 'react';
import ListCV from '../components/ItemList/ListCV';
import { Info } from '../info';


const ContactsCV = () =>
  (
    <ListCV contacts={ Info.contacts }/>
  );

export default ContactsCV;
