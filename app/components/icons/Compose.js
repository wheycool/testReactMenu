// 'use strict';

// var React = require('react-native');

// var {
//   StyleSheet,
//   TouchableHighlight,
//   Image
// } = React;

var Icon = require('FAKIconImage')

// var styles = StyleSheet.create({
//   icon: {
//     width: 21,
//     height: 21,
//     marginTop: 4,
//     marginRight: 15
//   }
// });

// var ComposeIcon = React.createClass({
//   render() {
//     return (
//       <TouchableHighlight underlayColor="transparent">

//     )
//   }
// });

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  }
});

var ComposeIcon = React.createClass({

  goToMessenger: function() {
    this.props.goToMessenger();
  },

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToMessenger}>
        <Icon
           name='fontawesome|comments'
            size={21}
            color='#ffffff'
            style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = ComposeIcon;


