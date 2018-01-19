'use strict';

const util = require('util');
const path = require('path');
const type = require('@rduk/configuration/lib/sections/field/type');
const Base = require('ovh-iconlib-provider-svg-cleaner/lib/base');
const SVGO = require('svgo/lib/svgo');

/**
 * SVGO implementation of svg cleaner provider
 *
 * configuration example:
 *
 * ```yaml
 * # config.yml
 * ---
 * svg-cleaner:
 *   default: svgo
 *   providers:
 *     -
 *       name: svgo
 *       type: iconlib-provider-svg-cleaner-svgo
 *       plugins:
 *         - path/to/plugin/1
 *         - path/to/plugin/2
 * ```
 */
let Provider = function Provider(config) {
    Provider.super_.call(this, config);
};

util.inherits(Provider, Base);

Provider.prototype.initialize = function() {
    // prepare plugins if any in configuration
    var plugins = (this.config.plugins || []).map(p => {
        let plugin = {};
        plugin[path.basename(p)] = type.load(p);
        return plugin;
    });

    this.svgo = new SVGO({
        plugins: plugins
    });
};

/**
 * @param {string} svg svg content as string (utf-8)
 * @return {Promise}
 */
Provider.prototype.clean = function(svg) {
    if (!svg) {
        return Promise.resolve('');
    }

    return this.svgo.optimize(svg)
        .then(result => (result.data));
};

module.exports = Provider;
