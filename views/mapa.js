/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { MapView } from 'expo'

export default class Mapa extends Component {
state = {
  region: {
    latitude: 37,
    longitude: -122,
    latitudeDelta: 0.04,
    longitudeDelta: 0.09
  }
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView region={this.state.region}
          style={{ flex: 1 }}></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
