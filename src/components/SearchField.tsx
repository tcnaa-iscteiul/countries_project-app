import React, { useState } from 'react';
import classes from '../UI/InputSearchField.module.css';


const SearchField = (props: any): JSX.Element => {
    
    const [country, setCountry] = useState('');
   

    const inputHandler = (event: any): void => {
        if (event.target.value.trim() === '') {
            props.searching([], '');
            resetInput();
            return;
        }

        const searchingCountry = (props.items.filter((item: ICountry) =>
            item.name.toLowerCase().startsWith(event.target.value.toLowerCase())));
        setCountry(event.target.value);
        props.searching(searchingCountry, event.target.value);
    };

    const resetInput = (): void => {
        if (country) {
            const searchingCountry = (props.items.filter((item: ICountry) =>
                item.name.toLowerCase().startsWith(country.toLowerCase())));
            props.searching(searchingCountry, country);
            setCountry('');
        }
        else {
            props.searching([], '');
        } 
    };
    
     return <React.Fragment>
         <input className={classes.box} style={props.style} type="search" id="searchCountry" onChange={inputHandler} value={country} placeholder="Type to search" />
         <button className={classes.button} onClick={resetInput}>SEARCH</button>
    </React.Fragment>
};

export default SearchField;