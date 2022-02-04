import React from 'react';

const Dropdown = ({name,setCurrentProduct}) => {
    return (
        <li><a className="dropdown-item" href="/#" onClick={() => setCurrentProduct(name)}>{name}</a></li>
    );
}

export default Dropdown;
