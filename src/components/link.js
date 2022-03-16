import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = (color) =>
  makeStyles(() => ({
    anchor: {
      color,
      textDecoration: 'none',
    },
  }));

export default function Link({ href, text, color }) {
  const classes = useStyles(color)();

  return (
    <NextLink href={href}>
      <a href={href} className={classes.anchor}>
        {text}
      </a>
    </NextLink>
  );
}

Link.defaultProps = {
  href: '',
  text: '',
  color: '#FFFFFF',
};

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};
