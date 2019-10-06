const {Router} = require('express');
const Product = require('./model');

const router = new Router();

router.post('/product', (req,res) => {
    Product.create(req.body)
           .then(product => {
               return res.send(product)
           })
           .catch(console.error)
})


router.get('/product', (req,res) => {
    Product.findAll()
           .then(products =>{
               return res.send(products)
           })
           .catch(console.error)
})

router.get('/product/:id', (req,res) =>{
    Product.findOne(req.params.id)
           .then(product => {
              return res.send(product)
           })
           .catch(console.error)
})

router.put('/product/:id', (req,res) => {
    Product.findOne(req.params.id)
           .then(product => {
               product.update(req.body)
                  .then(product => {
                     return res.send(product)
                  })
                  .catch(console.error)
           })
           .catch(console.error)
})

router.delete('/product/:id', (req,res) => {
    Product.destroy({
        where:{
            id: req.params.id
        }    
    })
    .then(product =>{
        if(product){
            return res.send(product)
        }
        return res.status(404).end()
    })
    .catch(console.error)
})


module.exports= router;