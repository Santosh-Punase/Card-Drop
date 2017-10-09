import React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

import App from './App';
import Maincontent from './Maincontent'
 
const items = [
  <SidebarItem>My Cards
  <SidebarItem href="#">Manage Cards</SidebarItem>
  <SidebarItem>Dropped Cards</SidebarItem>
  <SidebarItem>Picked Cards</SidebarItem>
  </SidebarItem>,
  <SidebarItem>My Account
  <SidebarItem>My Profile</SidebarItem>
  <SidebarItem>Messages</SidebarItem>
  <SidebarItem>Change Password</SidebarItem>
  <SidebarItem>Logout</SidebarItem>
  </SidebarItem>
];
const mql = window.matchMedia(`(min-width: 800px)`);


class Item extends React.Component {
  constructor(){
  super();
}
render(){
  return <li onClick={this.props.click} 
           className={this.props.className}>
           {this.props.text}
         </li>        
}
}

class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

 

  onSetSidebarOpen = function(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount = function() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount = function() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = function() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render = function() {
    var sidebarContent = <b>Sidebar content</b>;
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    return (
      <Sidebar sidebar content={items}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}
               background="#3949AB"
               >
        <b>main content</b>
        < Maincontent />
      </Sidebar>
    );
  }
};

export default Sidemenu;