import React, { Component } from 'react';
import { StyleSheet, AppRegistry, FlatList, Image, Text, View, TouchableOpacity, Button } from 'react-native'

import { TabNavigator,StackNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy" />
      </View>
    );
   }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

//聊天窗口
class ChatScreen extends React.Component{
  // static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.params.user}`,
  //   headerRight: <Button title="Info" onPress={()=>alert('lucy info...'})} />
  // });
   //设置标题头
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    const { user } = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
        />
      ),
    };
  };

  render(){
    var {params}=this.props.navigation.state;
    return(
      <View>
        <Text>I My {params.user}</Text>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: {
    screen: AllContactsScreen,
    navigationOptions: {
      title: 'My all',
    },
  },
},
//StackNavigatorConfig 
{
  //tabbar位置
  tabBarPosition:"top",
  tabBarOptions:{
    style:{
      backgroundColor:'#ff0000',
      height:30,
      paddingTop:0,
    },
    labelStyle:{
      margin:0,
    },
    tabStyle: {
      width: 100,    
    },
  }
});

const SimpleApp = StackNavigator({
  //RouteConfigs
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
      headerTitleStyle:{
        color:'#ff0000',
      },
      headerStyle:{
        height:30,
      },
    },
  },
  Chat: { 
    screen: ChatScreen,
   },
},
//StackNavigatorConfig 
{
  //标题模式
  headerMode:'float',
  cardStyle:{
    backgroundColor:'#888'
  }
})

export default SimpleApp