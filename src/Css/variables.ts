export const colors = {
  //  PRIMARY COLOR
  primary_dark: "#364680",
  primary_medium: "#6B7CB7",
  primary_light: "#99AAE4",

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
  darkblue_blue: `linear-gradient(${colors.primary_medium},${colors.primary_light})`,
  blue_blue: `linear-gradient(${colors.primary_light},${colors.primary_dark})`,
  light_blue: `linear-gradient(${colors.primary_light},${colors.primary_light})`,
  purple_yellow: `linear-gradient(${colors.supplementary_purple},${colors.supplementary_yellow})`,
  blue_orange: `linear-gradient(${colors.supplementary_blue},${colors.supplementary_orange})`,
  pink_green: `linear-gradient(${colors.supplementary_pink},${colors.supplementary_green})`,

  green_purple: `linear-gradient(${colors.supplementary_green},${colors.supplementary_purple})`,
  medium_supple_blue: `linear-gradient(${colors.primary_dark},${colors.supplementary_blue})`,
};
