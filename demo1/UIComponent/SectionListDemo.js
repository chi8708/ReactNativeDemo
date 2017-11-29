import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  SectionList,
} from 'react-native';



class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }

  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }

  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
  }

  componentDidMount() {
    var sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
      { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
      { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" }, { title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        data: sections
      });
    }, 5000);

  }
  appendItem() {
    var isPush=this.state.isPush;
    var isLoaded=this.state.isLoaded;
    if (isLoaded&&!isPush) {
      var data = this.state.data;
      data.push({ key: "Y", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" }, { title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] })
      this.setState({
        isLoaded: true,
        data: data,
        isPush:true,
      });
    }

  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        <SectionList
          refreshing={!this.state.isLoaded}
          onRefresh={() => { }}
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          onEndReachedThreshold={0.1}
          onEndReached={()=>setTimeout(()=>this.appendItem(),3000)}
          sections={this.state.data}
          ItemSeparatorComponent={() => <View><Text></Text></View>}
          ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
        />
      </View>
    );
  }

}

export default HomeScreen