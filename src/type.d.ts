declare module '*.svg';

interface ICountry {
    id: number,
    name: string,
    area: number,
    capital: string,
    flags: string,
    population: number,
    region:string
}

type CountryState = {
    countries: ICountry[],
    selectCountry: { enteredCountry: string, componentRegion: string, componentFavorits: boolean }
}

type IRegion = {
    id: number,
    name: string
}

type DispatchType = (args: CountryAction) => CountryAction