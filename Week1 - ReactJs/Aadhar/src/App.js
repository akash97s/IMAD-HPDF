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
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';

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
  const style4={ backgroundColor:white,height:45,color:'#85929E' };
  const style6={marginLeft:10};
  const style1={marginTop:50,marginLeft:10};

    return (
      <MuiThemeProvider>
      <div id="maindiv">
      <div id="div1">
      <AppBar
        iconElementLeft={ <div id="Abh1"><h4>&emsp;&emsp;&emsp;&emsp;<img src="Twitterbird.jpg" id="icon1"/>&emsp;
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
<h3>aadhaar</h3>
<div id="Ab2">
<AppBar
          iconElementLeft={<div id="Ab2h1"><h5>&emsp;&emsp;&emsp;&emsp;&emsp;
          <a href="www.twitter.com">Top</a>&emsp;&emsp;<a href="www.twitter.com">
        Latest</a>&emsp;&emsp;<a href="www.twitter.com">
      People</a>&emsp;&emsp;<a href="www.twitter.com">
    Photos</a>&emsp;&emsp;<a href="www.twitter.com">
  Videos</a>&emsp;&emsp;<a href="www.twitter.com">
News</a>&emsp;&emsp;<a href="www.twitter.com">
Broadcast</a></h5></div> }
iconElementRight={<IconButton><MoreVertIcon /></IconButton>} style={style4}
        />
</div>
</div>
<br/>
<div id="maindiv2">
<div id="div2">
<div id="subdiv1">
<h3>Related searches</h3><br/>
<h4 class="trendsh1">Ochki</h4>
<h4 class="trendsh1">Godrej & Boyce</h4>
<h4 class="trendsh1">Rest in Peace</h4>
<h4 class="trendsh1">Jayant savan</h4>
<h4 class="trendsh1">Dhaval</h4>
</div>
<br/>
<div id="subdiv2">
<h3>Trends for you</h3><br/>
<h4 class="trendsh1">#TheGrandTour </h4>
<h5 class="trendsh2">12000 tweets</h5>
<h4 class="trendsh1">#Thalapathy </h4>
<h5 class="trendsh2">10000 tweets</h5>
<h4 class="trendsh1">#Thala </h4>
<h5 class="trendsh2">8000 tweets</h5>
<h4 class="trendsh1">#MaxHospital </h4>
<h5 class="trendsh2">2000 tweets</h5>
<h4 class="trendsh1">#TheTour </h4>
<h5 class="trendsh2">1000 tweets</h5>
<h4 class="trendsh1">#Velaikkara </h4>
<h5 class="trendsh2">100 tweets</h5>

</div>
</div>
<div id="div3">
<div id="subdiv3">
<h4 id="sb3h1"><a href="/">Top news</a></h4>
<img src="Toi.jpg" height="350px" width="540px"/>
<br/><br/>
<h4 id="sb3h2"><a href="/">1000 emails in three hours against Aadhaar linking from new petition website - Times of India</a></h4>
<h5 id="sb3h2">NEW DELHI: On the day the government extended the deadline to link Aadhar with bank accounts,
 activists started a website on Wednesday called speakforme.</h5>
 <div id="posticons"><Avatar
        src="Toi.jpg"
        size={40}
        style={style1}/><h5>Dec13,2017</h5>
</div>
</div>
</div>
<div id="div4">
<div id="subdiv4">
<h5 id="copyrightsh1">© 2017 TwitterAboutHelp CenterTerms<br/><br/>
Privacy policyCookiesAds infoBrandBlog<br/><br/>
StatusAppsJobsMarketingBusinesses<br/><br/>
Developers
</h5>
</div>
</div>
</div>
      </div>
            </MuiThemeProvider>
        );
      }
    }

    export default App;
