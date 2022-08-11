import { useSelector, useDispatch } from "react-redux";
import { countriesActions } from "../store/countries-slice";
import LeftBar from "../UI/LeftBar";
import SearchField from "./SearchField";
import FavoritsItem from "../UI/FavoritsItem";
import { Dispatch, useState } from "react";
import { AnyAction } from "redux";

const Favorits = (): JSX.Element => {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const [enteredValue, setEnteredValue] = useState<string>("");
    const { countries } = useSelector((state: CountryState) => state);

    console.log(countries);

    //FIlters the countries according to the entered text
    const selectedCountry: ICountry[] = countries.filter(
        (item: ICountry) =>
            enteredValue === "" ||
            item.name.toLowerCase().startsWith(enteredValue.toLowerCase())
    );

    const changeSearch = (newSearch: string) => {
        setEnteredValue(newSearch);
    };

    return (
        <LeftBar>
            <SearchField
                style={{ borderRadius: "0px", marginLeft:"15%"  }}
                changeSearch={changeSearch}
            ></SearchField>
            <h1 style={{ textAlign: "center" }}>Favorits</h1>
            <ul>
                {selectedCountry.map((country: any) => (
                    <FavoritsItem
                        key={country.id}
                        onClick={() => dispatch(countriesActions.removeCountry(country.id))}
                    >
                        {country.name}
                        <img src={country.flags} alt="flag" width="20" height="20" />
                    </FavoritsItem>
                ))}
            </ul>
            {enteredValue && selectedCountry.length === 0 && <p style={{textAlign:"center"} }>No country found!</p>}
        </LeftBar>
    );
};

export default Favorits;