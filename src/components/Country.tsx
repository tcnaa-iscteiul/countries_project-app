import CardItem from '../UI/CardItem';
import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries-slice';

type CountryProps = {
    items: ICountry[],
    error: string,
    loading: boolean,
}

const Country = (props: CountryProps): JSX.Element => {

    const dispatch: Dispatch<any> = useDispatch();
    let content: any = props.items.length === 0 && < h2 style={{ textAlign:"center" }} > No countries found!</h2>;

    if (props.items.length > 0) {
        content = (
            <ul>
                {props.items.map((country: any) => (
                    <CardItem
                        key={country.id}
                        //onClick function that save the country 
                        onClick={() =>
                            dispatch(countriesActions.addCountry({
                                id: country.id,
                                name: country.name,
                                area: country.area,
                                capital: country.capital,
                                flags: country.flags,
                                population: country.population,
                                region: country.region
                            }))}>
                        <h3>{country.name}
                            <img src={country.flags} alt="flag" width="20" height="20" /></h3>
                        <p>Area: {country.area}<br />Capital:{country.capital} < br /> Population:{country.population}</p>
                    </CardItem >
                ))}
            </ul >
        );
    }
    if (props.error) {
        content = 'Request failed!';
    }
    if (props.loading) {
        content = 'Loading countries...';
    }
    return <React.Fragment>
        {content}
    </React.Fragment>;
}

export default Country;
