import { c as create_ssr_component, e as escape, f as each, g as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { g as getPageTitle, A as AppRoute } from "../../../chunks/getPageTitle.js";
import { b as MUSIC_DATA } from "../../../chunks/epk-data.constant.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import { g as getTextFromMusicCollectionType } from "../../../chunks/getTextFromMusicCollectionType.js";
const MusicSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collectionType } = $$props;
  let { collection } = $$props;
  if ($$props.collectionType === void 0 && $$bindings.collectionType && collectionType !== void 0) $$bindings.collectionType(collectionType);
  if ($$props.collection === void 0 && $$bindings.collection && collection !== void 0) $$bindings.collection(collection);
  return `<music-section><about-section-header><h3>${escape(getTextFromMusicCollectionType(collectionType))}</h3></about-section-header> ${each(collection, (musicItem) => {
    return `<img src="${escape(base, true) + "/images/" + escape(musicItem.image, true) + ".jpg"}"${add_attribute("alt", musicItem.image, 0)} class="aspect-square">`;
  })}</music-section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { collections } = MUSIC_DATA;
  return `${$$result.head += `<!-- HEAD_svelte-1dho5sh_START -->${$$result.title = `<title>${escape(getPageTitle(AppRoute.Music))}</title>`, ""}<!-- HEAD_svelte-1dho5sh_END -->`, ""} <music-page class="w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center">${each(Object.entries(collections), ([collectionType, collection]) => {
    return `${validate_component(MusicSection, "MusicSection").$$render($$result, { collectionType, collection }, {}, {})}`;
  })}</music-page>`;
});
export {
  Page as default
};
