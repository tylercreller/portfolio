import React, { useState } from 'react';
import TextLoop from 'react-text-loop';
import { motion, AnimatePresence } from 'framer-motion';
import _debounce from 'lodash.debounce';

const Intro = () => {
  const [hasLocationError, setHasLocationError] = useState(true);
  const [article, setArticle] = useState('an');
  const [location, setLocation] = useState('upstate new york');
  const [locationClass, setLocationClass] = useState('warning');

  const handleLocation = () => {
    setArticle('a');
    setLocation('remote');
    setLocationClass('valid');
    setHasLocationError(false);
    onExitLocation();
  };

  const onHoverLocation = e => {
    if (hasLocationError) {
      const tooltipSpan = document.getElementById('tooltipSpan');
      const x = e.clientX,
        y = e.clientY;
      tooltipSpan.style.top = y - 120 + 'px';
      tooltipSpan.style.left = x - 50 + 'px';
      tooltipSpan.style.display = 'flex';
    }
  };
  const debounceHover = _debounce(onHoverLocation, 300);

  const onExitLocation = e => {
    e && e.preventDefault();
    const tooltipSpan = document.getElementById('tooltipSpan');
    tooltipSpan.style.display = 'none';
    tooltipSpan.style.overflow = 'hidden';
  };

  return (
    <React.Fragment>
      <div className="hero-text">
        <strong className="tag">{'<tyler.creller />'}</strong> is {article}{' '}
        <AnimatePresence>
          <motion.span
            id="autocorrectLocation"
            onMouseEnter={e => {
              e.persist();
              debounceHover(e);
            }}
            className={`autocorrect ${locationClass}`}>
            {location}
          </motion.span>
        </AnimatePresence>{' '}
        based full-stack javascript engineer, and{' '}
        <span className="tag">
          {'{'}
          <span className="string">{"'"}</span>
          <TextLoop mask={true}>
            <span className="string">cloud architect</span>
            <span className="string">dog dad</span>
            <span className="string">video game enthusiast</span>
            <span className="string">serial hobbyist</span>
            <span className="string">remote-work advocate</span>
            <span className="string">fpv pilot</span>
          </TextLoop>
          <span className="string">{"'"}</span>

          {'}'}
        </span>
        {'.'}
      </div>
      <div className="header__icons">
        <a href="mailto:tylercreller@gmail.com" target="_blank">
          <i className="far fa-envelope fa-2x"></i>
        </a>
        <a href="https://github.com/tylercreller" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/tyler-creller/" target="_blank">
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/_tycrell/" target="_blank">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <div className="comment hero-text__tagline">
        {' // I am currently'}{' '}
        <a
          className="comment hero-text__tagline__company"
          href="https://docs.google.com/document/d/1anfDrgbiZKz3xpwbmiiurQ4dfSxi9k7QrxlkS5GQ-_4/edit?usp=sharing"
          target="_blank">
          looking for my next opportunity!
        </a>
      </div>
      <span
        id="tooltipSpan"
        className="tooltip-mask"
        onMouseLeave={onExitLocation}>
        <span className="tooltip">
          <span className="tooltip-content">
            Unknown property: 'upstate new york'{' '}
            <span className="tooltip-hint">covid-19 (unknownProperties)</span>
          </span>
          <span className="tooltip-footer" onClick={e => handleLocation(e)}>
            Quick fix
          </span>
        </span>
      </span>
    </React.Fragment>
  );
};
export default Intro;
