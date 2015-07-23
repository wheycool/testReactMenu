'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var BackButton = require('./app/components/icons/BackButton');
var SearchAndCompose = require('./app/components/icons/SearchAndCompose');
var AddPeople = require('./app/components/icons/AddPeople')

// var Main = require('./app/components/Main');
var FacebookLogin = require('./app/components/FacebookLogin')

var {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBarIOS,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
    marginTop: -15,
  }
});



var firstRoute = {
  name: 'ICON_HERE',
  component: FacebookLogin,
  
};

var HLTHY = React.createClass({
  render() {
        StatusBarIOS.setHidden(true)

    return (
      <Router 
        firstRoute={firstRoute} 
        headerStyle={styles.header} />
    )
  }
});



AppRegistry.registerComponent('HLTHY', () => HLTHY);
