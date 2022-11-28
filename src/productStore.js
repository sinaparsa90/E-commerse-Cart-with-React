 
 const productsArray =[
{
    id: "1",
    title: "Coffee",
    price: 4.99
},
{
    id: "2",
    title: "SunGlasses",
    price: 9.99
},
{
    id: "3",
    title: "Camera",
    price: 49.99
}
 ];

 function getProductData(id){
    let productData= productsArray.find(prd => prd.id === id)
    if(productData === undefined){
        console.log("Product data does not exist:"+id)
        return undefined;
    }
    return productData
 }

 export { productsArray, getProductData};