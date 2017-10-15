import React from 'react';
import './loginpage.css'

class LoginPage extends React.Component {
    loginUser = function() {
		var phone = document.getElementById('user').value;
		var password = document.getElementById('pass').value;
		
		var UsrWarning = document.getElementById('warning-label-user')
		var pwdWarning = document.getElementById('warning-label-pass')

		var req = {
			"phone":phone,
			"password":password
		};
		//console.log(JSON.stringify(req));
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://carddrop.herokuapp.com/api/users/login", true);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");		
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					var res = xhr.responseText;
					var Jres = JSON.parse(res);
					if(Jres["status"]=="NOT_REGISTERED")
						UsrWarning.innerHTML = "No User Found";
					else if(Jres["status"]=="INVALID_PASSWORD")
						UsrWarning.innerHTML = "Invalid Password";
						else						
						UsrWarning.innerHTML = "";

					console.log(Jres["status"]);
				}
			}
		}
		xhr.send(JSON.stringify(req));
	}

	regUser = function() {
		var phone = document.getElementById('user').value;
		var password = document.getElementById('pass').value;
		
		var UsrWarning = document.getElementById('warning-label-user')
		
		var req = {
			"phone":phone,
			"password":password
		};
		//console.log(JSON.stringify(req));
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://carddrop.herokuapp.com/api/users/register", true);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");		
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					var res = xhr.responseText;
					var Jres = JSON.parse(res);
					if(Jres["status"]=="ALREADY_REGISTERED")
						UsrWarning.innerHTML = "User Already Exixts";
					else						
						UsrWarning.innerHTML = "";

					console.log(Jres["status"]);
				}
			}
		}
		xhr.send(JSON.stringify(req));
	}

      render () {
        return (
			<div class="login-wrap">
				<div class="login-html">
					<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
					<input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
					<div class="login-form">
						<div class="sign-in-htm">
							<div class="group">
								<label for="user" class="label">Mobile Number</label>
								<input id="user" type="text" class="input" />
								<div id="warning-label-user"></div>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label>
								<input id="pass" type="password" class="input" data-type="password" />
								<div id="warning-label-pass"></div>
							</div>
							<div class="group">
								<input id="check" type="checkbox" class="check" checked />
								<label for="check"><span class="icon"></span> Keep me Signed in</label>
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign In" onClick={this.loginUser.bind(this)}/>
							</div>
							<div class="hr"></div>
							<div class="foot-lnk">
								<a href="#forgot">Forgot Password?</a>
							</div>
						</div>
						<div class="sign-up-htm">
							<div class="group">
								<label for="user" class="label">Mobile Number</label>
								<input id="user" type="text" class="input" />
								<div id="warning-label-user"></div>
							</div>
							<div class="group">
								<label for="pass" class="label">Password</label>
								<input id="pass" type="password" class="input" data-type="password" />
							</div>
							<div class="group">
								<label for="pass" class="label">Repeat Password</label>
								<input id="pass" type="password" class="input" data-type="password" />
							</div>
							<div class="group">
								<label for="pass" class="label">Email Address</label>
								<input id="pass" type="text" class="input" />
							</div>
							<div class="group">
								<input type="submit" class="button" value="Sign Up"  onClick={this.regUser.bind(this)} />
							</div>
							<div class="hr"></div>
							<div class="foot-lnk">
								<label for="tab-1" ><a>Already Member?</a></label>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
      }
}

export default LoginPage;