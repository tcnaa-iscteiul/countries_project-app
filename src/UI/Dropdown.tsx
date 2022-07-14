import { Dispatch, Fragment } from 'react';
import classes from './Dropdown.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries-slice';

const Dropdown = (props: { items: IRegion[] }): JSX.Element => {

    const dispatch = useDispatch();

    const region: string = useSelector((state: CountryState) => state.selectCountry.componentRegion);
    const addSelected: Dispatch<string> =
        (component: string) => dispatch(countriesActions.addSelectedCountry({ componentRegion: component }));

    const dropdownChangedHandler = (e: any): void => {
        e.preventDefault();
        (e.target.value === 'DEFAULT') ? addSelected('') : addSelected(e.target.value);
    };

    return <Fragment>
        <select className={classes.input} name="regions" id="regions" onChange={dropdownChangedHandler} value={region}>
            <option value='DEFAULT'>Select an region</option>
            {props.items.map((region: IRegion) => <option className={classes.input} key={region.id} value={region.name}>{region.name}</option>)}
        </select>
    </Fragment>;
};

export default Dropdown;