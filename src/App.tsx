import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import './App.css';
import Region from './components/Region';
import Favorits from './components/Favorits';
import { addCountry, removeCountry } from "./store/actionCreators";
import { Dispatch } from "redux";
import MainDiv from './UI/MainDiv';

const App: React.FC = (): JSX.Element => {
    const countries: ICountry[] = useSelector(
        (state: CountryState) => state.countries,
        shallowEqual
    )
    const dispatch: Dispatch<any> = useDispatch()

    const saveCountry = 
        React.useCallback(
            (country: ICountry) => dispatch(addCountry(country)),
            [dispatch]
        );

    const deleteCountry =
        React.useCallback(
            (country: ICountry) => dispatch(removeCountry(country)),
            [dispatch]
        );

    /*
    return (
        <main>
            <MainDiv>
                <Region saveCountry={saveCountry} deleteCountry={deleteCountry} />
                <Favorits saveCountry={saveCountry} deleteCountry={deleteCountry} items={countries} />
            </MainDiv>
        </main>
    );*/
    return (
        <main>
            <MainDiv>
                <Region saveCountry={saveCountry}  />
                <Favorits saveCountry={deleteCountry} deleteCountry={deleteCountry} items={countries} />
            </MainDiv>
        </main>
    );

}

export default App;
