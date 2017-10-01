import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

import Bienvenido from './views/bienvenido'
import Registro from './views/registro'
import Recuperar from './views/recuperar'
import Mapa from './views/mapa'
import Dashboard from './views/dashboard'
import Chat from './views/chat'
import Login from './views/login'
import MapWeb from './views/mapweb'

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      bienvenido: { screen: Bienvenido },
      login: { screen: Login },
      registro: { screen: Registro },
      recuperar: { screen: Recuperar },
      main: {
        screen: TabNavigator({
          dashboard: { screen: Dashboard },
          chat: { screen: Chat },
          mapa: { screen: Mapa },
          mapweb: { screen: MapWeb }
        },{
          tabBarPosition: 'bottom'
        })
      }
    },{
      lazy: true,
      headerMode: 'none'
    })
    return (
      <View style={styles.container}>
        <MainNavigator></MainNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
});
