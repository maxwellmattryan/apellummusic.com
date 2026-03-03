import { c as create_ssr_component, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import { g as getPageTitle, A as AppRoute } from "../../../chunks/getPageTitle.js";
import { E as EPK_DATA, a as EpkBiographyType } from "../../../chunks/epk-data.constant.js";
import "../../../chunks/Logo.svelte_svelte_type_style_lang.js";
import { C as Contact } from "../../../chunks/Contact.js";
import { b as base } from "../../../chunks/server.js";
const BIOGRAPHY_PARAGRAPHS = EPK_DATA.biographyData.biographies[EpkBiographyType.Long].text ?? [];
const ABOUT_DATA = {
  sections: [
    {
      image: "press_about-01.webp",
      header: "",
      paragraph: BIOGRAPHY_PARAGRAPHS[0]
    },
    {
      image: "press_about-02.webp",
      header: "",
      paragraph: BIOGRAPHY_PARAGRAPHS[1]
    }
  ]
};
const css$1 = {
  code: ".is-left.svelte-10pri6x{text-align:left\n}@media(min-width: 1024px){.is-left.svelte-10pri6x{text-align:left\n    }}.is-right.svelte-10pri6x{text-align:left\n}@media(min-width: 1024px){.is-right.svelte-10pri6x{text-align:right\n    }}",
  map: `{"version":3,"file":"AboutSection.svelte","sources":["AboutSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { base } from \\"$app/paths\\";\\nexport let section;\\nexport let justifyLeft = true;\\nexport let index = 0;\\nconst { image, header, paragraph } = section ?? {};\\n<\/script>\\n\\n<about-section\\n\\tclass=\\"about-pair flex flex-col md:flex-row {justifyLeft\\n\\t\\t? 'md:flex-row'\\n\\t\\t: 'md:flex-row-reverse'} items-center\\"\\n>\\n\\t<about-section-paragraph class=\\"px-[1vw] pb-[4vh] flex flex-col justify-between opacity-90\\">\\n\\t\\t<about-section-paragraph-header\\n\\t\\t\\tclass=\\"w-full mb-[2vh] md:mb-[4vh] pb-4 border-b-2 border-solid border-[{justifyLeft\\n\\t\\t\\t\\t? '#4c5adb'\\n\\t\\t\\t\\t: '#ef2e5e'}]\\"\\n\\t\\t>\\n\\t\\t\\t<h3 class={justifyLeft ? 'is-left' : 'is-right'}>{header}</h3>\\n\\t\\t</about-section-paragraph-header>\\n\\t\\t<about-section-paragraph-text>\\n\\t\\t\\t<p class={justifyLeft ? 'is-left' : 'is-right'}>{paragraph}</p>\\n\\t\\t</about-section-paragraph-text>\\n\\t</about-section-paragraph>\\n\\t<img\\n\\t\\tclass=\\"md:w-[35vw] md:max-h-[640px] md:px-[4vw]\\"\\n\\t\\tsrc=\\"{base}/images/{image}\\"\\n\\t\\talt=\\"Press {index + 1}\\"\\n\\t/>\\n</about-section>\\n\\n<style lang=\\"postcss\\">\\n\\t.is-left {\\n\\n    text-align: left\\n}\\n\\n@media (min-width: 1024px) {\\n\\n    .is-left {\\n\\n        text-align: left\\n    }\\n}\\n\\n\\t.is-right {\\n\\n    text-align: left\\n}\\n\\n\\t@media (min-width: 1024px) {\\n\\n    .is-right {\\n\\n        text-align: right\\n    }\\n}\\n</style>\\n"],"names":[],"mappings":"AAgCC,uBAAS,CAEN,UAAU,CAAE,IAAI;AACpB,CAEA,MAAO,YAAY,MAAM,CAAE,CAEvB,uBAAS,CAEL,UAAU,CAAE,IAAI;AACxB,IAAI,CACJ,CAEC,wBAAU,CAEP,UAAU,CAAE,IAAI;AACpB,CAEC,MAAO,YAAY,MAAM,CAAE,CAExB,wBAAU,CAEN,UAAU,CAAE,KAAK;AACzB,IAAI,CACJ"}`
};
const AboutSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  let { justifyLeft = true } = $$props;
  let { index = 0 } = $$props;
  const { image, header, paragraph } = section ?? {};
  if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);
  if ($$props.justifyLeft === void 0 && $$bindings.justifyLeft && justifyLeft !== void 0) $$bindings.justifyLeft(justifyLeft);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$1);
  return `<about-section class="${"about-pair flex flex-col md:flex-row " + escape(justifyLeft ? "md:flex-row" : "md:flex-row-reverse", true) + " items-center"}"><about-section-paragraph class="px-[1vw] pb-[4vh] flex flex-col justify-between opacity-90"><about-section-paragraph-header class="${"w-full mb-[2vh] md:mb-[4vh] pb-4 border-b-2 border-solid border-[" + escape(justifyLeft ? "#4c5adb" : "#ef2e5e", true) + "]"}"><h3 class="${escape(null_to_empty(justifyLeft ? "is-left" : "is-right"), true) + " svelte-10pri6x"}">${escape(header)}</h3></about-section-paragraph-header> <about-section-paragraph-text><p class="${escape(null_to_empty(justifyLeft ? "is-left" : "is-right"), true) + " svelte-10pri6x"}">${escape(paragraph)}</p></about-section-paragraph-text></about-section-paragraph> <img class="md:w-[35vw] md:max-h-[640px] md:px-[4vw]" src="${escape(base, true) + "/images/" + escape(image, true)}" alt="${"Press " + escape(index + 1, true)}"> </about-section>`;
});
const css = {
  code: ".about-section.svelte-1wnhg9f:not(:first-of-type){margin-top:10vh\n}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { Contact } from \\"@components\\";\\nimport { AppRoute, getPageTitle, setAppRoute } from \\"@lib/app\\";\\nimport { ABOUT_DATA } from \\"@lib/data/about\\";\\nimport { AboutSection } from \\"./components\\";\\nconst { sections } = ABOUT_DATA;\\nonMount(() => {\\n  setAppRoute(AppRoute.About);\\n});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{getPageTitle(AppRoute.About)}</title>\\n</svelte:head>\\n<about-page class=\\"w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center\\">\\n\\t{#each sections as section, index}\\n\\t\\t<div class=\\"about-section\\">\\n\\t\\t\\t<AboutSection {section} {index} justifyLeft={index % 2 !== 0} />\\n\\t\\t</div>\\n\\t{/each}\\n\\t<div class=\\"about-section\\">\\n\\t\\t<Contact />\\n\\t</div>\\n</about-page>\\n\\n<style lang=\\"postcss\\">\\n\\t.about-section:not(:first-of-type) {\\n    margin-top: 10vh\\n}\\n</style>\\n"],"names":[],"mappings":"AA0BC,6BAAc,KAAK,cAAc,CAAE,CAChC,UAAU,CAAE,IAAI;AACpB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { sections } = ABOUT_DATA;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ju79ej_START -->${$$result.title = `<title>${escape(getPageTitle(AppRoute.About))}</title>`, ""}<!-- HEAD_svelte-ju79ej_END -->`, ""} <about-page class="w-full h-auto mt-[10vh] mb-[15vh] flex flex-col items-center">${each(sections, (section, index) => {
    return `<div class="about-section svelte-1wnhg9f">${validate_component(AboutSection, "AboutSection").$$render(
      $$result,
      {
        section,
        index,
        justifyLeft: index % 2 !== 0
      },
      {},
      {}
    )} </div>`;
  })} <div class="about-section svelte-1wnhg9f">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> </about-page>`;
});
export {
  Page as default
};
