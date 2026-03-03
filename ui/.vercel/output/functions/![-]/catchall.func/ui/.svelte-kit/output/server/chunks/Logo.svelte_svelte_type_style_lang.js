import "./epk-data.constant.js";
var IconName = /* @__PURE__ */ ((IconName2) => {
  IconName2["AppleMusic"] = "apple-music";
  IconName2["Bandcamp"] = "bandcamp";
  IconName2["Close"] = "close";
  IconName2["Copy"] = "copy";
  IconName2["Download"] = "download";
  IconName2["Facebook"] = "facebook";
  IconName2["Instagram"] = "instagram";
  IconName2["Menu"] = "menu";
  IconName2["SoundCloud"] = "Soundcloud";
  IconName2["Spotify"] = "spotify";
  return IconName2;
})(IconName || {});
var ContactType = /* @__PURE__ */ ((ContactType2) => {
  ContactType2["Email"] = "email";
  ContactType2["Music"] = "music";
  ContactType2["Social"] = "social";
  return ContactType2;
})(ContactType || {});
const CONTACT_DATA = {
  contacts: {
    [ContactType.Email]: [
      {
        name: "Email",
        url: "apellummusic@gmail.com"
      }
    ],
    [ContactType.Music]: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/artist/2MOOYBdY5kjSsiTCugonnJ?si=GspHlrStQEiTmjuf3aIZqA",
        username: "Apellum",
        icon: IconName.Spotify
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/artist/apellum/1535711525",
        username: "Apellum",
        icon: IconName.AppleMusic
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/apellum",
        username: "apellum",
        icon: IconName.SoundCloud
      },
      {
        name: "Bandcamp",
        url: "https://apellum.bandcamp.com",
        username: "Apellum",
        icon: IconName.Bandcamp
      }
    ],
    [ContactType.Social]: [
      {
        name: "Instagram",
        url: "https://instagram.com/apellum",
        username: "apellum",
        icon: IconName.Instagram
      },
      {
        name: "Facebook",
        url: "https://facebook.com/apellummusic",
        username: "apellummusic",
        icon: IconName.Facebook
      }
    ]
  }
};
export {
  CONTACT_DATA as C,
  IconName as I,
  ContactType as a
};
