'use strict';

function Thermostat(){
  this.MINIMUM_TEMP = 10;
  this._temperature = 20;
  this.DEFAULT_TEMP = 20;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.isPowerSavingMode=true;
};

Thermostat.prototype.temperature = function(){
  return this._temperature;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingMode) {
    return this.MAX_LIMIT_PSM_ON;
  }
  return this.MAX_LIMIT_PSM_OFF;
};

Thermostat.prototype.up = function(){
  if (this._temperature === this.isMaximumTemperature()) {
    throw new Error('Maximum _temperature reached');
  }
  this._temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this._temperature <= this.MINIMUM_TEMP) {
    throw new Error('Minimum temperature is 10 degrees')
  }
  this._temperature -= 1;
};

Thermostat.prototype.savingPowerOn = function(){
  this.isPowerSavingMode=true;
};

Thermostat.prototype.savingPowerOff = function(){
  this.isPowerSavingMode=false;
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.displayUsage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  }
  else if (this._temperature > this.MAX_LIMIT_PSM_ON) {
    return "high-usage";
  }
  else {
    return "medium-usage";
  }
};

module.exports = Thermostat;















//
