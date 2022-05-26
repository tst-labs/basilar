import React from 'react';
import PropTypes from 'prop-types';

const CustomSVG = ({largura, larguraOriginal, alturaOriginal, htmlInterno}) => {
  
  const ASPECT_RATIO = larguraOriginal / alturaOriginal;
  let widthNum = (isNaN(largura) ? larguraOriginal : largura);
  
  return (
    <svg
      width={largura}
      role="img"
      height={(widthNum/ASPECT_RATIO).toString()}
      viewBox={`0 0 ${larguraOriginal} ${alturaOriginal}`}
      dangerouslySetInnerHTML={{__html: htmlInterno}}
    />
  );
};

CustomSVG.propTypes = {
  largura: PropTypes.number,
  larguraOriginal: PropTypes.number,
  alturaOriginal: PropTypes.number,
  htmlInterno: PropTypes.string
}

export { CustomSVG };