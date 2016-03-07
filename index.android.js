var english_german = require('./english_german.json');

var React = require('react-native');

var Dictionary = React.createClass({
  getInitialState: function() {
    return {
        input: '',
        output: ''
    };
  },
  showMeaning: function() {
    // Use the ternary operator to check if the word 
    // exists in the dictionary.
    var meaning = this.state.input in english_german ? 
                    english_german[this.state.input] : 
                    "Not Found";
 
    // Update the state
    this.setState({
         output: meaning 
    });
  },
  render: function() {
    var layout =
        <React.View style = { styles.parent } >
 
            <React.Text>
                Type something in English:
            </React.Text>
 
            <React.TextInput
              onChangeText={(e) => this.setState({input: e})}
              text = { this.state.input }
              onSubmitEditing = { this.showMeaning } />
 
            <React.Text style = { styles.germanLabel } >
                Its German equivalent is:
            </React.Text>
 
            <React.Text style = { styles.germanWord } >
              { this.state.output }                
            </React.Text>
           
        </React.View>
    ;
    return layout;
  }
});

var styles = React.StyleSheet.create({
    // For the container View
    parent: {
        padding: 16
    },
 
    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});


React.AppRegistry.registerComponent('dictionary_react_native', () => Dictionary);
