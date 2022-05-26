import React from 'react';
import PropTypes from 'prop-types';

const ORIGINAL_WIDTH  = 36.450;
const ORIGINAL_HEIGHT = 53.260;
const ASPECT_RATIO    = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

const LogoBicolor = ({largura = ORIGINAL_WIDTH}) => {
  
  let widthNum = (isNaN(largura) ? ORIGINAL_WIDTH : largura);
  
  return (
    <svg
      width={largura}
      role="img"
      height={(widthNum/ASPECT_RATIO).toString()}
      viewBox={`0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`}
    >
      <g transform="matrix(1.333333 0 0 -1.333333 -2174.8754 304.52573)">
        <path
          d="M1646.04 220.937a3.73 3.73 0 0 1 3.729 3.729 3.73 3.73 0 0 1-3.729 3.728 3.73 3.73 0 0 1-3.729-3.728 3.73 3.73 0 0 1 3.729-3.729m-6.92-6.24c2.507-.254 4.464-2.372 4.464-4.946v-12.428h4.97v12.428c0 5.5-4.453 9.943-9.943 9.943h-4.97v-4.972h4.97a5.01 5.01 0 0 0 .508-.025"
          fill="#fff"
        />
        <path d="M1641.1 212.238h-9.942v-4.97h9.942z" fill="#077c60" />
        <path d="M1658.498 219.695h-9.942v-4.972h9.942z" fill="#ffce06" />
        <path
          d="M1641.1 203.538v1.243h-4.972v-6.215c0-2.573-1.957-4.7-4.464-4.945-.167-.017-.335-.025-.506-.025v-4.97c5.49 0 9.942 4.45 9.942 9.94z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

LogoBicolor.propTypes = {
  largura: PropTypes.number
}

export default LogoBicolor;