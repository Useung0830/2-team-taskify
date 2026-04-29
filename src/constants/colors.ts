export const COLOR_KEYS = [
  "violet",
  "cobalt",
  "green",
  "cyan",
  "rose",
  "yellow",
  "orange",
] as const;

export type TagColorKey = (typeof COLOR_KEYS)[number];

export const TAG_COLORS: Record<TagColorKey, string> = {
  violet: "bg-profile-violet text-profile-violet-light",
  cobalt: "bg-profile-cobalt text-profile-cobalt-light",
  green: "bg-profile-green text-profile-green-light",
  cyan: "bg-profile-cyan text-profile-cyan-light",
  rose: "bg-profile-rose text-profile-rose-light",
  yellow: "bg-profile-yellow text-profile-yellow-light",
  orange: "bg-profile-orange text-profile-orange-light",
};
