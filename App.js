/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import {connectChannel, leaveChannel} from './channels'
import styles from './styles'

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

  sendRandomEmoji = () => this.channel.push('random_emoji')

  get headerText() {
    return this.state.currentEmoji ? "A Wild Emoji Appears!" : "No emoji set ..." 
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.headerText}</Text>
        </View>
        <Text style={styles.emoji}>{this.state.currentEmoji}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.sendRandomEmoji}
        >
          <Text style={styles.buttonText}> Send Randmoji</Text>
        </TouchableHighlight>
      </View>
    );
  }
}