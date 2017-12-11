# Icon Library - svgo implementation of SVG cleaner provider

## Installation

```bash
npm install --save "url of svg cleaner base provider" "url of svgo implementation of svg cleaner provider"
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
       type: iconlib-provider-svg-cleaner-svgo
       plugins:
         - iconlib-provider-svg-cleaner-svgo/lib/plugins/agressiveCollapseGroups
         - iconlib-provider-svg-cleaner-svgo/lib/plugins/removeClipPaths
         - iconlib-provider-svg-cleaner-svgo/lib/plugins/cleanStyles
```

## Usage

```js
const svg = require('ovh-iconlib-provider-svg-cleaner').getInstance(); // default instance loaded according to the configuration

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
