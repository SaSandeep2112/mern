const reviewModel = require('../models/reviewsModel.js')

const getReviews= async(req,res)=>{
    try {
        const reviews =  await reviewModel.find();
        res.status(200).json({
            success:true,
            data:reviews,
        });
    } catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
        })
    }
}

const addReview =  async(req,res) =>{
    try{
        const review = await reviewModel.create(req.body);
        res.status(200).json({
            success:true,
            data:review,
        });
    } catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
        })
    }
}

const replaceReview = async(req,res)=>{
    try{
    const  reqId = req.params.id
    const data = {...req.body,_id:reqId}
    const result =  await reviewModel.findOneAndReplace({_id: reqId},data)
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

const removeReview =  async (req,res) =>{
    try{
        const reqId = req.params.id;
        const data = {...req.body,_id:reqId}
        const result =  await reviewModel.findOneAndDelete({_id: reqId},data)
        res.json({
            status:"sucess",
            results:1,
            data:{
                reviews: data,
            }
        })
    } catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:JSON.stringify(error)
        })

    }
}




module.exports = {
    getReviews,
    addReview,
   replaceReview,
   removeReview
}