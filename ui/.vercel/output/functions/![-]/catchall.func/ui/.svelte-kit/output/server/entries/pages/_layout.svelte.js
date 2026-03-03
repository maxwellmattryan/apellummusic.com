import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/epk-data.constant.js";
import "../../chunks/Logo.svelte_svelte_type_style_lang.js";
const css = {
  code: ".loader.svelte-1ehggho{border:10px solid #4c5adb;border-top:10px solid #020617;border-radius:50%;width:90px;height:90px;animation:svelte-1ehggho-spin 1.5s linear infinite}@keyframes svelte-1ehggho-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<div class=\\"w-screen h-screen flex flex-row justify-center items-center\\">\\n\\t<div class=\\"loader\\"></div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n\\t.loader {\\n\\t\\tborder: 10px solid #4c5adb;\\n\\t\\tborder-top: 10px solid #020617;\\n\\t\\tborder-radius: 50%;\\n\\t\\twidth: 90px;\\n\\t\\theight: 90px;\\n\\t\\tanimation: spin 1.5s linear infinite;\\n\\t}\\n\\n\\t@keyframes spin {\\n\\t\\t0% {\\n\\t\\t\\ttransform: rotate(0deg);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: rotate(360deg);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAKC,sBAAQ,CACP,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,OAAO,CAC1B,UAAU,CAAE,IAAI,CAAC,KAAK,CAAC,OAAO,CAC9B,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,mBAAI,CAAC,IAAI,CAAC,MAAM,CAAC,QAC7B,CAEA,WAAW,mBAAK,CACf,EAAG,CACF,SAAS,CAAE,OAAO,IAAI,CACvB,CACA,IAAK,CACJ,SAAS,CAAE,OAAO,MAAM,CACzB,CACD"}'
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-screen h-screen flex flex-row justify-center items-center" data-svelte-h="svelte-yckye5"><div class="loader svelte-1ehggho"></div> </div>`;
});
const Layout_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout_1 as default
};
