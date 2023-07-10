import React, { useState } from 'react';

let Profile = () => {
    const [isShown, setIsShown] = useState(false);
    const profileStyle = {
        transform: isShown ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }
    const disappearStyle = {
        display: isShown ? 'block' : 'none',
        
    }

    return <>
        <div className='header__menu'>
            <img src={require("../img/avatar.svg").default} alt='/*'></img>
            <button onClick={() => { setIsShown(!isShown) }} style={profileStyle} className='button__menu'></button>
        </div>
        <div style={disappearStyle} className='profile-menu'>
            <div className='decorative-elem'></div>
            <div className='menu__buttons'>
                <button className='menu__profile-button'>Profile</button>
                <button className='menu__logout-button'>Log Out</button>
            </div>
        </div>
    </>
}
export default Profile