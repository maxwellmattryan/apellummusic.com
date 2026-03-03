var MusicCollectionType = /* @__PURE__ */ ((MusicCollectionType2) => {
  MusicCollectionType2["Original"] = "original";
  MusicCollectionType2["Remix"] = "remix";
  MusicCollectionType2["Set"] = "set";
  MusicCollectionType2["Mix"] = "mix";
  return MusicCollectionType2;
})(MusicCollectionType || {});
var MusicUrlType = /* @__PURE__ */ ((MusicUrlType2) => {
  MusicUrlType2["AppleMusic"] = "appleMusic";
  MusicUrlType2["Bandcamp"] = "bandcamp";
  MusicUrlType2["SoundCloud"] = "soundcloud";
  MusicUrlType2["Spotify"] = "spotify";
  MusicUrlType2["YouTube"] = "youtube";
  return MusicUrlType2;
})(MusicUrlType || {});
const MUSIC_DATA = {
  collections: {
    [MusicCollectionType.Original]: [
      {
        image: "music_original_mind-fog",
        title: "Mind Fog",
        description: "The sounds of a Mind adrift, lost in its own Fog. What is to be found within the beauty of mystery?",
        urls: [
          {
            type: MusicUrlType.Spotify,
            url: "https://open.spotify.com/track/4k2Z4f243V7wySxxmdfmdy"
          }
        ],
        date: /* @__PURE__ */ new Date("May 9, 2025")
      },
      {
        image: "music_original_scenes-of-water",
        title: "Scenes of Water",
        description: "An exploration of beautiful, naturally occuring phenomena that involve water.",
        urls: [
          {
            type: MusicUrlType.Spotify,
            url: "https://open.spotify.com/album/7q4QpV8ABx5eh1QrjupGKG"
          }
        ],
        date: /* @__PURE__ */ new Date("June 27, 2024")
      },
      {
        image: "music_original_protocol-ep",
        title: "Protocol EP",
        description: "Sonic textures from interference-laden chaos to the dense and powerful layers of a messaging protocol.",
        urls: [
          {
            type: MusicUrlType.Spotify,
            url: "https://open.spotify.com/album/6jzHkIy9vlppA9FzLOeyWq"
          }
        ],
        date: /* @__PURE__ */ new Date("January 19, 2024")
      }
    ],
    [MusicCollectionType.Remix]: [
      {
        image: "music_remix_so-seductive",
        title: "EMSKI & Remedy - So Seductive (Apellum Bootleg)",
        description: "A fun club mix of a recent release by EMSKI and Remedy.",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/Qjt2u"
          }
        ],
        date: /* @__PURE__ */ new Date("January 31, 2024"),
        hidden: false
      },
      {
        image: "music_remix_exhibit-1",
        title: "Slam - Exhibit 1 (Apellum Bootleg)",
        description: "My submission for Slam's remix competition held in December 2023.",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/VMZB2"
          }
        ],
        date: /* @__PURE__ */ new Date("January 5, 2024")
      }
    ],
    [MusicCollectionType.Set]: [
      {
        image: "music_set_immediate-rush_2024-11-09",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/aYmoqckGLPX7TYiZ9"
          }
        ],
        title: "Immediate Rush @ Kingdom Nightclub",
        description: "Raw and hypnotic techno set at Kingdom Nightclub.",
        date: /* @__PURE__ */ new Date("November 11, 2024")
      },
      {
        image: "music_set_kitchen-techno_2024-07-12",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/UZ1L76EFpDdpTgaU9"
          }
        ],
        title: "Kitchen Techno @ Club Eternal",
        description: "Hypnotic and groovy techno set at a Kitchen Techno party.",
        date: /* @__PURE__ */ new Date("July 12, 2024")
      }
    ],
    [MusicCollectionType.Mix]: [
      {
        image: "music_mix_audiophiles-002",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/UpsFfyKGuCySktxU6"
          }
        ],
        title: "Audiophiles 002",
        description: "Kicking off a podcast series with raw and energetic techno."
      },
      {
        image: "music_mix_rn-060",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/Ny3Ee"
          }
        ],
        title: "Required Noise 060",
        description: "Techno episode for the Required Noise label's podcast."
      },
      {
        image: "music_mix_womm-090",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/xfcv7"
          }
        ],
        title: "What's On My Mind 090",
        description: "Techno episode for No Light Thing's radio show podcast.",
        hidden: true
      },
      {
        image: "music_mix_dj-mixes",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/uch1p"
          }
        ],
        title: "DJ Mixes",
        description: "Collection of my DJ mixes."
      },
      {
        image: "music_mix_mixed-tape",
        urls: [
          {
            type: MusicUrlType.SoundCloud,
            url: "https://on.soundcloud.com/Mx6ky"
          }
        ],
        title: "Mixed Tape",
        description: "Collection of my Mixed Tape series, i.e. mini-mixes that featuring specific artists.",
        hidden: true
      }
    ]
  }
};
var EpkBiographyType = /* @__PURE__ */ ((EpkBiographyType2) => {
  EpkBiographyType2["Short"] = "short";
  EpkBiographyType2["OneLine"] = "oneLine";
  EpkBiographyType2["Long"] = "long";
  return EpkBiographyType2;
})(EpkBiographyType || {});
const EPK_DATA = {
  downloadUrl: "https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip",
  biographyData: {
    image: "press_epk-01.jpg",
    /**
     * When updating the biography, make sure to make changes in the following places:
     * - Bandcamp
     * - Beatport
     * - Google Drive (upload to GCP)
     * - Kinetic Management
     * - Resident Advisor
     * - Spotify
     * - Website (source of truth)
     */
    biographies: {
      // [EpkBiographyType.OneLine]: {
      // 	type: EpkBiographyType.OneLine,
      // 	text: [
      // 		`
      // 		In the heart of Austin’s electronic music scene, Apellum crafts a sound that is immersive, hypnotic, and deeply attuned to the dancefloor. As a producer and DJ, Apellum channels an intricate interplay of rhythm and texture, creating music that traverses the cerebral and physical, inviting listeners to lose themselves in the groove.
      // 	`,
      // 	],
      // },
      [EpkBiographyType.Short]: {
        type: EpkBiographyType.Short,
        text: [
          `
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether.
					With a background in percussion and audio engineering, his work blends syncopated rhythms, earthy sound design, and field-recorded elements into something alive and introspective.
					He is the founder of Mystic Twin, an underground label born in Austin, devoted to deep, hypnotic electronic music.
				`
        ]
      },
      [EpkBiographyType.Long]: {
        type: EpkBiographyType.Long,
        text: [
          `
					Apellum is an Austin-based producer and DJ crafting organic and hypnotic electronic music drawn from the vibrations of flora, water, and ether. 
					With a background in percussion and audio engineering, his work blends syncopated rhythm, earthy sound design, and field-recorded elements into something alive and introspective. 
				`,
          `
					He is the founder of Mystic Twin, an underground label born in Austin, devoted to deep, hypnotic electronic music.
				`
        ]
      }
    }
  },
  musicData: {
    image: "press_epk-02.jpg",
    collections: MUSIC_DATA.collections
  },
  pressData: {
    images: ["press_epk-03.jpg", "press_epk-04.jpg", "press_epk-05.jpg"]
  }
};
export {
  EPK_DATA as E,
  MusicCollectionType as M,
  EpkBiographyType as a,
  MUSIC_DATA as b
};
