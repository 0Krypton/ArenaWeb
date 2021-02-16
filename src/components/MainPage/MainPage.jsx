import './mainPageStyle.css';
import React, {useContext} from 'react';

import {PageIndexContext} from '../../Providers/PageIndexProvider';

// importing Screens
import ProfileScreen from "./Screen/ProfileScreen";
import ExploreScreen from "./Screen/ExploreScreen";
import HomeScreen from "./Screen/HomeScreen";
import TopScreen from "./Screen/TopScreen";
import ShopScreen from "./Screen/ShopScreen";
import SettingScreen from "./Screen/SettingScreen";


function MainPage() {
    const [pageIndex, _] = useContext(PageIndexContext);

    const getPage = (i) => {
        if (i === 1) {
            return (<ProfileScreen/>);
        } else if (i === 2) {
            return (<ExploreScreen/>);
        } else if (i === 3) {
            return (<HomeScreen/>)
        } else if (i === 4) {
            return (<TopScreen/>);
        } else if (i === 5) {
            return (<ShopScreen/>);
        } else if (i === 6) {
            return (<SettingScreen/>);
        }
    }
    return (<div className="main-page"> 
        {
        getPage(pageIndex)
    } </div>);
};


export default MainPage;
