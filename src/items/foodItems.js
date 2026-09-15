import image1 from '../../src/assets/images/img1.avif';
import image2 from '../../src/assets/images/img2.avif';
import image3 from '../../src/assets/images/img3.avif';
import image4 from '../../src/assets/images/img4.avif';
import image5 from '../../src/assets/images/img5.avif';
import image6 from '../../src/assets/images/img6.avif';
import image7 from '../../src/assets/images/img7.avif';
import image8 from '../../src/assets/images/img8.avif';
import image9 from '../../src/assets/images/img9.avif';
import image10 from '../../src/assets/images/img10.avif';
import image11 from '../../src/assets/images/img11.avif';
import image12 from '../../src/assets/images/img12.avif';
// import healthy-homemade from '../src/assets/images/cheese-omelet.avif';
import image13 from '../../src/assets/images/img13.avif';
import image14 from '../../src/assets/images/img14.avif';
import image15 from '../../src/assets/images/img15.avif';
import image16 from '../../src/assets/images/img16.avif';
import image17 from '../../src/assets/images/img17.avif';
import image18 from '../../src/assets/images/img18.avif';
import image19 from '../../src/assets/images/img19.avif';
import image20 from '../../src/assets/images/img20.avif';
import image21 from '../../src/assets/images/img21.avif';
import image22 from '../../src/assets/images/img22.avif';
import image23 from '../../src/assets/images/img23.avif';
import image24 from '../../src/assets/images/img24.avif';
// import image25 from '../src/assets/images/veggie-Burger.avif';



