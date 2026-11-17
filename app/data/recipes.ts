// One file holds both the shape of a recipe (the type) and the data itself,
// so every page in the app reads from a single source of truth.

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: string; // stable, unique slug, used as the React key (and later in URLs)
  title: string;
  cuisine: string;
  minutes: number; // total cooking time
  servings: number;
  difficulty: Difficulty;
  emoji: string; // a simple picture for the card
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    cuisine: "South Indian",
    minutes: 45,
    servings: 4,
    difficulty: "Medium",
    emoji: "🫓",
    description: "Crispy rice-and-lentil crepe filled with spiced potato masala.",
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    cuisine: "North Indian",
    minutes: 40,
    servings: 4,
    difficulty: "Medium",
    emoji: "🍛",
    description: "Soft paneer cubes in a rich, creamy tomato and butter gravy.",
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    cuisine: "Hyderabadi",
    minutes: 60,
    servings: 5,
    difficulty: "Hard",
    emoji: "🍚",
    description: "Fragrant basmati rice layered with vegetables, saffron and mint.",
  },
  {
    id: "lemon-rice",
    title: "Lemon Rice",
    cuisine: "South Indian",
    minutes: 20,
    servings: 3,
    difficulty: "Easy",
    emoji: "🍋",
    description: "Tangy rice tempered with mustard seeds, peanuts and curry leaves.",
  },
  {
    id: "hakka-noodles",
    title: "Veg Hakka Noodles",
    cuisine: "Indo-Chinese",
    minutes: 25,
    servings: 3,
    difficulty: "Easy",
    emoji: "🍜",
    description: "Stir-fried noodles tossed with crunchy vegetables and soy sauce.",
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 35,
    servings: 2,
    difficulty: "Medium",
    emoji: "🍕",
    description: "Thin crust topped with tomato, fresh mozzarella and basil.",
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    cuisine: "Greek",
    minutes: 15,
    servings: 2,
    difficulty: "Easy",
    emoji: "🥗",
    description: "Cucumber, tomato, olives and feta with an olive-oil dressing.",
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    cuisine: "Dessert",
    minutes: 5,
    servings: 1,
    difficulty: "Easy",
    emoji: "🍫",
    description: "A warm, gooey chocolate cake made in a mug in the microwave.",
  },
];
