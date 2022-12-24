
import React from 'react';
//import { render } from 'react-dom';


class ImgGallery extends React.Component
{

    render()
    {
      const imgsMapped = this.props.foundImages.map(
        img=>
        {
            return <img key={img.id} src = {img.urls.regular} alt = {img.alt_description} />
        })
      return(
        <div>{imgsMapped}</div>  
      )
  
    }
 

}

export default ImgGallery; 