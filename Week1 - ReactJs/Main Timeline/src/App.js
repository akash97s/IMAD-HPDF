import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Share from 'material-ui/svg-icons/social/share';
import Search from 'material-ui/svg-icons/action/search';
import Mail from 'material-ui/svg-icons/content/mail';
import Love from 'material-ui/svg-icons/action/favorite-border';
import Pa from 'material-ui/svg-icons/image/photo-album';
import Atp from 'material-ui/svg-icons/image/add-to-photos';
import Photo1 from 'material-ui/svg-icons/image/photo';
import Pl from 'material-ui/svg-icons/image/photo-library';
import Notifications from 'material-ui/svg-icons/social/notifications';
import Like from 'material-ui/svg-icons/action/thumb-up';
import Comment from 'material-ui/svg-icons/communication/comment';
import Home from 'material-ui/svg-icons/action/home';
import Retweet from 'material-ui/svg-icons/av/repeat';
import Moments from 'material-ui/svg-icons/image/flash-on';
import MailO from 'material-ui/svg-icons/communication/mail-outline';
import Chat from 'material-ui/svg-icons/communication/chat-bubble-outline';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
  blue300,
  indigo900,
  orange200,
  purple500,
  white,
  black,
  blue100,
  transparent
} from 'material-ui/styles/colors';


class App extends Component {

  render() {
    const style1 = { marginLeft:10};
    const style2 = { marginTop:15,marginLeft:10};
    const stylemain={ backgroundColor:white,height:45};
    const style3={ width:25,height:30};
    const style4={ width:600,height:80,backgroundColor:'#D5F5E3'};
    const style5= { marginTop:-28,marginLeft:10,border:25,borderColor:white};
    const style6={ height:320,width:500,marginLeft:70};
    const style7={ height:65,backgroundColor:'#B2DFDB'};
    const iconStyles= { height:30,width:25};
    const icon1= { height:25,width:20};

return (

<MuiThemeProvider>
 <div id="div1">
 <AppBar
   iconElementLeft={ <div id="Abheader1"><h5>&emsp;&emsp;&emsp;<a href="/"><Home color={black} style={iconStyles}/>
  Home</a>&emsp;<a href="/"><Moments style={iconStyles} color={black} hoverColor={blue300} />Moments</a>
  &emsp;&emsp;<a href="/"><Notifications style={iconStyles} color={black} hoverColor={blue300} />Notifications</a>
  &emsp;&emsp;<a href="/"><Mail style={iconStyles} color={black} hoverColor={blue300} />Messages</a></h5>
  <img src="Twitterbird.jpg" height="25px" width="30px" id="Tbird"/></div> }
  iconElementRight={ <div id="Abheader2"><input type="text" placeholder="Search Twitter" id="searchbox"/>
  <a href="adhaar.html"><button type="submit" id="b2"><img src="s2.png" height="15px" width="15px" id="sicon"/></button>
  </a>&emsp;&emsp;
   <Avatar
   src="pic1.jpg"
   size={32}
   style={style1}/>&emsp;<button type="submit" id="b1"><b>Tweet</b></button></div> }
   style={stylemain} showMenuIconButton="false" />
     <br/>
  <div id="maindiv1">
  <div id="div2">
  <div id="div2cp">
  <h5>Cover Pic</h5>
  </div>
  <Avatar
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
      size={35}
      style={style2}/>} iconElementRight={<div id="divWh"><input type="text" id="text1" placeholder=" What's happenings?"/></div>}
style={style7} showMenuIconButton="false" />
</div>
<h2 id="div4h1">Chennai Super Kings <a href="/">@CSKOFFICIAL</a></h2>
<h4 id="div4h">The kings are back</h4><p id="div4p">&emsp; #WhistlePodu #BleedYellow #RoaroftheLions #Chepauk</p><br/>
<Card style={style6}>
<center><img src="2.jpg" height="250px" width="500px"/>
<CardText>
      <b>CSK is back for IPL 2018 <br/>Retained: M S Dhoni , Suresh Raina and Ravidra Jadeja</b>
    </CardText>
</center>
</Card>
<br/>
<div id="div4icons">
<Chat style={iconStyles} color={black} hoverColor={blue300} />&emsp;100&emsp;&emsp;&emsp;
<Retweet style={iconStyles} color={black} hoverColor={blue300} />&emsp;200&emsp;&emsp;&emsp;
<Love style={iconStyles} color={black} hoverColor={blue300} />&emsp;300&emsp;&emsp;&emsp;
<MailO style={iconStyles} color={black} hoverColor={blue300} />
      </div>
      </div>
      <br/>
<div id="md2div2">
<h2>&emsp;Kolly Buzz &emsp;<a href="/">@KollyBuzzOfficial</a></h2>
<h4>&emsp;&emsp;&emsp;Storms into 250cr club</h4>
<Card style={style6}>
<center><img src="3.jpg" height="250px" width="500px"/>
<CardText>
      <b>Mersal a blockbuster of 2k18<br/> Mersal enters the elite 250cr club</b>
    </CardText>
</center>
</Card>
<br/>
<div id="div4icons1">
<Chat style={iconStyles} color={black} hoverColor={blue300} />&emsp;100&emsp;&emsp;&emsp;
<Retweet style={iconStyles} color={black} hoverColor={blue300} />&emsp;200&emsp;&emsp;&emsp;
<Love style={iconStyles} color={black} hoverColor={blue300} />&emsp;300&emsp;&emsp;&emsp;
<MailO style={iconStyles} color={black} hoverColor={blue300} />
    </div>
    </div>
    <br/>
<div id="md2div3">
<h2>&emsp;Chennaiyin Fc &emsp;<a href="/">@ChennayinFc</a></h2>
<h4>&emsp;&emsp;&emsp;Chennai face Mumbai </h4>
<Card style={style6}>
<center><img src="4.jpg" height="250px" width="500px"/>
<CardText>
      <b>Chennayin face anothr tough challenge<br/>Dont miss the epic clash tonight</b>
    </CardText>
</center>
</Card>
<br/>
<div id="div4icons2">
<Chat style={iconStyles} color={black} hoverColor={blue300} />&emsp;100&emsp;&emsp;&emsp;
<Retweet style={iconStyles} color={black} hoverColor={blue300} />&emsp;200&emsp;&emsp;&emsp;
<Love style={iconStyles} color={black} hoverColor={blue300} />&emsp;300&emsp;&emsp;&emsp;
<MailO style={iconStyles} color={black} hoverColor={blue300} />
      </div>
      </div>
      </div>
      <div id="maindiv3">
      <div id="div5">
 <h3>Who to follow</h3><a href="/">Refresh</a>&emsp;<a href="/">View all</a>
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
