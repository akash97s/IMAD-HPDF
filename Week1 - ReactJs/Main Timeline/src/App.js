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
import IconButton from 'material-ui/IconButton';
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
import {GridList, GridTile} from 'material-ui/GridList';
import Chip from 'material-ui/Chip';

class App extends Component {

  render() {

    function handleRequestDelete() {
      alert('You clicked the delete button.');
    }

    function handleClick() {
      alert('You clicked the Chip.');
    }

    const style1 = { marginLeft:10,marginTop:-2};
    const style2 = { marginTop:12,marginLeft:10};
    const stylemain={ backgroundColor:white,height:45};
    const style3={ width:25,height:30};
    const style4={ width:600,height:80,backgroundColor:'#D5F5E3'};
    const style5= { marginTop:-28,marginLeft:10,border:25,borderColor:white};
    const style6={ height:320,width:500,marginLeft:70};
    const style7={ height:72,backgroundColor:'#E8F5FD'};
    const iconStyles= { height:30,width:25,marginTop:5};
    const icon1= { height:25,width:20};
    const style8= {marginLeft:5};
    const style9= {marginTop:-15};

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 550,
        height: 375,
        overflowY: 'auto',
      },
    };
    const tilesData = [
  {
    img: 'c1.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured : true,
  },
  {
    img: 'c2.jpeg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'c3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'c4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured : true,
  }
];
return (

<MuiThemeProvider>

 <div id="div1">

 <AppBar
   iconElementLeft={ <div id="Abheader1"><h5>&emsp;&emsp;&emsp;<a href="/"><Home color={black} hoverColor={blue300} style={iconStyles}/>
  Home</a>&emsp;<a href="/"><Moments style={iconStyles} color={black} hoverColor={blue300} />Moments</a>
  &emsp;&emsp;<a href="/"><Notifications style={iconStyles} color={black} hoverColor={blue300} />Notifications</a>
  &emsp;&emsp;<a href="/"><Mail style={iconStyles} color={black} hoverColor={blue300} />Messages</a></h5>
  <img src="Twitterbird.jpg" height="25px" width="30px" id="Tbird"/></div> }
  iconElementRight={ <div id="Abheader2"><input type="text" placeholder="   Search Twitter" id="searchbox"/>
  <a href='adhaar.html'>
  </a> &emsp;&emsp;
   <Avatar
   src="pic1.jpg"
   size={32}
   style={style1}/>&emsp;<button type="submit" id="b1"><b>Tweet</b></button></div> }
   style={stylemain} showMenuIconButton="false" />

     <br/>
  <div id="maindiv1">
  <div id="div2">
  <div id="div2cp">
  <img src="cover.jpg" height="100%" width="100%"/>
  </div>
  <Avatar
  src="pic1.jpg"
  size={50}
  style={style5}/>
        <center><h3>&emsp;&emsp;Akash Selvakumar</h3><h4 id="profh1">@Akash__Selva</h4></center>
        <h5 id="profh2">&emsp;&emsp;&emsp;Tweets&emsp;&emsp;Following&emsp;&emsp;Followers</h5>
        <h5 id="profh3">&emsp;&emsp;0&emsp;&emsp;&emsp;&emsp;&emsp;15&emsp;&emsp;&emsp;&emsp;&emsp;10</h5>
      </div>
      <br/>
      <div id="div3">
      <h3>Trends for you</h3>
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
      style={style2}/>} iconElementRight={<div id="divWh"><input type="text" id="text1" placeholder=" What's happenings?"/></div>}
style={style7} showMenuIconButton="false" />
</div>
<div id="m2div1">
<h3 id="div4h1"><Avatar
   src="p2.jpg"
   size={50}
   style={style8}/>&emsp;Chenn Super Kings &emsp;<a href="/" class="d4s">@CSKOFFICIAL</a></h3>
<h4 id="div4h">&emsp;&emsp;&emsp;CSK is back for IPL 2018<br/>
&emsp;&emsp;&emsp;Retained: M S Dhoni , Suresh Raina and Ravidra Jadeja</h4>
<p id="div4p">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#WhistlePodu #BleedYellow #RoaroftheLions #Chepauk</p>
<Card style={style6}>
<center><img src="2.jpg" height="319px" width="500px"/>
</center>
</Card>
<br/>
<div class="div4icons">
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
<div id="md2div2">
<h3><Avatar
   src="p3.jpg"
   size={50}
   style={style8}/>&emsp;Kolly Buzz &emsp;<a href="/" class="d4s">@KollyBuzzOfficial</a></h3>
<h4>&emsp;&emsp;&emsp;&emsp;&emsp;Mersal a blockbuster of 2k18<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;Mersal enters the elite 250cr club</h4>
<Card style={style6}>
<center><img src="3.jpg" height="319px" width="500px"/>
</center>
</Card>
<br/>
<div class="div4icons">
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
<div id="md2div3">
<h3><Avatar
   src="p1.jpg"
   size={50}
   style={style8}/>&emsp;Chennaiyin Fc &emsp;<a href="/" class="d4s">@ChennayinFc</a></h3>
<h4>&emsp;&emsp;&emsp;&emsp;&emsp;Chennayin face another tough challenge<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;Dont miss the epic clash tonight</h4>
<Card style={style6}>
<center><img src="4.jpg" height="319px" width="500px"/>
</center>
</Card>
<br/>
<div class="div4icons">
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
      <div id="maindiv3">
      <div id="div5">
 <h3>Who to follow</h3><a href="/" class="d5hd">Refresh</a>&emsp;<a href="/" class="d5hd">View all</a>
          <div id="d5">
        <Avatar
    src="s.jpg"
    size={50}
    style={style9}/><div id="d5h"><h5>&emsp;Suriya Sivakumar <a href="/"  class="d5a">@SuriyaOffi</a></h5>
 <button class="suggestionsb1"><b>Follow</b></button></div>
 </div>
<hr/>
<div id="d51"><Avatar
    src="v.jpg"
    size={50}
    style={style9}/><div id="d5h1"><h5>&emsp;Vijay <a href="/"  class="d5a">@ThalapathyaOffi</a></h5>
<button class="suggestionsb1"><b>Follow</b></button></div>
</div>
<hr/>
<div id="d52"><Avatar
    src="a.jpg"
    size={50}
    style={style9}/><div id="d5h2"><h5>&emsp;Ajith Kumar <a href="/" class="d5a">@ThalaaOffi</a></h5>
 <button class="suggestionsb1"><b>Follow</b></button></div>
 </div>
      </div>
      <br/>
      <div id="div6">
<h5 id="copyrightsh1">© 2017 Twitter About Help Center Terms<br/><br/>
Privacy policy Cookies Ads info Brand Blog<br/><br/>
Status Apps Jobs Marketing Businesses<br/><br/>
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