const foodItems = [

    {
        "id": 1,
        "food_name": "Pancakes",
        "food_category": "Breakfast",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image1,
        "price": 499,
        "food_description": "Fluffy golden pancakes served warm with a delicious sweet topping."
    },

    {
        "id": 2,
        "food_name": "Chicken Soup",
        "food_category": "Soup",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image2,
        "price": 399,
        "food_description": "Warm and comforting chicken soup made with tender chicken and flavorful herbs."
    },

    {
        "id": 3,
        "food_name": "Minestrone Soup",
        "food_category": "Soup",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image3,
        "price": 349,
        "food_description": "Hearty Italian vegetable soup packed with fresh vegetables, herbs, and pasta."
    },

    {
        "id": 4,
        "food_name": "Spaghetti Carbonara",
        "food_category": "pasta",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image4,
        "price": 999,
        "food_description": "Classic spaghetti tossed in a creamy egg and cheese sauce with savory bacon."
    },

    {
        "id": 5,
        "food_name": "Veg Alfredo Pasta",
        "food_category": "Pasta",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image5,
        "price": 899,
        "food_description": "Creamy Alfredo pasta tossed with fresh vegetables and rich Parmesan sauce."
    },

    {
        "id": 6,
        "food_name": "Chicken Alfredo Pasta",
        "food_category": "Pasta",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image6,
        "price": 1099,
        "food_description": "Creamy Alfredo pasta served with tender chicken and a rich Parmesan sauce."
    },

    {
        "id": 7,
        "food_name": "Paneer Butter Masala",
        "food_category": "Main",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image7,
        "price": 799,
        "food_description": "Soft paneer cooked in a rich, creamy tomato and butter-based Indian gravy."
    },

    {
        "id": 8,
        "food_name": "Chicken Biryani",
        "food_category": "Main",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image8,
        "price": 1199,
        "food_description": "Fragrant basmati rice layered with tender chicken, aromatic spices, and fresh herbs."
    },

    {
        "id": 9,
        "food_name": "Margherita Pizza",
        "food_category": "Pizza",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image9,
        "price": 649,
        "food_description": "Classic Italian pizza topped with tomato sauce, mozzarella, and fresh basil."
    },

    {
        "id": 10,
        "food_name": "Pepperoni Pizza",
        "food_category": "Pizza",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image10,
        "price": 749,
        "food_description": "Crispy pizza topped with melted cheese, rich tomato sauce, and savory pepperoni."
    },

    {
        "id": 11,
        "food_name": "Veggie Burger",
        "food_category": "Burger",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image11,
        "price": 499,
        "food_description": "Juicy vegetable patty layered with fresh lettuce, tomato, and creamy burger sauce."
    },

    {
        "id": 12,
        "food_name": "Chicken Burger",
        "food_category": "Burger",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image12,
        "price": 599,
        "food_description": "Tender chicken patty topped with fresh vegetables, cheese, and signature burger sauce."
    },

    {
        "id": 13,
        "food_name": "Tomato Soup",
        "food_category": "Soup",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image13,
        "price": 299,
        "food_description": "Smooth and comforting tomato soup made with ripe tomatoes and aromatic herbs."
    },

    {
        "id": 14,
        "food_name": "Egg Sandwich",
        "food_category": "Breakfast",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image14,
        "price": 349,
        "food_description": "Freshly prepared sandwich filled with seasoned eggs, crisp vegetables, and creamy sauce."
    },

    {
        "id": 15,
        "food_name": "Mushroom Soup",
        "food_category": "Soup",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image15,
        "price": 349,
        "food_description": "Creamy mushroom soup prepared with tender mushrooms, herbs, and rich seasoning."
    },

    {
        "id": 16,
        "food_name": "Chicken Tikka Masala",
        "food_category": "Main",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image16,
        "price": 1199,
        "food_description": "Tender grilled chicken pieces simmered in a creamy, spiced tomato masala."
    },

    {
        "id": 17,
        "food_name": "Cheese Omelette",
        "food_category": "Breakfast",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image17,
        "price": 399,
        "food_description": "Fluffy eggs folded with melted cheese and seasoned with aromatic herbs."
    },

    {
        "id": 18,
        "food_name": "Fettuccine Alfredo",
        "food_category": "Pasta",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image18,
        "price": 949,
        "food_description": "Silky fettuccine pasta coated in a creamy Alfredo sauce with Parmesan cheese."
    },

    {
        "id": 19,
        "food_name": "Garlic Bread",
        "food_category": "Pizza",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image19,
        "price": 299,
        "food_description": "Crispy toasted bread brushed with garlic butter and finished with aromatic herbs."
    },

    {
        "id": 20,
        "food_name": "Fish and Chips",
        "food_category": "Main",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image20,
        "price": 1099,
        "food_description": "Crispy golden battered fish served with crunchy fries and a flavorful dipping sauce."
    },

    {
        "id": 21,
        "food_name": "Hash Browns",
        "food_category": "Breakfast",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image21,
        "price": 249,
        "food_description": "Golden and crispy shredded potatoes cooked to perfection for a delicious breakfast side."
    },

    {
        "id": 22,
        "food_name": "Vegetable Soup",
        "food_category": "Soup",
        "food_type": "Veg",
        "food_quantity": 1,
        "food_image": image22,
        "price": 329,
        "food_description": "Light and flavorful soup filled with fresh seasonal vegetables and aromatic herbs."
    },

    {
        "id": 23,
        "food_name": "Egg Fried Rice",
        "food_category": "Main",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image23,
        "price": 599,
        "food_description": "Fragrant rice stir-fried with scrambled eggs, vegetables, and savory Asian seasonings."
    },

    {
        "id": 24,
        "food_name": "Hawaiian Pizza",
        "food_category": "Pizza",
        "food_type": "Non Veg",
        "food_quantity": 1,
        "food_image": image24,
        "price": 799,
        "food_description": "Sweet and savory pizza topped with juicy pineapple, ham, melted cheese, and tomato sauce."
    },

    // {
    //     "id": 25,
    //     "food_name": "Pasta Primavera",
    //     "food_category": "Pasta",
    //     "food_type": "Veg",
    //     "food_quantity": 1,
    //     "food_image": image25,
    //     "price": 899,
    //     "food_description": "Fresh pasta tossed with colorful seasonal vegetables in a light and flavorful sauce."
    // }

];

export default foodItems;