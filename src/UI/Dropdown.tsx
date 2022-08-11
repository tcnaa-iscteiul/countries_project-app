import classes from './Dropdown.module.css';
import React, { useState } from 'react';
const Dropdown = (props: any): JSX.Element => {

    const [selected, setSelected] = useState('DEFAULT');

    const dropdownChangedHandler = (e: any) => {
        if (e.target.value !== 'DEFAULT') {
            setSelected(e.target.value);
        }
    };

    return <React.Fragment>
        <select className={classes.input} name="regions" id="regions" onChange={dropdownChangedHandler} value={selected}>
            <option value='DEFAULT'>Select an region</option>
        {props.items.map((region: ICountry) => <option className={classes.input} key={region.id} value={region.name}>{region.name}</option>)}
        </select>
        <button className={classes.button}
            onClick={() => {
                if (selected !== 'DEFAULT') {
                    props.selectRegion(selected)
                    setSelected('DEFAULT');
                }
                else {
                    setSelected('DEFAULT')
                    props.selectRegion('');
                }
            }}>SEARCH</button>
        </React.Fragment>;
};

export default Dropdown;