import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            Copyright © {props.copyright} All Rights Reserved by {props.founder}.
        </div>
    )
}

export default Footer;