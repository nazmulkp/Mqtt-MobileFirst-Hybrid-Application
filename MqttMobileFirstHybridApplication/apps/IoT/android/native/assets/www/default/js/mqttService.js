
/* JavaScript content from js/mqttService.js in folder common */
// host = '172.16.153.122';	// hostname or IP address
var host = '194.165.40.166';	// hostname or IP address
var port = 8080;
var topic = 'Sensor';		// topic to subscribe to
var useTLS = false;
var username = null;
var password = null;
// username = "jjolie";
// password = "aa";
var cleansession = true;   

var mqtt;
    var reconnectTimeout = 2000;

    function MQTTconnect() {
        mqtt = new Paho.MQTT.Client(
                        host,
                        port,
                        "web_" + parseInt(Math.random() * 100,
                        10));
        var options = {
            timeout: 3,
            useSSL: useTLS,
            cleanSession: cleansession,
            onSuccess: onConnect,
            onFailure: function (message) {
                console.log("Connection failed: " + message.errorMessage + "Retrying")
                setTimeout(MQTTconnect, reconnectTimeout);
            }
    };

        mqtt.onConnectionLost = onConnectionLost;
        mqtt.onMessageArrived = onMessageArrived;

        if (username != null) {
            options.userName = username;
            options.password = password;
        }
        console.log("Host="+ host + ", port=" + port + " TLS = " + useTLS + " username=" + username + " password=" + password);
        mqtt.connect(options);
    }

    function onConnect() {
 
        console.log('Connected to ' + host + ':' + port)
        // Connection succeeded; subscribe to our topic
        mqtt.subscribe(topic, {qos: 0});
       
    }

    function onConnectionLost(response) {
        setTimeout(MQTTconnect, reconnectTimeout);
   
        console.log("connection lost: " + responseObject.errorMessage + ". Reconnecting")

    };

    function onMessageArrived(message) {

        var topic = message.destinationName;
        var payload = message.payloadString;
        
        console.log( topic + ' = ' + payload)
        alert(topic + ' = ' + payload);
    };
