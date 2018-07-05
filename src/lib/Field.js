'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {HelpText} from './HelpText';
let { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity} = require('react-native');

export class Field extends React.Component{
  render(){
    let fieldHelpText =
      this.props.helpTextComponent
      || ((this.props.helpText)
          ? <HelpText text={this.props.helpText} />
          : null);

    if(this.props.onPress){
      return <TouchableOpacity style={{
      }} onPress={this.props.onPress}>
        <View>
          {this.props.children}
          {fieldHelpText}
        </View>
      </TouchableOpacity>
    }
    return <View>
      {this.props.children}
      {fieldHelpText}
    </View>;


  }
}
Field.propTypes = {
  helpTextComponent: PropTypes.element,
  helpText: PropTypes.string
}


let formStyles = StyleSheet.create({

  helpTextContainer:{
    marginTop:9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,

  },
  helpText:{
    color: '#7a7a7a'
  }
});
