/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';

export default class MapWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://quintear.mobkii.net/boilerplate/map.html' }}></WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
