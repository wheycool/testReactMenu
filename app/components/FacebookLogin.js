'use strict'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight
} = React;

var Main = require('./Main')

var Router = require('react-native-router');
var SideMenu = require('react-native-side-menu');
var Icon = require('FAKIconImage')
var SearchAndCompose = require('./icons/SearchAndCompose');
var AddPeople = require('./icons/AddPeople');
var MainMenu = require('./icons/MainMenu');

var FacebookLogin = React.createClass({
  getInitialState() {
    return {
      result: 'Assign Your Life To Us!'
    }
  },

  componentDidMount() {
    var self = this;
  },

  // login() {
  //   FacebookLoginManager.newSession((error, info) => {
  //     if (error) {
  //       this.setState({result: error});
  //     } else {
  //       this.props.navigator.push({
  //        titleComponent: MainMenu,
  //         component: Main,
  //         rightCorner: SearchAndCompose,
  //         leftCorner: AddPeople,
  //         // backButtonTitle: 'Custom Back'
  //       });
  //       this.setState({result: info})
  //     }
  //   });
  // },

  nonLogin() {
    this.props.toRoute({
      component: Main,
      headerStyle: {backgroundColor: 'black'},
     titleComponent: MainMenu,
      rightCorner: SearchAndCompose,
      leftCorner: AddPeople,
    })
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
            <TouchableHighlight onPress={this.nonLogin}>              
              <Icon
                name='fontawesome|facebook-square'
                size={40}
                style={styles.facebook} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.nonLogin}>  
              <Text style={styles.welcome}>
                Facebook Login
              </Text>
            </TouchableHighlight>
              <Text style={styles.instructions}>
                {this.state.result}
              </Text>
        </View>
      </View>
      
)}
  })


var styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    opacity: 0.8,
    width: 500,    
  },
  subtextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    opacity: 0.8,
    width: 500,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    color: '#3B5998',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  facebook: {
    width: 40,
    height: 40,
    margin: 4
  },
});

AppRegistry.registerComponent('FacebookLogin', () => FacebookLogin);

module.exports = FacebookLogin