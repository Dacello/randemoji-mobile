/* eslint-disable no-console */
import {Socket} from 'phoenix'

/**
 * Connect to a phoenix channel
 * @param {String} channelName
 * @returns {Object} channel that was joined
 **/
export async function connectChannel(channelName) {
    const socket = new Socket('http://localhost:4000/socket')
    const channel = socket.channel(channelName, {})

    socket.connect()

    channel.join()
      .receive('ok', ({messages}) => console.log(`Joined ${channelName} successfully`, messages))
      .receive('error', (resp) => console.log(`ERROR connecting to ${channelName}`, resp))
      .receive('timeout', (resp) => console.log(`TIMEOUT connecting to ${channelName}`, resp))

    return channel
  }

/**
 * Leave a phoenix channel. Stops all listening for new messages
 * @param {Object} channel that you want to stop listening to
 * @returns {void}
 **/
export async function leaveChannel(channel) {
  if (!channel) {
    return
  }

  channel.leave()
    .receive('ok', (resp) => console.log(`Left ${channel.topic} successfully`, resp))
    .receive('error', (resp) => console.log(`ERROR leaving ${channel.topic}`, resp))
    .receive('timeout', (resp) => console.log(`TIMEOUT leaving ${channel.topic}`, resp))
}
