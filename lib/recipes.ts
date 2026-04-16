export type Category = 'breakfast' | 'lunch' | 'dinner' | 'snacks';

export interface Ingredient {
  section?: string;
  items: string[];
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fibre: number;
}

export interface Recipe {
  id: string;
  name: string;
  category: Category;
  tags: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  servingNote?: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  gutHealthNote: string;
  nutrition: Nutrition;
  tip?: string;
  servingSuggestion?: string;
}

// Unsplash images mapped to each recipe
const IMAGES = {
  chiaPudding: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80',
  blueberrySmoothie: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&q=80',
  pancakes: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
  granola: 'https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=800&q=80',
  avocadoEggs: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
  mangoSmoothie: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80',
  strawberrySmoothie: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=800&q=80',
  chickpeaSalad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  sardineBowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
  tunaPasta: 'https://images.unsplash.com/photo-1473093226555-0b6efd8b61f3?w=800&q=80',
  stirFry: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80',
  chickenTacos: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
  salmonGreens: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
  lentilBowl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  seabass: 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=800&q=80',
  sweetPotatoSoup: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
  applePeanutButter: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
  energyBalls: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
  roastedChickpeas: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
};

export const recipes: Recipe[] = [
  // ── BREAKFAST ──────────────────────────────────────────────────────────────
  {
    id: 'blueberry-chia-pudding',
    name: 'Anti-Inflammatory Blueberry Chia Pudding',
    category: 'breakfast',
    tags: ['Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense', 'Vegan-Friendly'],
    prepTime: 15,
    cookTime: 0,
    servings: 1,
    image: IMAGES.chiaPudding,
    description: 'A nutrient-packed overnight pudding loaded with antioxidants, omega-3s, and fibre for a gentle gut-friendly start.',
    ingredients: [
      {
        items: [
          '3 tbsp chia seeds',
          '200 ml unsweetened almond milk (or coconut milk)',
          '1 tbsp Greek yogurt or dairy-free yogurt',
          '½ cup blueberries',
          '1 tbsp chopped walnuts',
          '1 tbsp ground flaxseed',
          '½ tsp cinnamon',
          'Optional: drizzle of raw honey',
        ],
      },
    ],
    instructions: [
      'Combine chia seeds, almond milk and yogurt in a bowl or jar. Stir well.',
      'Leave to set for 15 minutes (or refrigerate overnight).',
      'Top with blueberries, walnuts, flaxseed and cinnamon.',
      'Stir and enjoy. Add a drizzle of raw honey if desired.',
    ],
    gutHealthNote: 'Chia seeds and flaxseed provide soluble fibre that feeds beneficial gut bacteria, while blueberries deliver antioxidants that support gut lining health.',
    nutrition: { calories: 350, protein: 11, carbs: 20, fat: 25, fibre: 14 },
  },
  {
    id: 'blueberry-almond-smoothie',
    name: 'Blueberry Almond Anti-Inflammatory Smoothie',
    category: 'breakfast',
    tags: ['Anti-Inflammatory Breakfast Smoothies', 'Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense'],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    image: IMAGES.blueberrySmoothie,
    description: 'A quick blender smoothie rich in antioxidants and healthy fats — ready in 5 minutes.',
    ingredients: [
      {
        items: [
          '1 cup frozen blueberries',
          '1 tbsp almond butter',
          '1 tbsp chia seeds',
          '1 cup unsweetened almond milk',
          '½ banana',
          '½ tsp cinnamon',
          'Optional: ice, 1 scoop protein powder',
        ],
      },
    ],
    instructions: [
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'Adjust consistency with extra almond milk if needed.',
      'Serve immediately.',
    ],
    gutHealthNote: 'Blueberries are rich in polyphenols that support a diverse gut microbiome, while chia seeds add soluble fibre for digestive comfort.',
    nutrition: { calories: 245, protein: 6, carbs: 25, fat: 14, fibre: 9 },
  },
  {
    id: 'gf-protein-pancakes',
    name: 'Gluten-Free High-Protein Pancakes',
    category: 'breakfast',
    tags: ['High Protein', 'High Fibre', 'Gluten-Free', 'Dairy-Free', 'Nutrient-Dense'],
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    image: IMAGES.pancakes,
    description: 'Fluffy, protein-packed pancakes made with gluten-free oat flour — perfect for a satisfying morning.',
    ingredients: [
      {
        items: [
          '¾ cup gluten-free oat flour',
          '¼ cup vegan protein powder',
          '2 eggs',
          '½ cup unsweetened almond milk',
          '1 small ripe banana',
          '1 tsp baking powder',
          '½ tsp cinnamon',
          '1 tsp vanilla extract',
          '1 tsp olive oil or coconut oil',
          'Optional toppings: fresh berries, almond butter, dairy-free yogurt',
        ],
      },
    ],
    instructions: [
      'Blend or whisk all ingredients together until smooth.',
      'Heat oil in a non-stick pan over medium heat.',
      'Pour small portions of batter (about ¼ cup each) into the pan.',
      'Cook for 2–3 minutes per side until golden brown and cooked through.',
      'Serve with fresh berries, nut butter or dairy-free yogurt.',
    ],
    gutHealthNote: 'Oat flour provides beta-glucan fibre that supports gut bacteria diversity, while eggs deliver complete protein for tissue repair.',
    nutrition: { calories: 350, protein: 26, carbs: 32, fat: 13, fibre: 5 },
  },
  {
    id: 'gf-protein-granola',
    name: 'Gluten-Free High-Protein High-Fibre Granola',
    category: 'breakfast',
    tags: ['High Protein', 'High Fibre', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free', 'Vegan-Friendly'],
    prepTime: 10,
    cookTime: 20,
    servings: 8,
    servingNote: 'Makes 8 servings',
    image: IMAGES.granola,
    description: 'A crunchy baked granola packed with seeds, nuts and plant protein. Makes enough for the whole week.',
    ingredients: [
      {
        items: [
          '2 cups gluten-free rolled oats',
          '½ cup chopped almonds',
          '¼ cup pumpkin seeds',
          '¼ cup sunflower seeds',
          '2 tbsp chia seeds',
          '¼ cup vegan protein powder',
          '2 tbsp coconut oil (melted)',
          '2 tbsp maple syrup or honey',
          '1 tsp cinnamon',
          '1 tsp vanilla extract',
          'Pinch of sea salt',
          'Optional: walnuts, coconut flakes, dried fruit (add after baking)',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 180°C. Line a baking tray with baking paper.',
      'Mix all dry ingredients together in a large bowl.',
      'Whisk coconut oil, maple syrup and vanilla in a small bowl.',
      'Pour the wet mixture over the dry and stir well to combine.',
      'Spread evenly on the prepared baking tray.',
      'Bake for 18–20 minutes, stirring halfway through.',
      'Allow to cool completely (it will crisp up as it cools).',
      'Add any dried fruit after baking.',
      'Serve with dairy-free yogurt and fresh berries.',
    ],
    gutHealthNote: 'Oats and seeds provide a variety of fibres and prebiotics that nourish different strains of beneficial gut bacteria.',
    nutrition: { calories: 230, protein: 9, carbs: 20, fat: 14, fibre: 5 },
  },
  {
    id: 'harissa-eggs-avocado',
    name: 'Harissa Fried Eggs & Avocado on Sourdough',
    category: 'breakfast',
    tags: ['High Protein', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free'],
    prepTime: 5,
    cookTime: 6,
    servings: 1,
    image: IMAGES.avocadoEggs,
    description: 'A bold, flavourful breakfast with spiced harissa eggs on creamy avocado toast.',
    ingredients: [
      {
        items: [
          '1 slice sourdough bread (use gluten-free if required)',
          '½ avocado',
          'Squeeze of lemon juice',
          '2 eggs',
          '1 tsp olive oil',
          '1 tsp harissa paste',
          'Sea salt and black pepper',
          'Optional: chilli flakes, sesame seeds, fresh herbs',
        ],
      },
    ],
    instructions: [
      'Toast the sourdough bread until golden.',
      'Heat olive oil in a small pan over medium heat.',
      'Crack in the eggs and cook for 2 minutes.',
      'Spoon harissa paste around the eggs and swirl gently. Cook to your preferred doneness.',
      'Mash avocado with a pinch of salt, pepper and lemon juice.',
      'Spread avocado on toast and top with the harissa eggs.',
      'Finish with optional garnishes.',
    ],
    gutHealthNote: 'Avocado provides prebiotic fibre and healthy fats, while eggs deliver complete protein and important B vitamins for gut lining support.',
    nutrition: { calories: 380, protein: 20, carbs: 22, fat: 24, fibre: 8 },
  },
  {
    id: 'mango-ginger-smoothie',
    name: 'Mango Ginger Gut-Friendly Smoothie',
    category: 'breakfast',
    tags: ['Anti-Inflammatory Breakfast Smoothies', 'Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense'],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    image: IMAGES.mangoSmoothie,
    description: 'A tropical, warming smoothie with fresh ginger to soothe digestion and reduce inflammation.',
    ingredients: [
      {
        items: [
          '1 cup frozen mango chunks',
          '½ banana',
          '1 cup unsweetened coconut milk',
          '1 tsp fresh grated ginger',
          '1 tbsp ground flaxseed',
          'Juice of ¼ lime',
          'Optional: ice, 1 scoop protein powder',
        ],
      },
    ],
    instructions: [
      'Add all ingredients to a blender.',
      'Blend until smooth.',
      'Adjust thickness with extra coconut milk if needed.',
      'Serve immediately.',
    ],
    gutHealthNote: 'Ginger has long been used to support digestion and reduce nausea, while flaxseed provides soluble fibre that helps regulate bowel movements.',
    nutrition: { calories: 210, protein: 3, carbs: 36, fat: 6, fibre: 5 },
  },
  {
    id: 'strawberry-chia-smoothie',
    name: 'Strawberry Chia Breakfast Smoothie',
    category: 'breakfast',
    tags: ['Anti-Inflammatory Breakfast Smoothies', 'Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense'],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    image: IMAGES.strawberrySmoothie,
    description: 'A creamy, vibrant strawberry smoothie with chia and almond butter for lasting energy.',
    ingredients: [
      {
        items: [
          '1 cup frozen strawberries',
          '1 tbsp chia seeds',
          '1 cup unsweetened almond milk',
          '½ banana',
          '1 tbsp almond butter',
          '½ tsp vanilla extract',
          'Optional: ice, 1 scoop protein powder',
        ],
      },
    ],
    instructions: [
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'Adjust thickness with extra almond milk.',
      'Serve immediately.',
    ],
    gutHealthNote: 'Strawberries are rich in vitamin C and polyphenols that support gut barrier integrity, while chia seeds add soluble fibre for digestive regularity.',
    nutrition: { calories: 295, protein: 8, carbs: 35, fat: 16, fibre: 10 },
  },

  // ── LUNCH ──────────────────────────────────────────────────────────────────
  {
    id: 'crispy-chickpea-salad',
    name: 'Crispy Chickpea & Avocado Salad',
    category: 'lunch',
    tags: ['Vegan-Friendly', 'High Fibre', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free'],
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: IMAGES.chickpeaSalad,
    description: 'A fresh, satisfying salad with crispy roasted chickpeas, creamy avocado and a zesty tahini dressing.',
    ingredients: [
      {
        section: 'For the salad',
        items: [
          '1 cup chickpeas, drained and rinsed',
          '1 tbsp olive oil',
          '½ tsp paprika',
          'Pinch salt and black pepper',
          '1 avocado, diced',
          '½ cucumber, chopped',
          'Handful of rocket or spinach',
        ],
      },
      {
        section: 'For the dressing',
        items: [
          '1 tbsp tahini',
          'Juice of ½ lemon',
          '1–2 tbsp water (to thin)',
          'Pinch salt',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 200°C (or air fryer to 190°C).',
      'Pat the chickpeas dry with a paper towel.',
      'Toss with olive oil, paprika, salt and pepper.',
      'Roast for 15 minutes (or air fry for 10–12 minutes) until crispy.',
      'Whisk together tahini, lemon juice, water and salt to make the dressing.',
      'In a bowl, combine avocado, cucumber and greens.',
      'Add the warm crispy chickpeas.',
      'Drizzle with tahini dressing and toss gently.',
    ],
    gutHealthNote: 'Chickpeas provide fibre and plant protein that support gut microbiome diversity, while avocado and tahini deliver healthy fats that help nutrient absorption.',
    nutrition: { calories: 330, protein: 9, carbs: 24, fat: 24, fibre: 10 },
  },
  {
    id: 'sardine-avocado-bowl',
    name: 'Mediterranean Sardine & Avocado Bowl',
    category: 'lunch',
    tags: ['Omega-3 Rich', 'Mediterranean-Style', '5-Ingredient Meals for Busy Days', 'Gluten-Free', 'Dairy-Free'],
    prepTime: 8,
    cookTime: 0,
    servings: 1,
    image: IMAGES.sardineBowl,
    description: 'A simple, no-cook Mediterranean bowl rich in omega-3s and healthy fats — ready in under 10 minutes.',
    ingredients: [
      {
        items: [
          '1 cup cooked quinoa',
          '1 tin sardines in olive oil',
          '½ avocado, sliced',
          'Handful of rocket or spinach',
          'Juice of ½ lemon',
          'Drizzle of olive oil',
          'Sea salt to taste',
        ],
      },
    ],
    instructions: [
      'Place cooked quinoa into a bowl.',
      'Add sardines, avocado slices and greens.',
      'Drizzle with olive oil and lemon juice.',
      'Season lightly with sea salt if desired.',
    ],
    tip: 'Substitute sardines with tinned tuna or salmon for a similar protein and omega-3 boost.',
    gutHealthNote: 'Sardines are rich in omega-3 fatty acids that support the gut lining, while quinoa provides plant protein and gentle fibre.',
    nutrition: { calories: 520, protein: 28, carbs: 42, fat: 28, fibre: 9 },
  },
  {
    id: 'tuna-lentil-pasta-salad',
    name: 'Tuna & Red Lentil Pasta Salad',
    category: 'lunch',
    tags: ['High Protein', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free', 'Mediterranean-Style'],
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    image: IMAGES.tunaPasta,
    description: 'A Mediterranean-style pasta salad with red lentil pasta, tuna and fresh vegetables in a light lemon dressing.',
    ingredients: [
      {
        items: [
          '120 g red lentil pasta',
          '2 tins tuna in olive oil, drained',
          '1 cup cherry tomatoes, halved',
          '½ cucumber, chopped',
          '2 tbsp olives, sliced',
          '1 tbsp olive oil',
          'Juice of ½ lemon',
          'Small handful fresh parsley, chopped',
          'Salt and black pepper, to taste',
        ],
      },
    ],
    instructions: [
      'Cook red lentil pasta according to package instructions.',
      'Drain and rinse briefly under cool water.',
      'In a large bowl, combine pasta, tuna, cherry tomatoes, cucumber and olives.',
      'Drizzle with olive oil and lemon juice.',
      'Add chopped parsley and season with salt and pepper.',
      'Toss gently to combine and serve.',
    ],
    gutHealthNote: 'Red lentil pasta provides fibre and plant protein, while tuna contributes omega-3 fatty acids and vegetables add additional fibre and micronutrients.',
    nutrition: { calories: 410, protein: 34, carbs: 30, fat: 15, fibre: 9 },
  },

  // ── DINNER ─────────────────────────────────────────────────────────────────
  {
    id: 'ginger-chicken-stir-fry',
    name: 'Ginger Chicken & Vegetable Stir Fry',
    category: 'dinner',
    tags: ['High Protein', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free'],
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: IMAGES.stirFry,
    description: 'A light, fragrant stir fry with lean chicken, fresh ginger and colourful vegetables over brown rice.',
    ingredients: [
      {
        items: [
          '2 chicken breasts, thinly sliced',
          '1 tbsp olive oil or avocado oil',
          '1 tbsp fresh grated ginger',
          '1 garlic clove, minced',
          '1 carrot, thinly sliced',
          '1 red pepper, sliced',
          '1 courgette, sliced',
          '2 tbsp coconut aminos or tamari',
          '1 tsp sesame oil',
          '1 cup cooked brown rice',
          'Salt and black pepper, to taste',
        ],
      },
    ],
    instructions: [
      'Heat oil in a large pan or wok over medium-high heat.',
      'Cook sliced chicken for 6–8 minutes, stirring frequently, until cooked through. Remove and set aside.',
      'Add ginger and garlic to the same pan; cook 1 minute until fragrant.',
      'Add carrot, red pepper and courgette. Stir fry for 5–6 minutes until tender but still crisp.',
      'Return chicken to the pan.',
      'Stir in coconut aminos and sesame oil. Cook 1–2 more minutes.',
      'Season with salt and pepper. Serve over brown rice.',
    ],
    gutHealthNote: 'Lean chicken provides high-quality protein, while colourful vegetables contribute fibre and phytonutrients that support overall digestive health.',
    nutrition: { calories: 355, protein: 34, carbs: 22, fat: 14, fibre: 4 },
  },
  {
    id: 'chicken-tacos-avocado-slaw',
    name: 'Gluten-Free Chicken Tacos with Avocado Slaw',
    category: 'dinner',
    tags: ['High Protein', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free'],
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    image: IMAGES.chickenTacos,
    description: 'Fresh, flavourful tacos with seasoned chicken and a creamy avocado slaw in gluten-free corn tortillas.',
    ingredients: [
      {
        section: 'For the chicken',
        items: [
          '2 chicken breasts, sliced into strips',
          '1 tbsp olive oil',
          '1 tsp ground cumin',
          '1 tsp paprika',
          '½ tsp garlic powder',
          'Juice of ½ lime',
          'Salt and black pepper, to taste',
        ],
      },
      {
        section: 'For the avocado slaw',
        items: [
          '1 cup shredded cabbage',
          '½ avocado',
          'Juice of ½ lime',
          '1 tbsp olive oil',
          'Small handful fresh coriander, chopped',
          'Pinch salt',
        ],
      },
      {
        section: 'To serve',
        items: ['4 small gluten-free corn tortillas'],
      },
    ],
    instructions: [
      'Heat olive oil in a pan over medium heat.',
      'Add chicken, cumin, paprika and garlic powder. Cook 8–10 minutes until cooked through.',
      'Squeeze over lime juice and season with salt and pepper.',
      'Mash avocado with lime juice and olive oil until creamy.',
      'Add shredded cabbage and coriander; toss to combine.',
      'Warm tortillas in a dry pan for 30–60 seconds per side.',
      'Fill each tortilla with chicken and avocado slaw. Serve immediately.',
    ],
    gutHealthNote: 'Lean chicken provides high-quality protein, while cabbage and avocado contribute fibre and healthy fats that support overall digestive health.',
    nutrition: { calories: 420, protein: 32, carbs: 28, fat: 20, fibre: 7 },
  },
  {
    id: 'lemon-herb-salmon',
    name: 'Lemon Herb Salmon with Greens',
    category: 'dinner',
    tags: ['Omega-3 Rich', 'Mediterranean-Style', 'High Protein', 'Gluten-Free', 'Dairy-Free', 'Nutrient-Dense'],
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    image: IMAGES.salmonGreens,
    description: 'A simple, elegant salmon dinner with Mediterranean herbs, wilted spinach and lentils or brown rice.',
    ingredients: [
      {
        items: [
          '2 salmon fillets',
          '1 tbsp olive oil',
          'Juice of 1 lemon',
          '1 tsp dried oregano',
          '2 cups fresh spinach',
          '1 cup cooked lentils or brown rice',
          'Salt and black pepper, to taste',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 180°C.',
      'Place salmon on a baking tray lined with baking paper.',
      'Drizzle with olive oil and lemon juice; sprinkle with oregano.',
      'Season with salt and pepper. Bake for 12–15 minutes until cooked through.',
      'Heat a small pan with olive oil. Sauté spinach for 1–2 minutes until wilted.',
      'Serve salmon with sautéed spinach and lentils or brown rice.',
    ],
    gutHealthNote: 'Salmon provides omega-3 fatty acids that support gut lining integrity, while leafy greens and whole grains add fibre and important micronutrients.',
    nutrition: { calories: 420, protein: 30, carbs: 17, fat: 24, fibre: 3 },
  },
  {
    id: 'mediterranean-lentil-bowl',
    name: 'Mediterranean Lentil & Roasted Vegetable Bowl',
    category: 'dinner',
    tags: ['Mediterranean-Style', 'High Fibre', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free', 'Vegan-Friendly'],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    image: IMAGES.lentilBowl,
    description: 'A hearty plant-based bowl with roasted Mediterranean vegetables, lentils and a bright lemon dressing.',
    ingredients: [
      {
        section: 'For the bowl',
        items: [
          '1 cup cooked lentils',
          '1 courgette, sliced',
          '1 red pepper, chopped',
          '1 tbsp olive oil',
          '½ tsp dried oregano',
          '1 cup cherry tomatoes, halved',
          'Handful of rocket or spinach',
        ],
      },
      {
        section: 'For the dressing',
        items: [
          '1 tbsp olive oil',
          'Juice of ½ lemon',
          'Pinch sea salt and black pepper',
          'Optional: 1 tbsp fresh parsley, chopped',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 200°C.',
      'Place courgette and red pepper on a baking tray. Drizzle with oil and oregano.',
      'Roast for 18–20 minutes until tender.',
      'Whisk olive oil, lemon juice, salt and pepper to make the dressing.',
      'Divide lentils between two bowls.',
      'Add roasted vegetables, cherry tomatoes and greens.',
      'Drizzle with dressing, toss gently and finish with parsley.',
    ],
    gutHealthNote: 'Lentils provide plant protein and fibre that support gut microbiome diversity, while vegetables and olive oil reflect Mediterranean eating patterns linked to digestive health.',
    nutrition: { calories: 300, protein: 11, carbs: 24, fat: 18, fibre: 9 },
  },
  {
    id: 'mediterranean-seabass',
    name: 'Mediterranean Seabass with Roasted Vegetables',
    category: 'dinner',
    tags: ['Mediterranean-Style', 'High Protein', 'Nutrient-Dense', 'Gluten-Free', 'Dairy-Free', 'Omega-3 Rich'],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    image: IMAGES.seabass,
    description: 'Light, flaky seabass roasted with Mediterranean vegetables, lemon and fresh herbs.',
    ingredients: [
      {
        items: [
          '2 seabass fillets (about 150 g each)',
          '1 courgette, sliced',
          '1 red pepper, sliced',
          '1 cup cherry tomatoes',
          '1 tbsp olive oil',
          'Juice of ½ lemon',
          '1 tsp dried oregano',
          'Small handful fresh parsley, chopped',
          'Salt and black pepper, to taste',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 200°C.',
      'Place courgette, red pepper and tomatoes on a baking tray.',
      'Drizzle with ½ tbsp olive oil, salt, pepper and oregano. Toss to coat.',
      'Roast vegetables for 10 minutes.',
      'Place seabass on the tray. Drizzle fish with remaining oil and lemon juice.',
      'Roast for a further 10–12 minutes until fish flakes easily.',
      'Sprinkle with fresh parsley before serving.',
    ],
    servingSuggestion: 'Serve with quinoa or wild rice for a more filling, balanced meal.',
    gutHealthNote: 'Seabass provides high-quality protein and omega-3 fatty acids, while vegetables and olive oil reflect the Mediterranean diet pattern linked to reduced inflammation.',
    nutrition: { calories: 320, protein: 32, carbs: 8, fat: 18, fibre: 2 },
  },
  {
    id: 'sweet-potato-ginger-soup',
    name: 'Sweet Potato & Ginger Soup',
    category: 'dinner',
    tags: ['Gluten-Free', 'Dairy-Free', 'Vegan-Friendly'],
    prepTime: 15,
    cookTime: 35,
    servings: 3,
    image: IMAGES.sweetPotatoSoup,
    description: 'A velvety, warming soup with sweet potato, carrots and ginger — comforting and easy to digest.',
    ingredients: [
      {
        items: [
          '3 medium sweet potatoes, peeled and diced',
          '2 carrots, chopped',
          '1 small onion, chopped',
          '1 tbsp fresh grated ginger',
          '750 ml vegetable broth',
          '1 tbsp olive oil',
          '½ tsp turmeric',
          'Salt and black pepper, to taste',
          '50–100 ml unsweetened coconut milk or almond milk (optional, for creaminess)',
        ],
      },
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Add onion and sauté for 3–4 minutes until softened.',
      'Stir in ginger and turmeric; cook 1 minute until fragrant.',
      'Add sweet potatoes and carrots.',
      'Pour in vegetable broth; bring to a gentle boil.',
      'Reduce heat and simmer for 25–30 minutes until vegetables are soft.',
      'Blend until smooth.',
      'Stir in plant-based milk for a creamier texture if desired.',
      'Season with salt and pepper.',
    ],
    tip: 'If you are sensitive to onion, use the green part of a leek as a lower FODMAP alternative.',
    servingSuggestion: 'Serve with toasted sourdough or gluten-free bread.',
    gutHealthNote: 'Sweet potatoes provide fibre and beta-carotene, while ginger has traditionally been used to support digestion and reduce digestive discomfort.',
    nutrition: { calories: 200, protein: 3, carbs: 31, fat: 7, fibre: 6 },
  },

  // ── SNACKS ─────────────────────────────────────────────────────────────────
  {
    id: 'apple-almond-butter-plate',
    name: 'Apple Almond Butter Snack Plate',
    category: 'snacks',
    tags: ['Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense'],
    prepTime: 3,
    cookTime: 0,
    servings: 1,
    image: IMAGES.applePeanutButter,
    description: 'A quick, naturally sweet snack combining crisp apple, creamy almond butter and crunchy seeds.',
    ingredients: [
      {
        items: [
          '1 apple, sliced',
          '1 tbsp almond butter',
          '1 tbsp pumpkin seeds',
          '1 tbsp chopped walnuts',
          '½ tsp cinnamon',
          'Optional: small drizzle of raw honey',
        ],
      },
    ],
    instructions: [
      'Arrange apple slices in a bowl.',
      'Dollop almond butter over the apples.',
      'Sprinkle with pumpkin seeds, walnuts and cinnamon.',
      'Add a drizzle of raw honey if desired. Serve immediately.',
    ],
    gutHealthNote: 'Apples contain pectin, a prebiotic fibre that feeds beneficial gut bacteria, while nuts and seeds provide healthy fats and additional fibre.',
    nutrition: { calories: 260, protein: 7, carbs: 25, fat: 17, fibre: 6 },
  },
  {
    id: 'date-nut-energy-balls',
    name: 'Protein Date & Nut Energy Balls',
    category: 'snacks',
    tags: ['Vegan-Friendly', 'Gluten-Free', 'Dairy-Free', 'Refined Sugar-Free', 'High Fibre', 'Nutrient-Dense'],
    prepTime: 15,
    cookTime: 0,
    servings: 10,
    servingNote: 'Makes 10 balls',
    image: IMAGES.energyBalls,
    description: 'No-bake energy balls made with Medjool dates, almonds and cocoa — naturally sweet and nutrient-dense.',
    ingredients: [
      {
        items: [
          '1 cup Medjool dates, pitted',
          '½ cup almonds',
          '¼ cup peanut butter or almond butter',
          '2 tbsp chia seeds',
          '2 tbsp unsweetened cocoa powder',
          '1 tbsp coconut oil',
          '1 tsp vanilla extract',
          'Optional: 1 tbsp water if mixture is too dry',
          'Optional: 2 tbsp shredded coconut for rolling',
        ],
      },
    ],
    instructions: [
      'Pulse almonds in a food processor until finely chopped.',
      'Add dates, nut butter, chia seeds, cocoa powder, coconut oil and vanilla.',
      'Blend until a sticky dough forms. Add 1 tbsp water if too dry.',
      'Roll the mixture into 10 small balls.',
      'Optional: roll in shredded coconut.',
      'Refrigerate in an airtight container for up to 1 week.',
    ],
    gutHealthNote: 'Dates provide natural fibre that supports digestion, while nuts and seeds add healthy fats and plant protein for sustained energy.',
    nutrition: { calories: 120, protein: 3, carbs: 12, fat: 7, fibre: 2 },
  },
  {
    id: 'turmeric-roasted-chickpeas',
    name: 'Turmeric Roasted Chickpeas',
    category: 'snacks',
    tags: ['High Fibre', 'Gluten-Free', 'Dairy-Free', 'Vegan-Friendly'],
    prepTime: 5,
    cookTime: 25,
    servings: 2,
    image: IMAGES.roastedChickpeas,
    description: 'Crunchy, golden chickpeas spiced with turmeric and paprika — a satisfying high-fibre snack.',
    ingredients: [
      {
        items: [
          '1 can chickpeas, drained and rinsed',
          '1 tbsp olive oil',
          '½ tsp turmeric',
          '½ tsp paprika',
          'Pinch of sea salt and black pepper',
        ],
      },
    ],
    instructions: [
      'Preheat oven to 200°C.',
      'Pat chickpeas dry thoroughly with a paper towel.',
      'Toss with olive oil, turmeric, paprika, salt and pepper.',
      'Spread on a baking tray and roast for 20–25 minutes until crispy.',
    ],
    tip: 'If chickpeas are difficult to digest, substitute with roasted pumpkin seeds.',
    gutHealthNote: 'Chickpeas provide fibre and plant protein, while turmeric contains curcumin — a compound commonly used in anti-inflammatory cooking.',
    nutrition: { calories: 190, protein: 7, carbs: 20, fat: 9, fibre: 6 },
  },
];

export const ALL_TAGS = Array.from(new Set(recipes.flatMap(r => r.tags))).sort();

export const CATEGORIES: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All Recipes' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snacks', label: 'Snacks' },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(r => r.id === id);
}

export function filterRecipes(opts: {
  category?: Category | 'all';
  tags?: string[];
  query?: string;
  maxPrepTime?: number;
}): Recipe[] {
  return recipes.filter(r => {
    if (opts.category && opts.category !== 'all' && r.category !== opts.category) return false;
    if (opts.tags?.length && !opts.tags.every(t => r.tags.includes(t))) return false;
    if (opts.maxPrepTime && r.prepTime + r.cookTime > opts.maxPrepTime) return false;
    if (opts.query) {
      const q = opts.query.toLowerCase();
      if (
        !r.name.toLowerCase().includes(q) &&
        !r.description.toLowerCase().includes(q) &&
        !r.tags.some(t => t.toLowerCase().includes(q)) &&
        !r.ingredients.flatMap(i => i.items).some(i => i.toLowerCase().includes(q))
      ) return false;
    }
    return true;
  });
}
