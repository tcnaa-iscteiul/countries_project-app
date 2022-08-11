import * as actionTypes from './actionTypes';

export function addCountry(country: ICountry) {
    const action: CountryAction = {
        type: actionTypes.ADD_COUNTRY,
        country
    }
    return simulateHttpRequest(action)
}

export function removeCountry(country: ICountry) {
    const action: CountryAction = {
        type: actionTypes.REMOVE_COUNTRY,
        country,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CountryAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}