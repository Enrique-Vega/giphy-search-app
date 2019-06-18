import React, { Component } from 'react';
import GifItem from './GifItem'
import { Card, CardColumns } from 'reactstrap'

  const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
      return <GifItem key={image.id} gif={image} />
    });

    return (
      <CardColumns style={{display: 'flex', border: 'solid 1px black'}}>
        <Card style={{display:'flex', flexDirection: 'row' }}>
          {gifItems}
        </Card>
      </CardColumns>
    );
  }

export default GifList;