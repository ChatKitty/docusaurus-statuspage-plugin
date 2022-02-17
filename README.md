# docusaurus-statuspage-plugin
Adds a Statuspage embedded script html tag to your docusaurus site.

## Add Plugin
To add the plugin to your docusaurus v2 site, do this:
1. `yarn add docusaurus-statuspage-plugin` (alternatively: `npm install --save docusaurus-statuspage-plugin`)
2. Add the plugin to your `docusaurus.config.js` like this:
```js
module.exports = {
  plugins: [
    [
      require.resolve('docusaurus-statuspage-plugin'),
      {
        id: 'XXXXXXX', // Statuspage Page ID
      }
    ]
  ],
  ...
};
```
