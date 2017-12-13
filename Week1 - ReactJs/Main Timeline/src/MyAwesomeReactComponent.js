import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class MyAwesomeReactComponent extends Component {

constructor(props) {
super(props)
this.state={}
}

  render() {
    return  (
      <div classname="App">
       <RaisedButton label="Its the button" />
      </div>
            );
           }
}
