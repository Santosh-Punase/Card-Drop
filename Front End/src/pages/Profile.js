import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

import Container from 'muicss/lib/react/container';
import { Redirect } from 'react-router';

class Profile extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			successSave: false
        };
    }

    updateProfile = function () {
        var that = this;
        var xhr = new XMLHttpRequest();
        
        xhr.open("PUT","http://carddrop.herokuapp.com/api/users/" + window.userId,true);
        xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        var Name = document.getElementById("name").value;
        var Number = document.getElementById("number").value;        
        var Description = document.getElementById("desc").value;
        var File = document.getElementById("file").value;
        
       var data = JSON.stringify({
           "name" : Name,
           "phone" : Number,
           "detail" : Description,
           "cardImageId" : window.userCardImage

       });
       console.log(data);
       
        xhr.onreadystatechange = function () {
    
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log(xhr.responseText);
                    console.log("done");
                    that.setState({successSave:true});
                 }
            }
        }
        xhr.send(data); 
    }
    


  render() {
    if(	this.state.successSave) {
        alert("Saved Successfuly");
        return <Redirect push to="/user" />;
    }
    return (
      <div >
        <Container >
        <legend>Profile</legend>
        <Input id="name" label="Name" value={window.userName} required={true} />
        <Input id="number" label="Mobile Number" readOnly value={window.userPhone}/>
        <Input id="desc" label="Description" value={window.userDetail} />
        <Input id="file" label="Select Card Image" type="file" />
        <Button variant="raised" onClick={this.updateProfile.bind(this)} className="mui-btn mui-btn--primary">Submit</Button>
        </Container >
      </div>
    );
  }
}

export default Profile;