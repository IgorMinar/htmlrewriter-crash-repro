var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/.pnpm/htmlrewriter@0.0.12/node_modules/htmlrewriter/cloudflare.js
var GlobalHtmlRewriter = HTMLRewriter;

// index.js
async function repro() {
  console.log("reprooooooo\n\n\n");
  const rewrittenResponse = new GlobalHtmlRewriter().on("body", {
    element(element) {
      console.log("appending");
      element.append("<p><p>\u{1F449}<p></p></p></p>", { html: true });
    }
  }).transform(new Response('<html><meta charset="UTF-8"><body></body>'));
  const text = await rewrittenResponse.text();
  console.log("xxx", text);
  return text;
}
__name(repro, "repro");

// worker.js
var worker_default = {
  fetch: async () => {
    return new Response(await repro());
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
