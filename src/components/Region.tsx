import useHttp from '../hooks/use-http';
import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import Country from './Country';
import Dropdown from '../UI/Dropdown';
import SearchField from './SearchField';
import { useSelector } from 'react-redux';

const REGIONS: IRegion[] = [
    {
        id: 1,
        name: 'Africa'
    }, {
        id: 2,
        name: 'Americas'
    }, {
        id: 3,
        name: 'Asia'
    }, {
        id: 4,
        name: 'Europe'
    }, {
        id: 5,
        name: 'Oceania'
    }];

const Region = (): JSX.Element => {

    const [countries, setCountries] = useState<ICountry[]>([]);
    const { enteredCountry, componentRegion:region, componentFavorits:favorits } = useSelector((state: CountryState) => state.selectCountry);
    const { isLoading, error, sendRequest: fetchCountries } = useHttp();

    //Filters countries according to the chosen region and entered text
    const searchCountry: ICountry[] =
        (region && enteredCountry && countries.filter((item: ICountry) => item.region === region && item.name.toLowerCase().startsWith(enteredCountry.toLowerCase()))) ||
        (enteredCountry&&countries.filter((item: ICountry) => item.name.toLowerCase().startsWith(enteredCountry.toLowerCase()))) ||
        (region&&countries.filter((item: ICountry) => item.region === region)) || [];
    //fetching data from the api
    const url:string = 'https://restcountries.com/v3.1/all';
    useEffect(() => {

        const transformCountries = (countryTask: any) => {
            const loadedCountries: ICountry[] = [];

            for (const taskKey in countryTask) {
                loadedCountries.push({
                    id: +taskKey,
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

    const title: string = "QUICK FIND AN CITY";
    return <React.Fragment>
        <div style={{ "position": "absolute", "top": "5%", "left": "10%" }}><h1 >{title}</h1></div>
        <Card>
            <Dropdown items={REGIONS} />
            <SearchField id={region} style={{ "width": "50%" }}></SearchField>
        </Card>
        {(!region && !enteredCountry) || favorits ||
            < Card style={{ "top": "25%", "backgroundColor": "transparent", "color": "black" }} >
                <Country
                    id={'REGION'}
                    loading={isLoading}
                    error={error}
                    items={searchCountry}
                />
            </Card>}
    </React.Fragment>;

};
export default Region;