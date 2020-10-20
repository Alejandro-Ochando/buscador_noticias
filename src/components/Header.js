import React from 'react';

const Header = ({ titulo }) => {
    return ( 

        <nav className="nav-wrapper deep-orange lighten-1 ">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>

     );
}
 
export default Header;