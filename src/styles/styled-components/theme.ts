const colors = {
  red: "red",
  blue: "blue",
};

export type StyleClosetTheme = {
  colors: { [key in keyof typeof colors]: string };
};

export const theme: StyleClosetTheme = {
  colors,
};
