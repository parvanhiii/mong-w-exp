const mongoose=require('mongoose');
const Product=require('./models/product');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
}

// const p =new Product({
//     name:'Grape',
//     price:1.99,
//     category:'fruit'
// })
// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e)
// })
const seedProducts=[
    {
     name:'Fairy Eggplant',
     price:10,
     category:'vegetable'
 
    },
    {
        name:'Mango',
        price:20,
        category:'fruit'
    },
    {
        name:'Apple',
        price:30,
        category:'fruit'
    }
]
Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})