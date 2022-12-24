import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component
{
    state = {searchRequest:''}

    onInputChange = (event) =>
    {
      this.setState({searchRequest:event.target.value})
    }

    onFormSubmit = (event) =>
    {
      event.preventDefault();
      //console.log(this.state.searchRequest);
      this.props.userSubmit(this.state.searchRequest);
    }

    render()
    {
        return(
         <div>
           <form 
            onSubmit={this.onFormSubmit.bind(this)} 
            className='flexContainer'
            >
             <label for="search">Find an image</label>
             <input
              id="search" 
              type="search" 
              placeholder="Type here to find an image..." autofocus required 
              onChange={this.onInputChange.bind(this)}
              />
             <button type="submit">Go</button>    
            </form>
         </div>
        )
    }


}

export default SearchBar;