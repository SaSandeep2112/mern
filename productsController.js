const productModel = require('../models/productsModel.js');


const getAllProducts =async (req,res)=>{
   const {
    sort = 'price',page= 1 , pageSize =3, fields ="-info",...q
   } = req.query;

   const sortStr =  sort.split(',').join(' ');
   const fieldsStr = fields.split(',').join(' ');
   let query = productModel.find(q)
   query = query.sort(sortStr)

   const skip = pageSize*(page-1)
   query = query.skip(skip).limit(pageSize)
   query = query.select(fieldsStr)
   const products =await query;
   
    res.json({
        status:"success",
        results:products.length,
        data:{
            products
        }
    })
}


const addProduct = async (req,res)=>{
    try {
        const {_id, ...reqData} = req.body;
        const data = await productModel.create(reqData);
        console.log(data);
       
    console.log(req.body);
   
    res.json({
        status:"sucess",
        results:1,
        data:{
            products:data,
        }
    })
}
catch(err){
    res.status(403)
    console.log(err)


    res.json({
        status:"fail",
        message: JSON.stringify(err)
    })
}

}

const replaceProduct = async(req,res)=>{
    try{
    const  reqId = req.params.id
    const data = {...req.body,_id:reqId}
    const result =  await productModel.findOneAndReplace({_id: reqId},data)
    res.json({
        status:"sucess",
        results:1,
        data:{
            products: data,
        }
    })
}
catch(err){
    res.status(403)
    console.log(err)


    res.json({
        status:"fail",
        message: JSON.stringify(err)
    })
}
}

const removeProduct = async(req, res) => {
    try{
        const  reqId = req.params.id
        const data = {...req.body,_id:reqId}
        const result =  await productModel.findOneAndReplace({_id: reqId},data)
        res.json({
            status:"sucess",
            results:1,
            data:{
                products: data,
            }
        })
    }
    catch(err){
        res.status(403)
        console.log(err)
    
    
        res.json({
            status:"fail",
            message: JSON.stringify(err)
        })
    }
    
}


module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    removeProduct,
}