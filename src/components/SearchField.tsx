import React, { Dispatch, useState } from 'react';
import classes from '../UI/InputSearchField.module.css';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries-slice';
import { useSelector } from 'react-redux';

const SearchField = (props: { style: {}, id: string }): JSX.Element => {

    const [enteredValue, setEnteredValue] = useState<string>('');
    const region:string = useSelector((state: CountryState) => state.selectCountry.componentRegion);
    const dispatch: Dispatch<any> = useDispatch();
    const addSelected =
        (enteredValue: string, componentRegion: string, componentFavorits: boolean) =>
            dispatch(countriesActions.addSelectedCountry({ country: enteredValue, componentRegion: componentRegion, componentFavorits: componentFavorits }));

    const valueChangeHandler = (event: any):void => {
        setEnteredValue(event.target.value);
        props.id === 'FAVORITS' ? addSelected(event.target.value,'', true) : addSelected(event.target.value, region!=='REGION' ? region : '', false);
    };

    return <React.Fragment>
        <input className={classes.box} style={props.style} type="search" id={props.id} onChange={valueChangeHandler} value={enteredValue} placeholder="Type to search" />
    </React.Fragment>
};

export default SearchField;