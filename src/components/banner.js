import { Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useRef } from 'react';
import useComponentSize from '../hooks/useComponentSize';
import imagebg from '../public/bg1.png';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';

const useStyles = ({
  boxCurrentHeight,
}) =>
  makeStyles(({ spacing, breakpoints, palette }) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      width: '100%',
      minHeight: '100vh',
      padding: `80px ${spacing(10)} 0  ${spacing(10)}`,
      background: `linear-gradient(to bottom, #438AFF, #39F4F9)`,
      [breakpoints.down('lg')]: {
        padding: `80px ${spacing(5)} 0  ${spacing(5)}`,
      },
      [breakpoints.down('sm')]: {
        paddingTop: '5rem',
        paddingBottom: '5rem',
      },
    },
    boxContainer: {
      padding: spacing(0, 12),
      position: 'relative',
      width: '100%',
      height: boxCurrentHeight / 2,
      marginBottom: spacing(4),
      [breakpoints.down('lg')]: {
        padding: spacing(0, 3),
      },
      [breakpoints.down('md')]: {
        height: boxCurrentHeight - boxCurrentHeight / 4,
      },
    },
    box: {
      position: 'absolute',
      zIndex: 2,
      top: -(boxCurrentHeight / 2),
      padding: spacing(6),
      width: '100%',
      backgroundColor: palette.background.default,
      borderRadius: 5,
      boxShadow: '0px 3px 6px #425B72',
      [breakpoints.down('md')]: {
        top: -(boxCurrentHeight / 4),
      },
      [breakpoints.down('sm')]: {
        padding: spacing(1),
      },
    },
    boxItem: {
      position: 'relative',
    },
    border: {
      width: '100%',
      height: 2,
      backgroundColor: palette.text.primary,
      margin: spacing(1, 0),
      [breakpoints.down('xl')]: {
        width: '100%',
      },
    },
    itemList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      '& li': {
        paddingLeft: '1em',
        textIndent: '-.7em',
        '&:before': {
          content: '"•"',
          color: palette.text.primary,
          marginRight: spacing(1),
        },
      },
    },
    listText: {
      fontSize: '18px',
      [breakpoints.up('md')]: {
        fontSize: '23px',
      },
      [breakpoints.up('lg')]: {
        fontSize: '23px',
      },
      [breakpoints.up('xl')]: {
        fontSize: '35px',
      },
    },
    title: {
      display: 'flex',
      paddingBottom: boxCurrentHeight - boxCurrentHeight / 2 + 80,
      margin: '0 2rem',
      [breakpoints.down('md')]: {
        margin: '0 1rem',
        paddingBottom: '3rem',
      },
      [breakpoints.down('sm')]: {
        margin: '0',
        // paddingTop: 0,
      },
    },
    image: {
      paddingBottom: boxCurrentHeight - boxCurrentHeight / 2 + 80,
      margin: '0 2rem',
      [breakpoints.down('md')]: {
        margin: '0 1rem',
        paddingBottom: '2rem',
      },
      [breakpoints.down('sm')]: {
        margin: '0',
        // paddingBottom: 0
      }
    },
    text: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '5rem',
      lineHeight: '3.125rem',
      fontWeight: 600,
      [breakpoints.down('md')]: {
        fontSize: '4rem',
        lineHeight: '3.125rem',
      },
      [breakpoints.down('sm')]: {
        fontSize: '2.3rem',
      },
      '@media (max-width: 280px)': {
        fontSize: '1.9rem',
      },
    },
  }));

const BannerWithBox = ({
  title,
  listItems,
}) => {
  const boxRef = useRef(null);
  const size = useComponentSize(boxRef);
  const classes = useStyles({
    boxCurrentHeight: size.height,
  })();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.container}
        component="section"
      >
        <Grid item md={6} 
          sx={{ order: {xs:2, md: 1}, zIndex: '100', mt: {xs: '50vh 0'}, alignItems: {xs: 'flex-start', md: 'center'}}}
        >
          <Box display="flex" justifyContent="flex-end" className={classes.title}>
            {title}
          </Box>
        </Grid>
        <Grid 
          item md={6} 
          sx={{ order: {xs: 1, md:2}, position: {xs: 'relative', md:'static'}, zIndex: '50', top: '0.5rem'}}
        >
          <Box display="flex" justifyContent="flex-end" className={classes.image}>
            <Image
              alt="pyme image"
              src={imagebg}
            />
          </Box>
        </Grid>

      </Grid>
      <Grid container className={classes.boxContainer}>
        <Grid item xs={12} className={classes.boxItem}>
          <Grid
            container
            className={classes.box}
            alignItems="center"
            justifyContent="space-between"
            ref={boxRef}
          >
            <Grid item align="center" justifyContent="center" sx={{margin: '0 auto', padding: '0 1rem'}}>
              <div>
                <div className={classes.border} />
                <StoreMallDirectoryTwoToneIcon
                  color="primary"
                  fontSize="large"
                />
                <Typography color="text.secondary" variant="subtitle1" component="h2" sx={{align: {xs: "center", md: "justify"}}}>
                  Potencia y dale un sello de confianza a tu
                  <br />{' '}
                  <Typography component="span" className={classes.text}>
                    Pyme
                  </Typography>
                </Typography>
                <div className={classes.border} />
              </div>
            </Grid>
            {listItems && 
            <Grid item sm={12} md>
              <ul className={classes.itemList}>
                {listItems.map((item) => (
                  <Typography
                    key={item.id}
                    component="li"
                    className={classes.listText}
                    color="text.secondary"
                    fontWeight={400}
                    align="justify"
                  >
                    {item.content}
                  </Typography>
                ))}
              </ul>
            </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BannerWithBox;
