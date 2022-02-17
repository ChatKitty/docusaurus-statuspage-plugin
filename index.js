module.exports = function (context, options) {
  return {
    name: 'docusaurus-statuspage-plugin',
    injectHtmlTags() {
      return {
        postBodyTags: [
          `<!-- Statuspage (script) -->
    <script src="https://${options.id}.statuspage.io/embed/script.js"></script>
    <!-- End Statuspage (script) -->`
        ],
      };
    },
  };
};
