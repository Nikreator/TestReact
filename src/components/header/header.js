

import './header.css';

const Header = ({ setShow }) => {

    return (
        <div className="header mb-5" onClick={() => setShow(false)}>
            <button className="header-btn" onClick={() => setShow(true)}>Cart</button>
        </div>
    )
}

export default Header;