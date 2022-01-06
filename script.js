var box= document.createElement('div');
box.setAttribute('id','box');
box.innerHTML=compute;
var compute=foo();
var data= document.createElement('div');
data.setAttribute('id','result');
// i tried to create 931 variables to display the products in it in a listed format, atleast. but code was not working
// function createVariables(){
//     var accounts = [];
  
//     for (var i = 0; i <= 931; ++i) {
//         accounts[i] = document.createElement('div');
//     }
  
//     return accounts;
//   }
// i raised a query for some hours the api wasn't functioning properly. it wasn't resolved, one person contacted me and said that he will pass the query to another person. unfortunately time was against me.
// i tried my best to solve this using DOM. but for me all html elements should be created in DOM was a bit tougher.
// i could have solved to showcase the specific index value product details. but the question is not about that.
async function foo(){
    try {
        let res= await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
        let result= await res.json();
        console.log(result);
        //printing in console data
         for(var i in result){
         var brand= result[i].brand;
         var product= result[i].name;
         var price= `${result[i].price}${result[i].price_sign}`;
         var image= result[i].image_link;
         var product_link= result[i].product_link;
         var Description= result[i].description;
         console.log("-----------------------------------------------------------------------------------------");
            console.log(`${[i]}.The brand name is "${result[i].brand}". and the product is "${result[i].name}".`);
            console.log(` => price of the above product is "${result[i].price}${result[i].price_sign}".`);
            console.log(` => Image link of the product: "${result[i].image_link}".`);
            console.log(` => link of the above product : "${result[i].product_link}".`);
            console.log(` => Description of the product:`);
            console.log(`${result[i].description}`);
            data.innerHTML=`The brand name is "<u>${brand}</u>" and the product is "<u>${product}</u>". <br><br>
            The price of the above product is "<u>${price}</u>". <br><br>
            The image link of above product: <a href="${image}" target="_blank">image link</a>. <br><br>
            The product link : <a href="${product_link}" target="_blank">product link</a>. <br><br>
            Description of the product: <br><br>
            ${Description}.`
            }
    } catch (error) {
        console.log(error);
    }
}
document.body.append(box,data);

//anyways i did my best before 2.00 pm !!! thank you for reading this code.