import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '& .slick-active .dot': {
      backgroundColor: '#2F4357',
    },
  },
  dot: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '4px solid #2F4357',
    backgroundColor: '#FFFFFF',
    marginTop: '35px',
  },
});

export default useStyles;
