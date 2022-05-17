/**
* demoCustomerUserEvent2.ts
* 
* @NScriptName Demo - Customer - User Event
* @NScriptType UserEventScript
* @NApiVersion 2.x
*/

import { EntryPoints } from 'N/types';
import log = require('N/log');
import https = require('N/https');

export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext) {
    var headerObj = {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'host': 'e86c-66-111-121-28.ngrok.io'
    };
    var response = https.post({
        url: 'https://e86c-66-111-121-28.ngrok.io/hookmon/netsuite',
        body: JSON.stringify("punk"),
        headers: headerObj
    });
    log.debug('After Submit', `${context.type} record ${context.newRecord.id}.`);
}
