require(['N/https', 'N/runtime', 'N/log'], function (https, runtime, log) {
    var headerObj = {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'host': 'e86c-66-111-121-28.ngrok.io'
    };
    var response = https.post({
        url: 'https://e86c-66-111-121-28.ngrok.io/hookmon/netsuite',
        body: JSON.stringify("bitch"),
        headers: headerObj
    });
    log.debug(response)
});
