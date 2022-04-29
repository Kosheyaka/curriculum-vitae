import { makeStyles } from '@mui/styles';

const colors = {
  blueSky: '#556cd6',
  pseudoWhite: '#f5f5f5',
  darkGray: '#2f4f4f',
};
const avatarSize = '120px';
const borderRadius = '5px';

const useStyles = makeStyles((theme?) => ({
  avatar: {
    borderRadius,
    width: avatarSize,
    height: avatarSize,
  },
  paperHeader: {
    borderRadius,
    backgroundColor: colors.blueSky,
    color: colors.pseudoWhite,
  },
  headerGridItem: {
    padding: '15px 0px',
  },
  paper: {
    borderRadius,
    color: colors.darkGray,
  },
  blockBar: {
    borderRadius,
  },
  listIcon: {
    marginRight: '5px',
  },
}));

export default useStyles;
