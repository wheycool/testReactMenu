'use strict';

var React = require('react-native');

var Menu = require('../../pages/MenuContent');
var SideMenu = require('react-native-side-menu');
// var Router = require('react-native-router');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Component
} = React;

class Button extends Component {
  handlePress(e) {
    this.props.menuActions.toggle();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}>
        <Text style={this.props.style}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

class MainMenu2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchToClose: false
    };
  }

  handleOpenWithTouchToClose() {
    this.setState({
      touchToClose: false
    });
  }

  handleChange(isOpen) {
    if (!isOpen) {
      this.setState({
        touchToClose: false
      });
    }
  }

  render() {
    return (
      <SideMenu
        menu={<Menu />}
        touchToClose={this.state.touchToClose}
        onChange={this.handleChange.bind(this)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            LOGO SHOULD GO HERE
          </Text>
          <Text style={styles.menuItem}>
            MENU ITEM 1
          </Text>
          <Text style={styles.separator}>
            _____
          </Text>
          <Text style={styles.menuItem}>
            MENU ITEM 2
          </Text>
          <Text style={styles.separator}>
            _____
          </Text>
          <Text style={styles.menuItem}>
            MENU ITEM 3
          </Text>
          <Text style={styles.separator}>
            _____
          </Text>
          <Text style={styles.menuItem}>
            MENU ITEM 4
          </Text>
          <Text style={styles.separator}>
            _____
          </Text>
          <Text style={styles.menuItem}>
            MENU ITEM 5
          </Text>
        </View>
        <Button style={styles.toggleButton}>
          LOGO SHOULD GO HERE
        </Button>
      </SideMenu>
    );
  }
}

var styles = StyleSheet.create({
  toggleButton: {
    textAlign: 'center',
    bottom: 0,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    borderRadius: 20,
    marginLeft: -650,
    marginTop: 30,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    marginBottom: 30
  },
  menuItem: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
    fontSize: 20,
    marginBottom: 15
  },
  separator: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginLeft: -750,
    marginTop: 0,
    marginBottom: 30,
  },
});

module.exports = MainMenu2;