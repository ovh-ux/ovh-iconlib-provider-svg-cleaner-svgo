'use strict';

exports.type = 'perItem';
exports.active = true;
exports.description = 'remove clipPaths';
exports.params = {};

/**
 * Remove clipPaths
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 */
exports.fn = function(item) {
    // in style element
    if(item.isElem('style') && item.content[0] && item.content[0].text) {
        // remove clip-path rule
        item.content[0].text = item.content[0].text.replace(/clip-path:[^;}]+;?/g, '');
    }

    // return false if item is a clipPath element
    return !item.isElem('clipPath');
};
