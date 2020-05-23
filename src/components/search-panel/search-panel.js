import React from 'react';
import '../search-panel/search-panel.css'


const SearchPanel = () => {
    const placeholderInput = 'search';

    return (
    <input 
    className='search-panel' 
    placeholder={placeholderInput} 
    type="text" 
    />
    )
};

export default SearchPanel;