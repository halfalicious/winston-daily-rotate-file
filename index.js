'use strict';

var winston = require('@halfalicious/winston');
var DailyRotateFile = require('./daily-rotate-file');

winston.transports.DailyRotateFile = DailyRotateFile;
module.exports = DailyRotateFile;
