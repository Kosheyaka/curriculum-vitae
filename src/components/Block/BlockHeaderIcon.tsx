import {
  AccountBox,
  ContactPhone,
  Contacts,
  Email,
  Folder,
  GitHub,
  HomeRepairService,
  Language,
  LinkedIn,
  School, SvgIconComponent,
  Telegram,
  Work,
  WorkHistory,
} from '@mui/icons-material';
import * as all from '@mui/icons-material';
import * as React from 'react';
import useStyles from '../../styles';

type AllIconsType = {
  [type: string]: SvgIconComponent;
};

const BlockHeaderIcon = ({ type }: { type: string }) => {
  const classes = useStyles();
  const Component = (all as AllIconsType)[type];

  return <Component className={ classes.listIcon }/>

  // switch (type) {
  //   case 'ContactPhone':
  //     return <ContactPhone className={ classes.listIcon }/>;
  //   case 'Email':
  //     return <Email className={ classes.listIcon }/>;
  //   case 'Telegram':
  //     return <Telegram className={ classes.listIcon }/>;
  //   case 'LinkedIn':
  //     return <LinkedIn className={ classes.listIcon }/>;
  //   case 'GitHub':
  //     return <GitHub className={ classes.listIcon }/>;
  //   case 'AccountBox':
  //     return <AccountBox className={ classes.listIcon }/>
  //   case 'Contacts':
  //     return <Contacts className={ classes.listIcon }/>
  //   case 'HomeRepairService':
  //     return <HomeRepairService className={ classes.listIcon }/>
  //   case 'School':
  //     return <School className={ classes.listIcon }/>
  //   case 'Language':
  //     return <Language className={ classes.listIcon }/>
  //   case 'Work':
  //     return <Work className={ classes.listIcon }/>
  //   case 'WorkHistory':
  //     return <WorkHistory className={ classes.listIcon }/>
  //
  //   default:
  //     return <Folder className={ classes.listIcon }/>;
  // }
};

export default BlockHeaderIcon;
