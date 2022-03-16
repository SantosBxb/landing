import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import Carousel from './Carousel';
import PageCard from './PageCard';
import image1 from '../public/1.png';


const Styles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
  },
  title: {
    width: '56vw',
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  textSubTitle: {
    fontSize: 25,
    lineHeight: 1.2,
    marginTop: spacing(4),
    [breakpoints.up('md')]: {
      fontSize: 35,
    },
  },
  howToWork: {
    fontSize: '2.9rem',
    lineHeight: '3.75rem',
    fontWeight: 600,
    textAlign: 'left',
    marginBottom: '4rem',
    [breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  cardContainer: {
    padding: spacing(4, 12, 8, 12),
    [breakpoints.down('lg')]: {
      padding: spacing(4, 0, 8, 0),
    },
    [breakpoints.down('sm')]: {
      padding: spacing(0, 0, 12, 0),
    },
  },
  integrationBanner: {
    background: 'linear-gradient(90deg, rgba(37,58,75,1) 0%, rgba(0,0,0,1) 100%)',
    padding: spacing(20, 0),
    [breakpoints.down('md')]: {
      padding: spacing(10, 0),
    },
  },
}));

const cardItems = [
  {
    icon: image1,
    title: 'Nosotros',
    content: 
      'Ser un referente en la creación de confianza en las relaciones de consumidores y proveedores para todas las empresas.'
  },
  {
    icon: image1,
    title: 'Equipo',
    content:
      'Ser un referente en la creación de confianza en las relaciones de consumidores y proveedores para todas las empresas.'
  },
  {
    icon: image1,
    title: 'Contacto',
    content:
      'Ser un referente en la creación de confianza en las relaciones de consumidores y proveedores para todas las empresas.'
  }
];

const cards = () => {
  const classes = Styles();

  return (
    <>
      <Grid
        container
        className={classes.cardContainer}
        component="section"
        justifyContent="center"
      >
        <Grid item xs={11}>
          <Grid container spacing={2}>
            {cardItems.map((item, i) => (
              <PageCard
                key={i}
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default cards;