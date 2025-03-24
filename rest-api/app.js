const express = require('express');
var sleep = require('sleep');
const app = express ();
app.use(express.json());
const port= process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });

const resList = {
    data : [
      {
        id: "1",
        name: "Meghana Foods",
        cuisine: "Biryani, North Indian, Asian",
        rating: "4.4",
        deliveryTime: "38 mins",
        promoted: true
      },
      {
        id: "2",
        name: "ABC Foods",
        cuisine: "Biryani, South Indian, Asian",
        rating: "4.3",
        deliveryTime: "30 mins",
        promoted: false
      },
      {
        id: "3",
        name: "KFC Foods",
        cuisine: "chicken",
        rating: "4.2",
        deliveryTime: "35 mins",
        promoted: false
      },
      {
        id: "4",
        name: "Foo Foods",
        cuisine: "chicken",
        rating: "3.4",
        deliveryTime: "35 mins",
        promoted: true
      },
      {
        id: "5",
        name: "Bar Foods",
        cuisine: "chicken",
        rating: "3.8",
        deliveryTime: "35 mins",
        promoted: false
      }
    ]
  }

resItem = {
    name : "kfc",
    costForTwo: "400",

    
    "menu" : 
    [{
        "title" : "Recommended",
        "id" : 1,
        "cards" : [
            {   id: 1,
                name: "Biryani",
                price: "120",
                description: "Best biryani available"
            },
            {
                id: 2,
                name: "LemonRice",
                price: "140",
                description: "Best lemon rice available"
            },
            {
                id: 3,
                name: "Chicken",
                price: "180",
                description: "Best chicken available"
            }
        ]
    },
    {
        "title" : "Lassy drinks",
        "id" : 2,
        "cards" : [
            {   id: 1,
                name: "concktail",
                price: "120",
                description: "Best cocktail available"
            },
            {
                id: 2,
                name: "Lemon Soda",
                price: "140",
                description: "Best lemon soda available"
            },
            {
                id: 3,
                name: "Orange",
                price: "180",
                description: "Best orange soda available"
            }
        ]
    }]
}
app.get("/restaurants", (request, response) => {
    sleep.sleep(1);
    response.json(resList);
});

app.get("/restaurants/:resId", (request, response) => {
    sleep.sleep(1);
    response.json(resItem);
});