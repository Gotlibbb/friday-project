import React from "react";
import styles from './header.module.css'
import { NavLink } from "react-router-dom";


const Header = () => {
    return <div className={styles.headerBlock}>
        <NavLink to={'/login'}>login</NavLink>
        <NavLink to={'/registration'}>registration</NavLink>
        <NavLink to={'/profile'}>profile</NavLink>
        <NavLink to={'/password-recovery'}>password-recovery</NavLink>
        <NavLink to={'/new-password'}>new-password</NavLink>
        <NavLink to={'/test'}>test</NavLink>
    </div>
}

export default Header