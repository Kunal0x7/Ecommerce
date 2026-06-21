const products = [
  // Grocery
{
    id: "g1",
    name: "Eggs",
    category: "grocery",
    price: 90,
    description: "Fresh farm eggs sourced from healthy poultry, rich in protein and essential nutrients. Perfect for breakfast, baking, and cooking, ensuring great taste, quality, and consistent freshness in every serving.",
    image: "/assets/products/grocery/eggs.png"
  },
  {
    id: "g2",
    name: "Moong Dal",
    category: "grocery",
    price: 110,
    description: "Premium quality moong dal, carefully cleaned and packed to retain natural nutrients. Ideal for preparing healthy meals, soups, and traditional dishes with rich flavor, smooth texture, and high protein content.",
    image: "/assets/products/grocery/moong.png"
  },
  {
    id: "g3",
    name: "Rice",
    category: "grocery",
    price: 70,
    description: "High-quality long grain rice with excellent aroma and texture. Perfect for daily meals, biryanis, and special dishes, offering consistent cooking results, softness, and great taste with every preparation.",
    image: "/assets/products/grocery/rice.png"
  },
  {
    id: "g4",
    name: "Salt",
    category: "grocery",
    price: 25,
    description: "Refined iodized salt essential for everyday cooking, ensuring proper taste and health benefits. Finely processed for purity, it dissolves easily and enhances the flavor of all your favorite dishes.",
    image: "/assets/products/grocery/salt.png"
  },
  {
    id: "g5",
    name: "Wheat Flour",
    category: "grocery",
    price: 55,
    description: "Freshly milled wheat flour made from high-quality grains, perfect for soft rotis and baked items. Rich in fiber and nutrients, it provides a wholesome and healthy base for daily meals.",
    image: "/assets/products/grocery/wheat-flour.png"
  },

  // Juice
  {
    id: "j1",
    name: "Orange Juice",
    category: "juice",
    price: 80,
    description: "Fresh and tangy orange juice made from ripe oranges. Packed with vitamin C and refreshing flavor, perfect for boosting energy and hydration during breakfast or throughout the day.",
    image: "/assets/products/juice/orange-juice.png"
  },
  {
    id: "j2",
    name: "Apple Juice",
    category: "juice",
    price: 90,
    description: "Smooth and naturally sweet apple juice prepared from selected apples. Offers a refreshing taste and essential nutrients, making it a great beverage choice for all age groups.",
    image: "/assets/products/juice/apple-juice.png"
  },
  {
    id: "j3",
    name: "Mango Juice",
    category: "juice",
    price: 100,
    description: "Rich and delicious mango juice made from ripe tropical mangoes. Known for its thick texture and sweet flavor, it provides a refreshing and energizing drink option anytime.",
    image: "/assets/products/juice/mango-juice.png"
  },
  {
    id: "j4",
    name: "Mixed Fruit Juice",
    category: "juice",
    price: 95,
    description: "A refreshing blend of multiple fruits combined for a balanced taste. Offers a mix of nutrients, vitamins, and natural sweetness, making it a healthy and flavorful beverage choice.",
    image: "/assets/products/juice/mixed-fruit-juice.png"
  },
  {
    id: "j5",
    name: "Pineapple Juice",
    category: "juice",
    price: 85,
    description: "Refreshing pineapple juice with a perfect balance of sweetness and tanginess. Rich in vitamins and enzymes, it supports digestion and provides a cooling, tropical drinking experience.",
    image: "/assets/products/juice/pineapple-juice.png"
  },

  // Fruits
  {
    id: "f1",
    name: "Apple",
    category: "fruits",
    price: 120,
    description: "Fresh and juicy apples sourced from premium farms. Known for their crisp texture and natural sweetness, they are ideal for snacking, salads, and maintaining a healthy lifestyle.",
    image: "/assets/products/fruits/apple.png"
  },
  {
    id: "f2",
    name: "Banana",
    category: "fruits",
    price: 60,
    description: "Naturally sweet bananas rich in potassium and energy. Perfect for quick snacks, smoothies, and breakfast options, offering a soft texture and essential nutrients for daily health.",
    image: "/assets/products/fruits/banana.png"
  },
  {
    id: "f3",
    name: "Mango",
    category: "fruits",
    price: 150,
    description: "Juicy and flavorful mangoes known as the king of fruits. Packed with sweetness and nutrients, they are perfect for desserts, juices, or enjoying fresh during the season.",
    image: "/assets/products/fruits/mango.png"
  },
  {
    id: "f4",
    name: "Orange",
    category: "fruits",
    price: 80,
    description: "Citrus-rich oranges loaded with vitamin C and refreshing flavor. Ideal for boosting immunity, making juices, or consuming fresh as a healthy and energizing fruit option.",
    image: "/assets/products/fruits/orange.png"
  },
  {
    id: "f5",
    name: "Grapes",
    category: "fruits",
    price: 90,
    description: "Fresh green grapes with a juicy and slightly tangy taste. Perfect for snacking or adding to salads, they provide antioxidants and essential nutrients for overall health.",
    image: "/assets/products/fruits/grapes.png"
  },

  // Vegetables
  {
    id: "v1",
    name: "Tomato",
    category: "vegetables",
    price: 40,
    description: "Fresh red tomatoes ideal for cooking, salads, and sauces. Known for their rich flavor and nutrients, they enhance the taste and color of a variety of dishes.",
    image: "/assets/products/vegetables/tomato.png"
  },
  {
    id: "v2",
    name: "Potato",
    category: "vegetables",
    price: 30,
    description: "Versatile and widely used potatoes suitable for frying, boiling, and baking. Rich in carbohydrates, they form a staple ingredient in many cuisines and recipes.",
    image: "/assets/products/vegetables/potato.png"
  },
  {
    id: "v3",
    name: "Onion",
    category: "vegetables",
    price: 35,
    description: "Fresh onions essential for cooking, providing strong flavor and aroma. Used in various dishes, they enhance taste and add depth to curries, salads, and sauces.",
    image: "/assets/products/vegetables/onion.png"
  },
  {
    id: "v4",
    name: "Carrot",
    category: "vegetables",
    price: 50,
    description: "Crunchy and sweet carrots rich in vitamins and antioxidants. Ideal for salads, cooking, and juices, they support eye health and overall nutrition.",
    image: "/assets/products/vegetables/carrot.png"
  },
  {
    id: "v5",
    name: "Broccoli",
    category: "vegetables",
    price: 70,
    description: "Fresh green broccoli packed with nutrients and fiber. Perfect for steaming, stir-frying, or salads, it supports a healthy diet with its rich vitamin content.",
    image: "/assets/products/vegetables/broccoli.png"
  },

  // Snacks
  {
    id: "s1",
    name: "Biscuits",
    category: "snacks",
    price: 30,
    description: "Crispy and light biscuits perfect for tea-time snacks. Made with quality ingredients, they offer a satisfying crunch and balanced sweetness for everyday enjoyment.",
    image: "/assets/products/snacks/biscuits.png"
  },
  {
    id: "s2",
    name: "Potato Chips",
    category: "snacks",
    price: 20,
    description: "Crunchy potato chips seasoned for a delicious snacking experience. Perfect for parties or casual munching, offering a crispy texture and satisfying salty flavor.",
    image: "/assets/products/snacks/chips.png"
  },
  {
    id: "s3",
    name: "Namkeen",
    category: "snacks",
    price: 40,
    description: "Spicy and flavorful Indian snack mix made with a variety of ingredients. Ideal for tea-time or casual snacking, offering a crunchy and satisfying taste.",
    image: "/assets/products/snacks/namkeen.png"
  },
  {
    id: "s4",
    name: "Chocolate Bar",
    category: "snacks",
    price: 50,
    description: "Rich and creamy chocolate bar made from high-quality cocoa. Perfect for satisfying sweet cravings, offering a smooth texture and delightful taste.",
    image: "/assets/products/snacks/chocolate.png"
  },
  {
    id: "s5",
    name: "Cookies",
    category: "snacks",
    price: 45,
    description: "Freshly baked cookies with a crispy exterior and soft center. Perfect for snacks or desserts, delivering a delicious blend of sweetness and flavor.",
    image: "/assets/products/snacks/cookies.png"
  }
];

export default products;