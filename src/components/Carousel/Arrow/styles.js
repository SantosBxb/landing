import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    width: '50%',
    maxWidth: '120px',
    height: '100%',
    alignItems: 'center',
    '&.prev': {
      left: 0,
    },
    '&.next': {
      right: 0,
    },
    [theme.breakpoints.down('sm')]: {
      width: '9%',
    },
  },
  arrowContainer: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: '40px',
    height: '40px',
    opacity: 0.9,
    transition: 'opacity 0.3s',
    zIndex: 10,
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
    [theme.breakpoints.only('xs')]: {
      width: 25,
      height: 25,
      opacity: 1,
    },
  },
  prevContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 11px -4px rgba(0,0,0,0.52)',
    borderRadius: '50%',
    [theme.breakpoints.only('xs')]: {
      boxShadow: '0px 2px 11px -3px rgb(0 0 0 / 66%)',
      padding: '0 1px 0 0',
      '& svg': {
        width: 25,
        height: 25,
      },
    },
  },
  nextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 11px -4px rgba(0,0,0,0.52)',
    borderRadius: '50%',
    [theme.breakpoints.only('xs')]: {
      boxShadow: '0px 2px 11px -3px rgb(0 0 0 / 66%)',
      padding: '0 0 0 1px',
      '& svg': {
        width: 25,
        height: 25,
      },
    },
  },
}));

export default useStyles;
