import { createSlice } from '@reduxjs/toolkit';

const initialState: CountryState = {
    countries: [],
    selectCountry: { enteredCountry: '', componentRegion: '', componentFavorits: false }
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        addCountry(state, action) {
            if (!state.countries.find((country: ICountry) => country.id === action.payload.id)) {
                const newCountry: ICountry = {
                    id: action.payload.id,
                    name: action.payload.name,
                    area: action.payload.area,
                    capital: action.payload.capital,
                    flags: action.payload.flags,
                    population: action.payload.population,
                    region: action.payload.region
                }
                state.countries.push(newCountry);
                state.countries = state.countries.sort();
            }
        },
        removeCountry(state, action) {
            state.countries = state.countries.filter((country: ICountry) => country.id !== action.payload);
        },
        addSelectedCountry(state, action) {
            state.selectCountry = {
                enteredCountry: action.payload.country,
                componentRegion: action.payload.componentRegion, componentFavorits: action.payload.componentFavorits
            };
        }
    }
});
export const countriesActions = countriesSlice.actions;
export default countriesSlice;
