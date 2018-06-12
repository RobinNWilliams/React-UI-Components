import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';



const HeaderContainer = () => {
    return (
    
    <div className="header">
    <HeaderTitle />
    <div>
    <HeaderContent />
   </div>

    </div>
    );
};


export default HeaderContainer;


