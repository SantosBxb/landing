import NextLink from 'next/link';
import { Typography, Box, Grid } from '@mui/material';

// import useStyles from './styles';
// import Container from '../Container';
import Image from 'next/image';
import logo from '../../public/logo1.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: '1.25rem',
    lineHeight: '2.225rem',
    fontFamily: 'Poppins',
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.0125rem',
      lineHeight: '2.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8125rem',
      lineHeight: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7125rem',
      lineHeight: '1rem',
    },
  },
  img: {
    height: '21px',
    [theme.breakpoints.up('sm')]: {
      height: '23px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '25px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '28px',
    },
  },
}));

const pages = ['Nosotros', 'Equipo', 'Contacto'];

export default function Footer() {
  const classes = useStyles();

  return (
    <Box component="footer" bgcolor="background.dark" p={3} className={classes.root}>
      <Grid container bgcolor="background.dark" sx={{ alignContent: 'center' }}>
        <Grid item xs={6}>
          <Box width="100%">
            <Image src={logo} className={classes.img} alt="Logo yo-opino" />
          </Box>
        </Grid>
        <Grid item xs={6} alignContent="center">
          <Box>
            {pages.map((page, i) => (
                <Typography key={i} textAlign="right">{page}</Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            2022 - Desarrollado por{' '}
            <Typography component="span" color='text.primary'>
              yo-opino.cl
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
