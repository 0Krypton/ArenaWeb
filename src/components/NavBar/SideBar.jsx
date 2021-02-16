import './NavBarStyle.css';

import React, {useEffect, useState, useContext} from 'react';
import NavItem from './NavItem';

import profileSvg from "../../assets/nav-icons/profileSvg.svg";
import exploreSvg from "../../assets/nav-icons/exploreSvg.svg";
import homeSvg from "../../assets/nav-icons/homeSvg.svg";
import topSvg from "../../assets/nav-icons/topSvg.svg";
import shopSvg from "../../assets/nav-icons/shopSvg.svg";
import settingSvg from '../../assets/nav-icons/settingSvg.svg'

import {PageIndexContext} from '../../Providers/PageIndexProvider';

function SideBar() {

    const [_, selectPage] = useState(3);
    const [pageIndex, setNewPageIndex] = useContext(PageIndexContext)
    let selectedPage = 0;

    useEffect(() => {
        document.querySelector('.nav-bar__btn--home').classList.toggle('nav-bar__btn--home-active');
        const navBtns = document.querySelectorAll('.nav-bar__btn')
        navBtns.forEach(btn => btn.addEventListener('click', (e) => { // ** loop over btns to remove ""nav-bar__btn--...-active"" class
            navBtns.forEach(navBtn => {
                const t = navBtn.dataset.tap;
                navBtn.classList.remove(`nav-bar__btn--${t}-active`);
                navBtn.closest('.nav-bar__btn').classList.remove(`nav-bar__btn--${t}-active`);
            });
            // ** add ""nav-bar__btn--...-active"" class to tapped btn
            const type = btn.dataset.tap;
            // e.target.closest('.nav-bar__btn').classList.toggle(`nav-bar__btn--${type}-active`);
            btn.classList.toggle(`nav-bar__btn--${type}-active`);
            selectedPage = setPage(type);
            selectPage(selectedPage);
            setNewPageIndex(selectedPage);
        }));
        // console.log('selectedPage', page);
        // console.log('pageIndex', pageIndex);
    });

    const setPage = (page) => {
        if (page === 'profile') {
            return 1;
        } else if (page === 'explore') {
            return 2;
        } else if (page === 'home') {
            return 3;
        } else if (page === 'top') {
            return 4;
        } else if (page === 'shop') {
            return 5;
        } else if (page === 'setting') {
            return 6;
        } else {
            return 0;
        }

    }


    return (<div className="side-bar">
        <div className="side-bar__items">

            <NavItem title='Profile' style='profile'
                iconUrl={profileSvg}/>
            <NavItem title='Explore' style='explore'
                iconUrl={exploreSvg}/>
            <NavItem title='Home' style='home'
                iconUrl={homeSvg}/>
            <NavItem title='Top' style='top'
                iconUrl={topSvg}/>
            <NavItem title='Shop' style='shop'
                iconUrl={shopSvg}/>
        </div>
        <div className="side-bar__setting">
            <NavItem title='Setting' style='setting'
                iconUrl={settingSvg}/>
        </div>
    </div>);
};


export default SideBar;
