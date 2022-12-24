import axios from 'axios';
import React from 'react'
import SearchBar from './SearchBar';
import ImgGallery from './ImgGallery';


class GetThisImgApp extends React.Component
{
    state = {images : []};

    async onSearchSubmit(searchRequest)
    {
        const KEY = `uuwcZFEyJ0GNKmU-nyjyW0d8FSV5xYhQ1aNZmEdgDT0'`;
      
        const PERPAGE = 20;
      
        const searchResultImgs = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
        params: {query : searchRequest, per_page:PERPAGE},
        headers: {Authorization: `Client-ID ${KEY}`}
        }
        )
       
        this.setState({images : searchResultImgs.data.results})
    }
    render()
    {
     return(
        <div>
            <SearchBar userSubmit={this.onSearchSubmit.bind(this)}/> 
            <p></p>
            <ImgGallery foundImages = {this.state.images} />
        </div>
       )
    }
    
}

export default GetThisImgApp; 