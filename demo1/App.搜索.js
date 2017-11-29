import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      txtKeyWord: ''
    }
  }
  search() {
    alert(this.state.txtKeyWord);
  }

  txtChange(v) {
    this.setState({
      txtKeyWord: v
    });
  }

  render() {
    return (
      <View style={[styles.flex, styles.container]}>
        {/* 去除InputText 下划线 underlineColorAndroid='transparent' */}
        <TextInput style={[styles.txt, styles.flex]}
          value={this.state.txtKeyWord} onChangeText={(v) => this.txtChange(v)}
          underlineColorAndroid='transparent'></TextInput>
        <TouchableOpacity onPress={() => this.search()}>
          <View style={[styles.v_btn, styles.center]}>
            <Text style={{ color: '#fff' }}>搜 索</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5
  },
  flex: {
    flex: 1
  },
  txt: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray'
  },
  v_btn: {
    height: 40,
    width: 80,
    backgroundColor: '#317EF3',
    borderRadius: 5,
    marginLeft: -5
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
// {<View style={{borderRadius}}></View>  }