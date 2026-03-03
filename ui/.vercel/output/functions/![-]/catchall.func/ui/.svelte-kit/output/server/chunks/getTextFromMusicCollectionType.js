import { M as MusicCollectionType } from "./epk-data.constant.js";
function getTextFromMusicCollectionType(musicCollectionType) {
  switch (musicCollectionType) {
    case MusicCollectionType.Original:
      return "Originals";
    case MusicCollectionType.Remix:
      return "Remixes";
    case MusicCollectionType.Set:
      return "DJ Sets";
    case MusicCollectionType.Mix:
      return "DJ Mixes";
    default:
      return "";
  }
}
export {
  getTextFromMusicCollectionType as g
};
