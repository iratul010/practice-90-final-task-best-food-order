import FoodCard from "./FoodCard";

const AllFoodItems = () => {
 const data= [
    {
      "id": 1,
      "name": "Spaghetti Bolognese",
      "category": "Pasta",
      "description": "A classic Italian pasta dish featuring spaghetti noodles topped with a hearty meat sauce made with ground beef, tomatoes, onions, garlic, and herbs.",
      "ingredients": [
        "Spaghetti noodles",
        "Ground beef",
        "Tomato sauce",
        "Onion",
        "Garlic",
        "Olive oil",
        "Italian seasoning",
        "Salt",
        "Pepper",
        "Parmesan cheese"
      ],
      "instructions": [
        "Cook spaghetti noodles according to package instructions until al dente.",
        "In a large skillet, heat olive oil over medium heat and sauté minced garlic and diced onion until softened.",
        "Add ground beef to the skillet and cook until browned, breaking it up with a spoon.",
        "Stir in tomato sauce, Italian seasoning, salt, and pepper. Simmer for 10-15 minutes.",
        "Serve the meat sauce over cooked spaghetti noodles, garnished with grated Parmesan cheese."
      ],
      "image": "../src/assets/foods/photo- (1).jpg"
    },
    {
      "id": 2,
      "name": "Chicken Stir-Fry",
      "category": "Asian",
      "description": "A quick and flavorful stir-fry made with tender chicken breast, colorful vegetables, and a savory sauce.",
      "ingredients": [
        "Chicken breast",
        "Bell peppers",
        "Broccoli florets",
        "Carrots",
        "Snap peas",
        "Onion",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Sesame oil",
        "Cornstarch",
        "Rice",
        "Green onions"
      ],
      "instructions": [
        "Slice chicken breast into thin strips and marinate in a mixture of soy sauce, garlic, ginger, and cornstarch.",
        "Heat sesame oil in a wok or skillet over high heat. Stir-fry marinated chicken until cooked through.",
        "Add sliced vegetables to the skillet and stir-fry until crisp-tender.",
        "Stir in a sauce made with soy sauce, garlic, ginger, and cornstarch. Cook until sauce thickens.",
        "Serve hot over cooked rice, garnished with sliced green onions."
      ],
      "image": "../src/assets/foods/photo- (2).jpg"
    },
    {
      "id": 3,
      "name": "Caesar Salad",
      "category": "Salad",
      "description": "A classic salad made with crisp romaine lettuce, homemade croutons, shaved Parmesan cheese, and tangy Caesar dressing.",
      "ingredients": [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Anchovy fillets (optional)",
        "Lemon juice",
        "Dijon mustard",
        "Olive oil",
        "Garlic",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Wash and chop romaine lettuce into bite-sized pieces.",
        "In a large bowl, toss together lettuce, homemade croutons, and shaved Parmesan cheese.",
        "In a small bowl, whisk together Caesar dressing, lemon juice, Dijon mustard, minced garlic, salt, and pepper.",
        "Pour dressing over salad and toss to coat evenly. Optionally, add anchovy fillets for extra flavor.",
        "Serve immediately as a side dish or topped with grilled chicken for a main course."
      ],
      "image": "../src/assets/foods/photo- (3).jpg"
    },
    {
      "id": 4,
      "name": "Caesar Salad",
      "category": "Salad",
      "description": "A classic salad made with crisp romaine lettuce, homemade croutons, shaved Parmesan cheese, and tangy Caesar dressing.",
      "ingredients": [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Anchovy fillets (optional)",
        "Lemon juice",
        "Dijon mustard",
        "Olive oil",
        "Garlic",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Wash and chop romaine lettuce into bite-sized pieces.",
        "In a large bowl, toss together lettuce, homemade croutons, and shaved Parmesan cheese.",
        "In a small bowl, whisk together Caesar dressing, lemon juice, Dijon mustard, minced garlic, salt, and pepper.",
        "Pour dressing over salad and toss to coat evenly. Optionally, add anchovy fillets for extra flavor.",
        "Serve immediately as a side dish or topped with grilled chicken for a main course."
      ],
      "image": "../src/assets/foods/photo- (4).jpg"
    },
    {
      "id": 5,
      "name": "Caesar Salad",
      "category": "Salad",
      "description": "A classic salad made with crisp romaine lettuce, homemade croutons, shaved Parmesan cheese, and tangy Caesar dressing.",
      "ingredients": [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Anchovy fillets (optional)",
        "Lemon juice",
        "Dijon mustard",
        "Olive oil",
        "Garlic",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Wash and chop romaine lettuce into bite-sized pieces.",
        "In a large bowl, toss together lettuce, homemade croutons, and shaved Parmesan cheese.",
        "In a small bowl, whisk together Caesar dressing, lemon juice, Dijon mustard, minced garlic, salt, and pepper.",
        "Pour dressing over salad and toss to coat evenly. Optionally, add anchovy fillets for extra flavor.",
        "Serve immediately as a side dish or topped with grilled chicken for a main course."
      ],
      "image": "../src/assets/foods/photo- (5).jpg"
    },
    {
      "id": 6,
      "name": "Caesar Salad",
      "category": "Salad",
      "description": "A classic salad made with crisp romaine lettuce, homemade croutons, shaved Parmesan cheese, and tangy Caesar dressing.",
      "ingredients": [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Anchovy fillets (optional)",
        "Lemon juice",
        "Dijon mustard",
        "Olive oil",
        "Garlic",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Wash and chop romaine lettuce into bite-sized pieces.",
        "In a large bowl, toss together lettuce, homemade croutons, and shaved Parmesan cheese.",
        "In a small bowl, whisk together Caesar dressing, lemon juice, Dijon mustard, minced garlic, salt, and pepper.",
        "Pour dressing over salad and toss to coat evenly. Optionally, add anchovy fillets for extra flavor.",
        "Serve immediately as a side dish or topped with grilled chicken for a main course."
      ],
      "image": "../src/assets/foods/photo- (6).jpg"
    },
    {
      "id": 7,
      "name": "Caesar Salad",
      "category": "Salad",
      "description": "A classic salad made with crisp romaine lettuce, homemade croutons, shaved Parmesan cheese, and tangy Caesar dressing.",
      "ingredients": [
        "Romaine lettuce",
        "Croutons",
        "Parmesan cheese",
        "Caesar dressing",
        "Anchovy fillets (optional)",
        "Lemon juice",
        "Dijon mustard",
        "Olive oil",
        "Garlic",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Wash and chop romaine lettuce into bite-sized pieces.",
        "In a large bowl, toss together lettuce, homemade croutons, and shaved Parmesan cheese.",
        "In a small bowl, whisk together Caesar dressing, lemon juice, Dijon mustard, minced garlic, salt, and pepper.",
        "Pour dressing over salad and toss to coat evenly. Optionally, add anchovy fillets for extra flavor.",
        "Serve immediately as a side dish or topped with grilled chicken for a main course."
      ],
      "image": "../src/assets/foods/photo- (7).jpg"
    }
  ]
  
  return (
    <div className="  " >
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center  ">
    {data.map((recipe, i) => (
      <FoodCard key={i} recipe={recipe} />
    ))}
    </ul>
  </div>
  );
};

export default AllFoodItems;