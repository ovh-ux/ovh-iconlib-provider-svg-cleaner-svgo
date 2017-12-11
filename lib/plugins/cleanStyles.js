'use strict';

exports.type = 'perItem';
exports.active = true;
exports.description = 'clean styles';
exports.params = {};

/**
 * Remove styles
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 */
exports.fn = function(item) {
    if(item.isElem('style') && item.content[0] && item.content[0].text) {
        let style = new Style(item.content[0].text);
        item.content[0].text = style.toString();
    }
};

class Style {

    constructor(raw) {
        this.rules = {};

        if (!!raw) {
            let matches = raw.match(/([^{]+{[^}]*})/g);
            matches.forEach(match => {
                let [text, selector, style] = match.match(/([^{]+){([^}]*)}/);
                if (!!style) {
                    this.rules[selector] = style + ';' + (this.rules[selector] || '');
                }
            });
        }
    }

    toString() {
        return Object.keys(this.rules).reduce((acc, cur) => {
            let rule = this.rules[cur];

            if (rule[rule.length - 1] === ';') {
                rule = rule.substring(0, rule.length - 1);
            }

            return acc + `${cur}{${rule}}`;
        }, '');
    }
}
