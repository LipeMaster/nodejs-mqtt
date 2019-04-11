const mqtt = require('mqtt');
const mqttBroker = '192.168.2.10';
const client = mqtt.connect(mqttBroker);

client.on('connect', () => {
    client.subscribe('presence', (err) => {
        if (!err) {
            client.publish('presence', 'Hello mqtt broker')
        }
    })
});

client.on('message', (topic, message) =>{
    //message is buffer
    console.log(message.toString());
    client.end()
});