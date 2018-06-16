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
import Like from 'material-ui/svg-icons/action/thumb-up';
import Comment from 'material-ui/svg-icons/communication/comment';
import Home from 'material-ui/svg-icons/action/home';
import Retweet from 'material-ui/svg-icons/av/repeat';
import Moments from 'material-ui/svg-icons/image/flash-on';
import MailO from 'material-ui/svg-icons/communication/mail-outline';
import Chat from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Mail from 'material-ui/svg-icons/content/mail';
import Love from 'material-ui/svg-icons/action/favorite-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {
  blue300,
  indigo900,
  orange200,
  purple500,
  white,
  black,
} from 'material-ui/styles/colors';

class App extends Component {

  render()
  {
  const stylemain={ backgroundColor:white,height:45,top:0};
  const style2={ marginRight:20,marginTop:-12};
  const style3={ marginRight:20,marginTop:-12};
  const style4={ backgroundColor:white,height:45,color:'#85929E'};
  const style6={marginLeft:10};
  const style1={marginTop:50,marginLeft:10};
  const style7={ height:410,width:500,marginLeft:10};
  const iconStyles= { height:30,width:25};
  const style8= { marginLeft:2};
  const pt= {backgroundColor:'#00aced' };
  const style9= { color:blue300};

    return (
      <MuiThemeProvider>
      <div id="maindiv">
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
         style={stylemain} showMenuIconButton="true"  />
<div id="div1"><h3 id="pt">adhaar</h3></div>
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
iconElementRight={<div id="Ab2h2"><IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} style={style2} >
    <MenuItem value='1' primaryText="Search settings" />
    <MenuItem value='2' primaryText="Save this seacrh" />
    <MenuItem value='3' primaryText="Embed this search" />
  </IconMenu></div>} style={style4}/>
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
<h4 class="trendsh1">#Velaikkaran </h4>
<h5 class="trendsh2">100 tweets</h5>

</div>
</div>
<div id="div3">
<div id="subdiv3">
<h4 id="sb3h1"><a href="Paypal.html">Top news</a></h4>
<img src="Toi.jpg" height="350px" width="530px"/>
<br/><br/>
<h4 id="sb3h2"><a href="/">1000 emails in three hours against Aadhaar linking from new petition website - Times of India</a></h4>
<h5 id="sb3h2">NEW DELHI: On the day the government extended the deadline to link Aadhar with bank accounts,
 activists started a website on Wednesday called speakforme.</h5>
 <div id="posticons"><Avatar
        src="Toi.jpg"
        size={50}
        style={style1}/><h5>Dec13,2017</h5>
</div>
</div>
<hr/>

<div id="post2">
<h3><Avatar
   src="Aswinpro.jpg"
   size={50}
   style={style8}/>&emsp;Aswin Chandran  &emsp;<a href="/">@AswinOfficial</a></h3>
<h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Why ADHAAR not linked to Voter ID Card.</h5>
<Card style={style7}>
<center><img src="Adhaar2.jpg" height="410px" width="500px"/></center>
</Card>
<div id="div3icons1">
<IconButton tooltip="Reply" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Chat style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>100 &emsp;
<IconButton tooltip="Retweet" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Retweet style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>200&emsp;
<IconButton tooltip="Like" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Love style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>300&emsp;
<IconButton tooltip="Direct Message" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<MailO style={iconStyles} color={black} hoverColor={blue300} />
    </IconButton>
    </div>
</div>
<hr/>
<div id="post3">
<h3><Avatar
   src="Abdunpro.jpg"
   size={50}
   style={style8}/>&emsp; Abdun Nihaal &emsp;<a href="/">@AbdunOfficial</a></h3>
<h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Link ADHAAR before Modiji visits you </h5>
<Card style={style7}>
<center><img src="Adhaar3.jpg" height="410px" width="500px"/></center>
</Card>
<div id="div3icons2">
<IconButton tooltip="Reply" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Chat style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>100 &emsp;
<IconButton tooltip="Retweet" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Retweet style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>200&emsp;
<IconButton tooltip="Like" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<Love style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>300&emsp;
<IconButton tooltip="Direct Message" touch={true} tooltipPosition="top-center" hoveredStyle={style9} >
<MailO style={iconStyles} color={black} hoverColor={blue300} />
</IconButton>
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
