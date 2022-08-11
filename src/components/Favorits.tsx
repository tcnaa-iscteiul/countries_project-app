import React, { useState } from 'react';
import LeftBar from '../UI/LeftBar';
import SearchField from './SearchField';
import ListCountries from './ListCountries';

const Favorits = (props: any): JSX.Element => {
    const [searchCountry, setSearchCountry] = useState<ICountry[]>([]);
    const [enteredCountry, setEnteredCountry] = useState<string>('');

<<<<<<< HEAD

    const removeItem = (country: ICountry): void => {
        const newSearch = props.items?.filter((item: ICountry) => item !== country);
        setSearchCountry(newSearch);
        setEnteredCountry('');
    }
=======
    //FIlters the countries according to the entered text
    const selectedCountry: ICountry[] = countries.filter(
        (item: ICountry) =>
            enteredValue === "" ||
            item.name.toLowerCase().startsWith(enteredValue.toLowerCase())
    );
>>>>>>> parent of 4c3e693 (final_version)

    const searchingCountry = (items: ICountry[], country: string) => {
        setSearchCountry(items);
        setEnteredCountry(country);
    };

    return <LeftBar>
        <SearchField
            items={props.items}
            saveCountry={props.deleteCountry}
            deleteCountry={removeItem}
            searching={searchingCountry}
            style={{}}
        >
        </SearchField>
        <h1>Favorits</h1>
        {props.items.length>0&&< ListCountries
            loading={false}
            removeItem={removeItem}
            error={''}
            saveCountry={props.deleteCountry}
            deleteCountry={removeItem}
            selectedRegion={''}
            items={enteredCountry === '' ? props.items : searchCountry} />}

    </LeftBar>
};

export default Favorits;