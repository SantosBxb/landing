import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Header from './header';
import Footer from './footer';
// import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
