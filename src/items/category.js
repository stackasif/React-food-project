import burger from '../assets/burger.webp'
import dessert from '../assets/dessert.webp'
import friedchik from '../assets/fried-chik.webp'
import pizza from '../assets/pizza.webp'
import wrapfood from '../assets/wrap-food.webp'

 const category=[
    {
        id:1,
        name:'All Items',
        items:101 ,
        images: burger
    },
     {
        id:2,
        name:'Burgers',
        items:24,
        images: burger
    },
     {
        id:3,
        name:'Pizza',
        items:18 ,
        images: pizza
    },
     {
        id:4,
        name:'Fried chicken',
        items:15,
        images: friedchik
    },
     {
        id:5,
        name:'Wraps',
        items:12,
        images: wrapfood
    },
     {
        id:6,
        name:'Desserts',
        items:20,
        images: dessert
    }
]

export default category;