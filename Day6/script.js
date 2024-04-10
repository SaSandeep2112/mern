// setTimeout(()=>{console.log('timeout 1')},0 );
// console.log('starting')
// setTimeout(()=>{console.log('timeout 2')},0 );
// console.log('intermediate')
// console.log('done');

// createOrder()
// function createOrder(x,fn){
//     console.log(x);
//   setTimeout(()=>fn('sandeep'),1000);
//   setTimeout(()=>fn('sandeep'),1020);

// }


// //makePayment()

// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap',makePayment);
// // the below code fragment can be found in:


//  const pr = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
        //         resolve("done-123");
        //     },5000);
        // })
        // console.log(pr);
        
        // pr.then((res)=>{
            //     console.log(res);
            // })




        //     const pr = new Promise((resolve,reject)=>{
        //        setTimeout(()=>{
        //            reject("some items are out of stock");
        //        },5000);
        //    })
        //    console.log(pr);
           
        //    pr.then((res)=>{
        //        console.log(res);
        //    }).catch((err)=>{
        //        console.log(err);
        //    })

        
        
        // const pr = new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         reject("some items are out of stock")},0);
        // })
        // setTimeout(()=>{console.log('first timeout....')},0);
        // //    console.log(pr);
           
        //    pr.then((res)=>{
        //        console.log(res);
        //    }).catch((err)=>{
        //        console.log(err);
        //    })


        setTimeout(function abc() {
            console.log('I am one');
        },0);

        const pr = new Promise((res,rej)=>{
            setTimeout(()=>{res('done')},0);
        })
        pr.then(function b(res){
            console.log('promise resolved',res);
        })
        setTimeout(function xyz(){
            console.log('I am two');
        },0);