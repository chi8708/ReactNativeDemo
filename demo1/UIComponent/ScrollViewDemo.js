import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
          <Image source={require('./android/app/src/main/res/mipmap-hdpi/ic_launcher.png')} />
        </ScrollView>
    );
  }
}
