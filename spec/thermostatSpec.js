'use strict';

describe('Thermostat', function(){
  var Thermostat = require("../app/public/js/thermostat");
  
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('raises temperature when up button is clicked', function(){
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('decreases temperature when down button is clicked', function(){
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('cannot go lower than 10 degrees', function(){
    for(var i = 0; i < 10; i++){
      thermostat.down();
    };
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature is 10 degrees');
  });

  it('has max temp 25 if power saving mode on', function(){
    thermostat.savingPowerOn();
    expect(thermostat.isMaximumTemperature()).toEqual(25);
  });

  it('has max temp 32 if power saving mode off', function(){
    thermostat.savingPowerOff();
    expect(thermostat.isMaximumTemperature()).toEqual(32);
  });

  it('defaults to power saving mode on', function(){
    expect(thermostat.isMaximumTemperature()).toEqual(25);
  });

  it('resets temperature to 20', function(){
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  it("display changes to low-usage when below 18 degrees", function() {
    thermostat._temperature = 17;
    expect(thermostat.displayUsage()).toBe("low-usage")
  });

  it("display changes to medium-usage when between 18 and 25 degrees", function() {
    thermostat._temperature = 20;
    expect(thermostat.displayUsage()).toBe("medium-usage")
  });

  it("display changes to high-usage when above 25 degrees", function() {
    thermostat._temperature = 26;
    expect(thermostat.displayUsage()).toBe("high-usage")
  });
});
