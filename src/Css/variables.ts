export const colors = {
  //  PRIMARY COLOR
  primary_light: "#364680",
  primary_medium: "#6B7CB7",
  primary_dark: "#99AAE4",

  //EMPHASIZE COLOR
  emphasize_light: "#FF9E89",
  emphasize_medium: "#FF8181",
  emphasize_dark: "#FF2727",

  //SUPPLEMENTARY
  supplementary_blue: "#85AEFF",
  supplementary_orange: "#FFE1B5",
  supplementary_purple: "#5734BA",
  supplementary_yellow: "#FFF49B",
  supplementary_pink: "#FAC1DB",
  supplementary_green: "#F1FFDB",
  // SPOTIFY
  spotifyGreen: "#1DB954",
  spotifyLightGreen: "#1ED760",
};

export const linearBackGroundColors = {
  blue_blue: `linear-gradient(${colors.primary_light},${colors.primary_dark})`,
  purple_yellow: `linear-gradient(${colors.supplementary_purple},${colors.supplementary_yellow})`,
  blue_orange: `linear-gradient(${colors.supplementary_blue},${colors.supplementary_orange})`,
  pink_green: `linear-gradient(${colors.supplementary_pink},${colors.supplementary_green})`,
  medium_supple_blue: `linear-gradient(${colors.primary_dark},${colors.supplementary_blue})`,
};
