import CardItem from '../UI/CardItem';
import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../store/countries-slice';

type CountryProps = {
    id: string
    items: ICountry[],
    error: string,
    loading: boolean,
}

const Country = (props: CountryProps): JSX.Element => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    const handleMouseEvent = (e: any):void => {
        e.preventDefault();
        setShowDetails(true);
    };

    const dispatch: Dispatch<any> = useDispatch();

    let content: any = props.items.length === 0 && < h2 > No countries found!</h2>;
    if (props.items.length > 0) {
        content = (
            <ul>
                {props.items.map((country: any) => (
                    <CardItem
                        key={country.id}
                        onMouseEnter={handleMouseEvent}
                        onMouseLeave={() => setShowDetails(false)}
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
                        {country.name}
                        <img src={country.flags} alt="flag" width="20" height="20" />
                        {showDetails && <p>Area: {country.area}<br />Capital:{country.capital} < br /> Population:{country.Population}</p>}
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