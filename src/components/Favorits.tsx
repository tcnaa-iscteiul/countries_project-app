import { useSelector, useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries-slice';
import LeftBar from '../UI/LeftBar';
import SearchField from './SearchField';
import CardItem from '../UI/CardItem';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const Favorits = (): JSX.Element => {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const { countries, selectCountry: { enteredCountry, componentFavorits:favorits } } = useSelector((state: CountryState) => state);

    //FIlters the countries according to the entered text
    const selectedCountry: ICountry[] = enteredCountry &&
        (favorits) ? countries.filter((item: ICountry) =>
            item.name.toLowerCase().startsWith(enteredCountry.toLowerCase())) : countries;

    return <LeftBar>
        <SearchField id={'FAVORITS'} style={{"borderRadius":"0px"}}></SearchField>
        <h1>Favorits</h1>
            <ul>
                {selectedCountry.map((country: any) => (
                    <CardItem 
                        key={country.id}
                        onClick={() => dispatch(countriesActions.removeCountry(country.id))}
                    >
                        {country.name}
                        <img src={country.flags} alt="flag" width="20" height="20" />
                    </CardItem >
                ))}
            </ul >
        {favorits && selectedCountry.length === 0 && enteredCountry && <p>No country found!</p>}
    </LeftBar>
}

export default Favorits;