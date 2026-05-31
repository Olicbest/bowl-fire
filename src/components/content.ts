export const imageCredits = [
  {
    label: "Jollof rice with chicken skewers",
    url: "https://unsplash.com/photos/a-bowl-of-food-woC24wGXsQ8",
    src: "https://unsplash.com/photos/woC24wGXsQ8/download?force=true&w=1400",
  },
  {
    label: "Grilled chicken rice bowl",
    url: "https://unsplash.com/photos/sliced-grilled-chicken-with-rice-and-beans-PSoXt5_8hNM",
    src: "https://unsplash.com/photos/PSoXt5_8hNM/download?force=true&w=1200",
  },
  {
    label: "Chicken salad rice bowl",
    url: "https://unsplash.com/photos/a-wooden-bowl-filled-with-rice-chicken-and-salad-z5weOEE56hw",
    src: "https://unsplash.com/photos/z5weOEE56hw/download?force=true&w=1200",
  },
  {
    label: "Zobo drink",
    url: "https://unsplash.com/photos/clear-drinking-glass-with-lemon-juice-PYI8Pt7mLjI",
    src: "https://unsplash.com/photos/PYI8Pt7mLjI/download?force=true&w=1000",
  },
];

export const menu = [
  {
    name: "Smoky Jollof Fire Bowl",
    price: "NGN 4,800",
    text: "Party style jollof, pepper chicken skewers, sweet plantain, slaw, and house red sauce.",
    tag: "Best seller",
    image: imageCredits[0].src,
  },
  {
    name: "Grilled Chicken Power Bowl",
    price: "NGN 5,200",
    text: "Herb grilled chicken over rice and beans with crisp greens, tomato relish, and suya dust.",
    tag: "High protein",
    image: imageCredits[1].src,
  },
  {
    name: "Green Market Bowl",
    price: "NGN 4,500",
    text: "Rice, fresh salad, seasoned beans, charred vegetables, avocado cream, and lime dressing.",
    tag: "Fresh pick",
    image: imageCredits[2].src,
  },
];

export const steps = [
  "Choose jollof, fried rice, coconut rice, or greens.",
  "Add flame grilled chicken, beef suya, fish, egg, or beans.",
  "Finish with plantain, slaw, pepper sauce, and a cold drink.",
];

export const bases = [
  { name: "Smoky jollof", price: 2200 },
  { name: "Fried rice", price: 2200 },
  { name: "Coconut rice", price: 2500 },
  { name: "Greens and beans", price: 2000 },
];

export const proteins = [
  { name: "Pepper chicken", price: 2600 },
  { name: "Beef suya", price: 3000 },
  { name: "Grilled fish", price: 3400 },
  { name: "Spiced beans", price: 1200 },
];

export const extras = [
  { name: "Sweet plantain", price: 800 },
  { name: "Slaw", price: 500 },
  { name: "Zobo", price: 900 },
];

export const ticker = ["Smoky jollof", "Grilled protein", "Sweet plantain", "Office lunch", "Fast delivery"];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};
