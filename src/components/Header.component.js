import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Testing</span>
                        <span>Testing</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
