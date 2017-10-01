/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';

// import { Container, Content, Item, Form, Input, Label, Button, Thumbnail } from 'native-base'

export default class Login extends Component {
  handleNavigation = (e) => {
    if(e.url.includes('index.html')){
      this.props.navigation.navigate('dashboard')
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://quintear.mobkii.net/boilerplate/login.html' }}
        onNavigationStateChange={this.handleNavigation}
        style={{ marginTop: 20 }}></WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mt: { marginTop: 10 },
  cw: { color: 'white' }
});
