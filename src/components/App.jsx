import React from 'react';

import SideBar from './NavBar/SideBar';
import MainPage from './MainPage/MainPage';

import {PageIndexProvider} from '../Providers/PageIndexProvider';


function App() {
    return (<PageIndexProvider>
        <div className='app-container'>
            <SideBar/>
            <MainPage/>
        </div>
    </PageIndexProvider>);
}


export default App;
