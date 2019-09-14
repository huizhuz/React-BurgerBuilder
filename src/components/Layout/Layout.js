// wrapper
import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer : false,
    }
    closeDrawer = () => {
        this.setState({showSideDrawer: false})

    }
    openDrawer = ()=> {
        this.setState({showSideDrawer: true})
    }
    render() {
        return (
            <Aux>
                <Toolbar open={this.openDrawer}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} close={this.closeDrawer}></SideDrawer>
                <main className={classes.Mainview}>
                    {this.props.children}
                    {/* display whatever is <Layout>'s children, which is anything between the opening and closing tags  */}
                </main>
            </Aux>
        )
    }
}

export default Layout;