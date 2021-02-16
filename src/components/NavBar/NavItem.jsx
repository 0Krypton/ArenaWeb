import React from 'react';


function NavItem(props) {

    return (
        <div data-tap={`${props.style}`}
            className={
                `nav-bar__btn nav-bar__btn--${
                    props.style
                }`
        }>
            <img className="nav-bar__item-icon"
                src={
                    props.iconUrl
                }
                alt="nav-bar__item"/>

            <span className="nav-bar__item-title">
                {
                props.title
            } </span>

        </div>
    );
}

export default NavItem;
