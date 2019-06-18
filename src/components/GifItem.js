import React from 'react';
import { CardImg } from 'reactstrap'

const GifItem = (image) => {
  return (
    <div>
      <CardImg src={image.gif.images.fixed_width_downsampled.url} />
    </div>
  )
};

export default GifItem;
