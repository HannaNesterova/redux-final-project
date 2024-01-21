
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/filterSlice';

function Search() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQueryLocal] = useState('');

    const handleSearch = () => {
        dispatch(setSearchQuery(searchQuery));
        setSearchQueryLocal('');
    };

    return (
        <div className="search active">
            <input
                placeholder="Search"
                className="searchActive"
                value={searchQuery}
                onChange={(e) => setSearchQueryLocal(e.target.value)}
            />
            <button className="src-btn" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default Search;
