/* @flow */

import React, { Component } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import { Button } from 'native-base'
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slider extends Component {

  renderSlides(){
    return this.props.data.map((slide, i) => {
      return(
        <View key={i} style={[ styles.slideStyle, { backgroundColor: slide.color } ]}>
          <Text style={styles.slideText}>{slide.title}</Text>
          {this.renderLastSlide(i)}
        </View>
      )
    })
  }

  renderLastSlide(i){
    if(i === this.props.data.length - 1){
      return(
        <Button dark block onPress={this.props.onComplete}><Text style={{ color: 'white' }}>Iniciar sesión</Text></Button>
      )
    }
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle:{
    backgroundColor: '#0288D1',
  }
}
