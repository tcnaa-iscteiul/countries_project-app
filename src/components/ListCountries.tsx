import Country from './Country';


type ListCountriesProps = {
    items: ICountry[],
    deleteCountry: (item: ICountry) => void,
    saveCountry: (item: ICountry) => void,
    removeItem: (item: ICountry)=>void,
    selectedRegion: string,
    loading: boolean,
    error: string,
}
const ListCountries = (props: ListCountriesProps): JSX.Element => {

    const selectedCountries: ICountry[] = props.selectedRegion ? props.items.filter((item: ICountry) => item.region === props.selectedRegion) : props.items;
    return <div><Country items={selectedCountries}
        removeItem={props.removeItem}
        loading={props.loading}
        error={props.error}
        saveCountry={props.saveCountry}
        deleteCountry={props.deleteCountry}/></div>;
};

export default ListCountries;