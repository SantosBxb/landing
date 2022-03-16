import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import Arrow from './Arrow';
import useStyles from './styles';

const useCustomStyles = (styles) => makeStyles(styles);

export default function Carousel({
  children,
  className,
  dots,
  arrows,
  infinite,
  slidesToShow,
  slidesToScroll,
  autoplay,
  speed,
  autoplaySpeed,
  cssEase,
  responsive,
  customStyles,
  arrowsAlwaysVisible,
  playOrPause,
}) {
  const classes = useStyles();
  const rootCustomStyles = useCustomStyles(customStyles)();
  const theme = useTheme();
  const isNotSmall = useMediaQuery(theme.breakpoints.up('md'));
  const ref = useRef(null);

  const prevSlide = () => {
    if (ref.current !== null) ref.current.slickPrev();
  };

  const nextSlide = () => {
    if (ref.current !== null) ref.current.slickNext();
  };

  const customPaging = () => <div className={`${classes.dot} dot`} />;

  useEffect(() => {
    if (playOrPause) {
      ref.current.slickPlay();
    } else {
      ref.current.slickPause();
    }
  }, [playOrPause]);

  return (
    <div className={`${classes.root} ${rootCustomStyles.root ? rootCustomStyles.root : ''}`}>
      {(isNotSmall || arrowsAlwaysVisible) && arrows && (
        <>
          <Arrow type="prev" onClick={prevSlide} />
          <Arrow type="next" onClick={nextSlide} />
        </>
      )}
      <Slider
        ref={ref}
        className={className}
        dots={dots}
        infinite={infinite}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        autoplay={autoplay}
        speed={speed}
        waitForAnimate
        autoplaySpeed={autoplaySpeed}
        cssEase={cssEase}
        arrows={arrows}
        swipeToSlide
        responsive={responsive}
        customPaging={customPaging}
      >
        {children}
      </Slider>
    </div>
  );
}

Carousel.defaultProps = {
  className: 'slider variable-width',
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  speed: 100,
  autoplaySpeed: 6000,
  cssEase: 'linear',
  customStyles: {},
  responsive: [],
  arrowsAlwaysVisible: false,
  playOrPause: true,
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  infinite: PropTypes.bool,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  autoplay: PropTypes.bool,
  speed: PropTypes.number,
  autoplaySpeed: PropTypes.number,
  cssEase: PropTypes.string,
  responsive: PropTypes.arrayOf(PropTypes.any),
  customStyles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  arrowsAlwaysVisible: PropTypes.bool,
  playOrPause: PropTypes.bool,
};
