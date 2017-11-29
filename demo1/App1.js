/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  PixelRatio,
  View
} from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={[styles.container, styles.center]}>
        <View style={styles.main}>
          <View style={[styles.main_item, styles.center]}>
            <Text style={styles.item_text}>酒店</Text>
          </View>
          <View style={[styles.main_item,
          { borderLeftWidth: 1, borderColor: '#fff', borderRightWidth: 1 }]}>
            <View style={[styles.item, styles.borderBottom, styles.center]}>
              <Text style={[styles.item_text]}>海外酒店</Text>
            </View>
            <View style={[styles.item, styles.center]}>
              <Text style={styles.item_text}>特惠酒店</Text>
            </View>
          </View>
          <View style={styles.main_item}>
            <View style={[styles.item, styles.borderBottom, styles.center]}>
              <Text style={styles.item_text}>快捷酒店</Text>
            </View>
            <View style={[styles.item, styles.center]}>
              <Text style={styles.item_text}>客栈，公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  main: {
    flex: 1,
    height: 80,
    backgroundColor: '#ff0000',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 5
  },
  main_item: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
  item_text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",

  },
  borderBottom: {
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: "#fff",

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
// {<View style={{back}}></View>  }