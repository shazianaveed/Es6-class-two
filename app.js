// // FIND AND FIND INDEX

// //why we use find?
// //why we use findindex?
// //Example with Array.
// //Example with Array of object
// //Example with custom function
// //interview question

// //1
// let data = [10,20,7 ,50,1,100];
// let result = data.find(function(item){
// return item<50;
// })
// console.log(result);


// //2
// let array = [10,20,7 ,50,1,100];
// let newArray = data.findIndex(function(item){
// return item<7;
// })
// console.log(newArray);

// //3

// let name = [10,20,7 ,50,1,100];
// let newName = data.find((item)=>item<7)
// console.log(newName);

// //4
// let variable =[
//     {id:10},
//     {id:8},
//     {id:50},
//     {id:1},
//     {id:100}
//     ]
//     function custom(item){
//         return item.id>50;
//     }
//     let variableNew=data.find(custom)
//     console.log(result);

    //ARRow function

    let data =[10,20,30,40,50]
    // function test(){
    //     return 1
    // }
    // let test2 = function(){
    //     return 1
    // }
    // let test3=()=>{
    //     return 1
    // }
    // console.log(test2());
    // console.log(test3());


    //2
    // let newData = data.map(function(item){
    //     return item*2
    // })
    // console.log(newData);




    let newData = data.map((item)=>item*2)
    console.log(newData);




    //CLASSES
class fruit{
name ="orange "
constructor()
    {
        console.log("constructor",this.name);
        
     }
     getFruit() {
    
        return "apple"
        
     }
    
    }
     let f1 = new fruit;
console.log(f1.getFruit());

    
    


    
    
    

