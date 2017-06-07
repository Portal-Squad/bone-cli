'use strict';

const { clientPack, serverPack, helper } = require('webpack.default.js');

/**
 * client webpack config
 * {
 *      entry           // Object
 *      output          // Object
 *      module.rules    // Array
 *      plugins         // Array
 *  }
 * @type {Array}
 *
 * >> u can extend default webpack config here >>
 * for example, add a new rule:
 *  clientPack.module.rules.push(someNewRule);
 */

// 配置添加入口
helper.addEntry('client');

// 配置添加SSR入口
helper.addSSR('server');
clientPack.plugins.push(helper.plugins.vueSSRClient);

// 配置添加公用模块Vendor
helper.addVendor('vue', 'vue-router', 'vuex');


module.exports = {
    clientPack,
    serverPack
}
