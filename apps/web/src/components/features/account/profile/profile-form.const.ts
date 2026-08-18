export const genderItems = [
  {
    value: "m",
    label: "Male",
  },
  {
    value: "f",
    label: "Female",
  },
  {
    value: "o",
    label: "Other",
  },
];

export const dayItems = Array.from({ length: 31 }, (_, i) => ({
  value: String(i + 1),
  label: i + 1,
}));
export const monthItems = Array.from({ length: 12 }, (_, i) => ({
  value: String(i + 1),
  label: i + 1,
}));
export const yearItems = Array.from({ length: 150 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return {
    value: String(year),
    label: year,
  };
});
