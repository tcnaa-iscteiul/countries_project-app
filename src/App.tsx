import React from 'react';
import './App.css';
import Region from './components/Region';
import Favorits from './components/Favorits';
import MainDiv from './UI/MainDiv';

const App: React.FC = (): JSX.Element => {

    return (
        <main>
            <MainDiv>
                <Region/>
                <Favorits/>
            </MainDiv>
        </main>
    );
}
export default App;
