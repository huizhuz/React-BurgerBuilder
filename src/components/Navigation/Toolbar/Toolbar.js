import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.open}>MENU</div>
            <Logo />
            <nav>
                <NavigationItems></NavigationItems>
            </nav>

        </header>
    )
}

export default toolbar