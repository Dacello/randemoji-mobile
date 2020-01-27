/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {paleGray} from './colors'
import {connectChannel, leaveChannel} from './channels'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: paleGray,
    height: '100%',
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  emoji: {
    fontSize: 70,
    textAlign: 'center',
    paddingVertical: 200,
  }
});


export default class App extends React.Component {
  state = {
    currentEmoji: null
  }

  async componentDidMount() {
    this.channel = await connectChannel('emojis')
    this.channel.on('new_emoji', this.setNewEmoji)
  }

  componentWillUnmount() {
    leaveChannel(this.channel)
  }

  setNewEmoji = ({value}) => this.setState({currentEmoji: value})

  get headerText() {
    const {currentEmoji} = this.state
    return currentEmoji ?  "A Wild Emoji Appears!" : "No emoji set ..." 
  }
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{this.headerText}</Text>
            </View>
            <Text style={styles.emoji}>{this.state.currentEmoji}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}