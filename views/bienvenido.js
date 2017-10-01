/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';

import Slider from '../components/slider'

const slides = [
  { title: 'Bienvenido a mbk bolerplate', color: '#03A9F4' },
  { title: 'Esto es solo una prueba', color: '#009688' },
  { title: 'Comenzar...', color: '#03A9F4' },
]

export default class Bienvenido extends Component {
  onSlideComplete = () =>  this.props.navigation.navigate('login') 

  render() {
    return (
      <View style={styles.container}>
        <Slider data={slides} onComplete={this.onSlideComplete}></Slider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
