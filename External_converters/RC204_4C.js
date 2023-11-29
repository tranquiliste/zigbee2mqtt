const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;


const definition = {
    zigbeeModel: ['RC204_4C'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'RC204', // Vendor model number, look on the device for a model number
    vendor: 'OWON', // Vendor of the device (only used for documentation and startup logging)
    description: 'OWON remote control RC204', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    fromZigbee: [fz.battery,fz.command_toggle,fz.command_on_state,fz.command_off_state], // We will add this later
    toZigbee: [], // Should be empty, unless device can be controlled (e.g. lights, switches).
    exposes: [e.battery(), e.action(['toggle_un','toggle_deux','toggle_trois','toggle_quatre']),e.binary('state_un', exposes.access.STATE, true, false)], // Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend
    meta: {multiEndpoint: true},
    endpoint: (device) => {
        return {'un': 1, 'deux': 2, 'trois': 3, 'quatre': 4};
    }

};

module.exports = definition;