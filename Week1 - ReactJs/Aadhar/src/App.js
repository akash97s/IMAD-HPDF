import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  blue300,
  indigo900,
  orange200,
  purple500,
  white,
} from 'material-ui/styles/colors';

class App extends Component {

  render()
  {
  const stylemain={ backgroundColor:white,height:45};
  const style2={ marginRight:20,marginTop:-12};
  const style3={ marginRight:20,marginTop:-12};
    return (
      <MuiThemeProvider>
      <div id="maindiv">
      <div id="div1">
      <AppBar
        iconElementLeft={ <div id="Abh1"><h4>&emsp;&emsp;&emsp;&emsp;&emsp;<img src="Twitterbird.jpg" id="icon1"/>&emsp;
        <a href="www.twitter.com">Home</a>&emsp;&emsp;<a href="www.twitter.com">
      About</a></h4> </div>}
         iconElementRight={ <div id="Abh2"><div id="abh2"><input type="text" placeholder="Search Twitter" id="searchbox"/>
      <button type="submit" id="b2"><span class="glyphicon glyphicon-search" id="searchicon"></span></button>Have an account?</div>
      <DropDownMenu value={1} style={style2} >
          <MenuItem value={1} primaryText="Log in" />
          <MenuItem value={2} primaryText="Sign-up" />
          <MenuItem value={3} primaryText="Guest" />
        </DropDownMenu></div>}
         style={stylemain} showMenuIconButton="false"  />
<h2>aadhaar</h2>
</div>
      </div>
            </MuiThemeProvider>
        );
      }
    }
    export default App;
