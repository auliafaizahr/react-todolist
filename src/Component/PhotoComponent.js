import React, { Component } from 'react';
import Logo from './logo192.png';
import Pict from './pict.jpg';

class PhotoComponent extends Component {
  render() {
    return (
      <div className="img_photo text-center">
        <img src={Pict} alt="" />
      </div>
    );
  }
}

export default PhotoComponent;