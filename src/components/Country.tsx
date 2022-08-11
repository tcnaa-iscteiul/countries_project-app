import CardItem from '../UI/CardItem';
import React, { useState } from 'react';

type CountryProps = {
    items: ICountry[],
    saveCountry: (item: ICountry) => void,
    deleteCountry: (item: ICountry) => void,
    error: string,
    loading: boolean,
    removeItem: (item: ICountry) => void,
}

const Country = (props: CountryProps): JSX.Element => {

    const [showDetails, setShowDetails] = useState(false);

    const handleMouseEvent = (e: any) => {
        e.preventDefault();
        setShowDetails(true);
    };

    let countriesList: any = props.items.length === 0 && < h2 > No countries found!</h2>;
    if (props.items.length > 0) {
        countriesList = (
            <ul>
                {props.items.map((country: any) => (
                    <CardItem
                        key={country.id}
                        onMouseEnter={handleMouseEvent}
                        onMouseLeave={() => setShowDetails(false)}
                        onClick={
                            () => {
                                props.saveCountry(country);
                                props.removeItem(country);
                            }}
                        >
                        {country.name}
                        <img src={country.flags} alt="flag" width="20" height="20"/>
                        {showDetails && <p>Area: {country.area}<br />Capital:{country.capital} < br /> Population:{country.Population}</p>}
                      
                        </CardItem >
                ))}

            </ul >
        );
    }
<<<<<<< HEAD
<<<<<<< HEAD

    let content = countriesList;

=======
>>>>>>> 73e98ce (Update Country.tsx)
=======
    console.log(content);
>>>>>>> parent of 4c3e693 (final_version)
    if (props.error) {
        content = 'Request failed!';
    }

    if (props.loading) {
        content = 'Loading countries...';
    }
    return <React.Fragment>
        {content}
    </React.Fragment>;

};

export default Country;
