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
  https.post({
    url: 'https://e86c-66-111-121-28.ngrok.io/hookmon/netsuite_user_event',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'host': 'e86c-66-111-121-28.ngrok.io'
    },
    body: JSON.stringify({
      "newRecord": context.newRecord,
      "oldRecord": context.oldRecord,
      "type": context.type
    })
  });
  log.debug('After Submit', `${context.type} record ${context.newRecord.id}.`);
}
