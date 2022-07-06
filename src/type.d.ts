declare module '*.svg';

interface ICountry {
    id: string,
    name: string,
    area: number,
    capital: string,
    flags: string,
    population: number,
    region:string
}

type CountryState = {
    countries: ICountry[]
}

type CountryAction = {
    type: string,
    country: ICountry
}

type IRegion = {
    id: string,
    name: string
}

type DispatchType = (args: CountryAction) => CountryAction