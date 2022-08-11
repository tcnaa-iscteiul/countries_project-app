import * as actionTypes from "./actionTypes";

const initialState: CountryState = {
    countries: [],
}
const reducer = (
    state: CountryState = initialState,
    action: CountryAction
): CountryState => {
    switch (action.type) {
        case actionTypes.ADD_COUNTRY:
            if (state.countries.filter(country => country.id === action.country.id).length === 0) {
                const newCountry: ICountry = {
                    id: action.country.id,
                    name: action.country.name,
                    area: action.country.area,
                    capital: action.country.capital,
                    flags: action.country.flags,
                    population: action.country.population,
                    region:action.country.region
                }
                return {
                    ...state,
                    countries: state.countries.concat(newCountry),
                }
            }
            return state;

        case actionTypes.REMOVE_COUNTRY:
            const updatedCountries: ICountry[] = state.countries.filter(
                country => country.id !== action.country.id
            )
            return {
                ...state,
                countries: updatedCountries,
            }
    }
    return state;
}

export default reducer;