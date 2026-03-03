const BASE_PAGE_TITLE = "Apellum | Techno Producer & DJ";
var AppRoute = /* @__PURE__ */ ((AppRoute2) => {
  AppRoute2["Error"] = "error";
  AppRoute2["Home"] = "home";
  AppRoute2["About"] = "about";
  AppRoute2["Music"] = "music";
  AppRoute2["Epk"] = "epk";
  AppRoute2["PhotosAndVideos"] = "photosAndVideos";
  AppRoute2["Events"] = "events";
  return AppRoute2;
})(AppRoute || {});
function getPageTitle(route) {
  switch (route) {
    default:
    case AppRoute.Error:
      return `Page not found | ${BASE_PAGE_TITLE}`;
    case AppRoute.Home:
      return `${BASE_PAGE_TITLE}`;
    case AppRoute.About:
      return `About | ${BASE_PAGE_TITLE}`;
    case AppRoute.Music:
      return `Music | ${BASE_PAGE_TITLE}`;
    case AppRoute.Epk:
      return `EPK | ${BASE_PAGE_TITLE}`;
    case AppRoute.PhotosAndVideos:
      return `Photos & Videos | ${BASE_PAGE_TITLE}`;
    case AppRoute.Events:
      return `Events | ${BASE_PAGE_TITLE}`;
  }
}
export {
  AppRoute as A,
  getPageTitle as g
};
