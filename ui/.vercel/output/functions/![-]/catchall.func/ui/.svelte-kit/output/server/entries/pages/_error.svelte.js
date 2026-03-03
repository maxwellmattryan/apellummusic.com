import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { g as getPageTitle, A as AppRoute } from "../../chunks/getPageTitle.js";
import "../../chunks/epk-data.constant.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-130ngo0_START -->${$$result.title = `<title>${escape(getPageTitle(AppRoute.Error))}</title>`, ""}<!-- HEAD_svelte-130ngo0_END -->`, ""} <error-page class="w-full h-[50vh] flex flex-col justify-center items-center" data-svelte-h="svelte-ozdwf9"><h1>404</h1> <p>Page not found</p></error-page>`;
});
export {
  Error as default
};
