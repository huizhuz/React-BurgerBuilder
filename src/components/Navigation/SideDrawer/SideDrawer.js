import React from 'react'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    let attachedClasses=[]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    } else{
        attachedClasses=[classes.SideDrawer, classes.Close]
    }
    return (
        <Aux>
            <Backdrop show={props.open} hide={props.close}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div style={{ height: 12 + '%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Logo></Logo>
                </div>
                <NavigationItems></NavigationItems>
            </div>
        </Aux>
    )
}

export default sideDrawer