import React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

import SearchCards from './SearchCards'
import Profile from './Profile'
import ManageCards from './ManageCards'

import './userpage.css'

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

   
      console.log("From Side bar " + window.userId);
    
  
  
    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open,
      currentPath: "ManageCards"
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    this.items = [
      <SidebarItem>My Cards
      <SidebarItem onClick={this.myCard.bind(this)}>Manage Cards</SidebarItem>
      <SidebarItem onClick={this.pickedCard.bind(this)}>Search Cards</SidebarItem>
      </SidebarItem>,
      <SidebarItem>My Account
      <SidebarItem onClick={this.showProfile.bind(this)}>Edit Profile</SidebarItem>
      <SidebarItem>Logout</SidebarItem>
      </SidebarItem>
    ];
  }

  showProfile = function() {
    this.setState({currentPath:"Profile"});
  }

  myCard = function() {
    this.setState({currentPath:"ManageCards"});
  }

  pickedCard = function() {
    this.setState({currentPath:"SearchCards"});
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

    let currentContent = null;
    if (this.state.currentPath==="SearchCards"){
      currentContent = < SearchCards />
    } else if(this.state.currentPath === "Profile") {
      currentContent = <Profile/>
    }
    else if(this.state.currentPath === "ManageCards") {
      currentContent = <ManageCards/>
    }

    return (
      
      <Sidebar sidebar content={this.items}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}
               background="#013A6B"
               >
        <br></br>
        <br></br><br></br>
        {currentContent}
        
        
      </Sidebar>
    );
  }
};

export default Sidemenu;