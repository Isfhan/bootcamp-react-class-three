import React from 'react';

function Header(props) {
    return (
        <div>
            <div className="topnav">
                <span>{props.itemOne}</span>
                <span>{props.itemTwo}</span>
                <span>{props.itemThree}</span>
            </div>
        </div>
    )
}

export default Header;