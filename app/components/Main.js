'use strict'

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Navigator,
  StatusBarIOS,
  TouchableHighlight,
  ListView,
  TextInput
} = React;

var Router = require('react-native-router');

var SideMenu = require('react-native-side-menu');

var MainMenu = require('./icons/MainMenu');


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    marginTop: -15,
  },
});

var Main = React.createClass({
  render() {
    return (
      <View style={styles.container}>
      <Text> CONTENT </Text>
              </View>
      )},
  });



module.exports = Main