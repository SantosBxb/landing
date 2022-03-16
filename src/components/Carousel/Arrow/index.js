/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import useStyles from './styles';

function SliderArrow({ type, color, onClick }) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${type}`}>
      <div className={classes.arrowContainer}>
        <div className={`${classes.arrow} ${type}`} role="button" onClick={onClick}>
          {type === 'prev' ? (
            <div className={classes.prevContainer}>
              <ChevronLeftIcon color={color} />
            </div>
          ) : (
            <div className={classes.nextContainer}>
              <ChevronRightIcon color={color} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SliderArrow.defaultProps = {
  type: 'prev',
  color: 'secondary',
  onClick: undefined,
};

SliderArrow.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default SliderArrow;
