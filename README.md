# Icon Library - SVG cleaner - SVGO

[![Build Status](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-svg-cleaner-svgo.svg?branch=master)](https://travis-ci.org/ovh-ux/ovh-iconlib-provider-svg-cleaner-svgo)
[![Coverage Status](https://coveralls.io/repos/github/ovh-ux/ovh-iconlib-provider-svg-cleaner-svgo/badge.svg?branch=master)](https://coveralls.io/github/ovh-ux/ovh-iconlib-provider-svg-cleaner-svgo?branch=master)

[SVGO](https://github.com/svg/svgo) implementation of SVG cleaner base provider

## Installation

```bash
npm install --save "ovh-iconlib-provider-svg-cleaner" "ovh-iconlib-provider-svg-cleaner-svgo"
```

## Configuration

```yaml
#config.yml
---
 svg-cleaner:
   default: svgo
   providers:
     -
       name: svgo
       type: ovh-iconlib-provider-svg-cleaner-svgo
       plugins:
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/agressiveCollapseGroups
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/removeClipPaths
         - ovh-iconlib-provider-svg-cleaner-svgo/lib/plugins/cleanStyles
```

## Usage

```js
// default instance loaded according to the configuration
const svg = require('ovh-iconlib-provider-svg-cleaner').getInstance();

const dirty = '<svg xmlns="http://www.w3.org/2000/svg">...</svg>';
const pristine = '<svg xmlns="http://www.w3.org/2000/svg">...</svg>';

svg.clean(dirty)
    .then(result => {
        if (result !== pristine) {
            throw new Error('something went wrong');
        }

        ...
    });
```
