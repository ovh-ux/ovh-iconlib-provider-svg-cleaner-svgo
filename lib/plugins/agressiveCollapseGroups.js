'use strict';

exports.type = 'perItemReverse';
exports.active = true;
exports.description = 'Collapse all groups';
exports.params = {};

/**
 * Collapse all groups.
 *
 * @example
 * <g>
 *     <g>
 *         <g>
 *             <g>
*                  <path d="..."/>
 *                 <g>
 *                     <path d="..."/>
 *                     <path d="..."/>
 *                     <path d="..."/>
 *                 </g>
 *             </g>
 *         </g>
 *     </g>
 * </g>
 *
 * <path d="..."/>
 * <path d="..."/>
 * <path d="..."/>
 * <path d="..."/>
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 */
exports.fn = function(item) {
    if (item.isElem() && !item.isEmpty()) {
        item.content.forEach((el, i) => {
            //if item is a group element
            if (el.isElem('g') && !el.isEmpty()) {
                // replace it by its content
                item.spliceContent(i, 1, el.content);
            }
        });
    }
};
