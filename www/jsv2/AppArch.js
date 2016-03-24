/**
 * AppArch.js
 * @author LuoWen
 * @date 20160324
 */

var channel = require('cordova/channel');

function AppArch() {
    var me = this;
    channel.onCordovaReady.subscribe(function() {
        channel.onCordovaAppVersionReady.subscribe(function() {
            var SUFFIX_ARMV7 = 2;
            var SUFFIX_X86 = 4;
            var appVersion = require('cordova-plugin-appversion.RareloopAppVersion');
            me.isArchArmv7 = appVersion.build % 10 === SUFFIX_ARMV7;
            me.isArchX86 = appVersion.build % 10 === SUFFIX_X86;
        });
    });
}

// Export the module
module.exports = new AppArch();