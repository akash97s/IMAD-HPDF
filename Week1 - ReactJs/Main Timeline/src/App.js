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

import {
  blue300,
  indigo900,
  orange200,
  purple500,
  white,
  black,
  blue100
} from 'material-ui/styles/colors';


class App extends Component {

  render() {
    const style1 = {marginLeft:10};
    const style2 = {marginTop:10,marginLeft:10};
    const stylemain={ backgroundColor:white,
      height:75
    };
    const style3={ marginTop:30,width:35,height:30
    };
    const style4={ width:600,height:80,backgroundColor:'#D5F5E3'
    };
  const style5= {marginTop:-28,marginLeft:10,border:25,borderColor:white};

    return (
      <MuiThemeProvider>
      <div id="div1">

      <AppBar
  iconElementLeft={ <div id="Abheader1"><h3>&emsp;&emsp;<ActionHome color={black}  style={style3} />&emsp;
  <a href="www.twitter.com">Home</a><Badge
    badgeContent={10}
    primary={true}
    badgeStyle={{top:25, right:25}}
    ><IconButton tooltip="Notifications"><NotificationsIcon/></IconButton></Badge><a href="www.twitter.com">
Notifications</a>&emsp;<span class="glyphicon glyphicon-envelope"></span>&emsp;<a href="www.twitter.com">
  Messages</a></h3></div>}
   iconElementRight={ <div id="Abheader2"><input type="text" placeholder="Search Twitter" id="searchbox"/>
<a href="Adhaar.js"><button type="submit" id="b2"><span class="glyphicon glyphicon-search" id="searchicon"></span></button></a>&emsp;&emsp;
    <Avatar
          src="pic1.jpg"
          size={40}
          style={style1}/> &emsp;<button id="b1"><b>Tweet</b></button></div>}
   style={stylemain} showMenuIconButton="false"  />
     <br/>
     <div id="maindiv1">
  <div id="div2">
  <div id="div2cp">
  <h5>Cover Pic</h5>
  </div><Avatar
          src="pic1.jpg"
          size={50}
          style={style5}/>
        <center><h3>&emsp;&emsp;Akash Selvakumar</h3><h4 id="profh1">@Akash__Selva</h4></center><br/>
        <h5 id="profh2">&emsp;&emsp;&emsp;Tweets&emsp;&emsp;Following&emsp;&emsp;Followers</h5>
        <h5 id="profh3">&emsp;&emsp;&emsp;&emsp;0&emsp;&emsp;&emsp;&emsp;&emsp;15&emsp;&emsp;&emsp;&emsp;&emsp;10</h5>
      </div>
      <br/>
      <div id="div3">
<h2>Trends for you</h2>
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
<div id="maindiv2">
      <div id="div4">
<div id="subdiv4">
<AppBar iconElementLeft={<Avatar
      src="pic1.jpg"
      size={40}
      style={style2}/>} iconElementRight={<div id="divWh"><input type="text" id="text1" placeholder=" What's happenings?"/></div>} style={style4}
showMenuIconButton="false" />
</div>
<h2 id="div4h1">Chennai Super Kings <a href="/">@CSKOFFICIAL</a></h2>
<h4 id="div4h">VB picks his all time Csk XI Whats your choice?</h4><p id="div4p">&emsp;#WhistlePodu</p><br/>
<img src="csk.jpg" height="350px" width="595px"/>
<br/>
<div id="div4icons">
<a href="/"><img src="like1.png" height="30px" width="35px"/><b>Like</b></a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<a href="/"><img src="comment.jpg" height="30px" width="25px"/><b>Comment</b></a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<a href="/"><img src="retweet.jpg" height="30px" width="25px"/><b>Share</b></a>
</div>
      </div>

      </div>
      <div id="maindiv3">
      <div id="div5">
 <h3>Who to follow</h3><a src="/">Refresh</a>&emsp;<a src="/">View all</a>
 <h4>Suriya Sivakumar @SuriyaOffi</h4>
 <button class="suggestionsb1"><b>Follow</b></button>
<hr/>
 <h4>Vijay @ThalapathyaOffi</h4>
<button class="suggestionsb1"><b>Follow</b></button>
<hr/>
 <h4>Ajith Kumar @ThalaaOffi</h4>
 <button class="suggestionsb1"><b>Follow</b></button>
      </div>
      <br/>
      <div id="div6">
<h5 id="copyrightsh1">© 2017 TwitterAboutHelp CenterTerms<br/><br/>
Privacy policyCookiesAds infoBrandBlog<br/><br/>
StatusAppsJobsMarketingBusinesses<br/><br/>
Developers
</h5>
      </div>
      </div>
      </div>
        </MuiThemeProvider>
    );
  }
}
export default App;
