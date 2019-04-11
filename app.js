const mqtt = require('mqtt');

const optionsBroker = {
    port: 11134,
    host: 'mqtt://m16.cloudmqtt.com',
    clientId: 'nodeJS',
    username: 'wnwkuccv',
    password: 'wpKlxge1zyLK',
    encoding: 'utf8'
}
const client = mqtt.connect('mqtt://m16.cloudmqtt.com', optionsBroker);

client.on('connect', () => {
    console.log('Connected')
    client.subscribe('presence', (err) => {
        if (!err) {
            client.publish('presence', 'Hello mqtt broker')
        }
    })
});

client.on('message', (topic, message) =>{
    //message is buffer
    console.log(message.toString());
    //client.end()
});