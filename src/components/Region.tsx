import useHttp from '../hooks/use-http';
import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import ListCountries from './ListCountries';
import Dropdown from '../UI/Dropdown';
import SearchField from './SearchField';

const REGIONS: IRegion[] = [
    {
        id: 'id1',
        name: 'Africa'
    }, {
        id: 'id2',
        name: 'Americas'
    }, {
        id: 'id3',
        name: 'Asia'
    }, {
        id: 'id4',
        name: 'Europe'
    }, {
        id: 'id5',
        name: 'Oceania'
    }];

type RegionProps = {
    saveCountry: (item: ICountry) => void
}
const Region = (props: RegionProps): JSX.Element => {
    const [region, setRegion] = useState<string>('');
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [searchCountry, setSearchCountry] = useState<ICountry[]>([]);
    const {isLoading, error, sendRequest: fetchCountries } = useHttp();
    const [enteredCountry, setEnteredCountry] = useState<string>();
    const show = region || searchCountry.length > 0 || (enteredCountry && searchCountry.length===0);
    
    const url = 'https://restcountries.com/v3.1/all';
    useEffect(() => {

        const transformCountries = (countryTask: any) => {
            const loadedCountries: ICountry[] = [];

            for (const taskKey in countryTask) {
                loadedCountries.push({
                    id: taskKey,
                    name: countryTask[taskKey].name.common,
                    area: countryTask[taskKey].area,
                    capital: countryTask[taskKey].capital,
                    flags: countryTask[taskKey].flags.png,
                    population: countryTask[taskKey].population,
                    region: countryTask[taskKey].region
                });
            }
            setCountries(loadedCountries.sort((a, b) => a.name.localeCompare(b.name)));
        };
        fetchCountries({ url: url }, transformCountries);
    }, [fetchCountries]);

    
    const searchingCountry = (items: ICountry[], country: string): void => {
        setRegion('');
        setSearchCountry(items);
        setEnteredCountry(country);
    };

    const selectedOption = (region: string): void => {
        setRegion(region);
    };

    const removeItem = (country: ICountry): void => {
        const newSearch = countries?.filter((item: ICountry) => item !== country);
        setSearchCountry(newSearch);
        setEnteredCountry('');
    }

    const title: string = "QUICK FIND AN CITY";

    return <React.Fragment>
        <div style={{ "position": "absolute", "top": "5%", "left": "20%" }}><h1 >{title}</h1></div>
        <Card>
            <Dropdown selectRegion={selectedOption} items={REGIONS} />
            <SearchField
                items={countries}
                saveCountry={props.saveCountry}
                deleteCountry={() => setEnteredCountry('')}
                searching={searchingCountry}
                style={{ "width": "25%" }}></SearchField>
        </Card>
        {show && <Card style={{ "top": "25%", "backgroundColor": "transparent", "color": "black" }} >
            <ListCountries
                loading={isLoading}
                error={error}
                saveCountry={props.saveCountry}
                deleteCountry={() => { }}
                selectedRegion={region || ''}
                items={region !== '' ? countries : searchCountry}
                removeItem={removeItem}
            /></Card>}
        </React.Fragment>;
};
export default Region;