import React, { useState } from 'react'
import Card from '../components/Card';
const SignUpp = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const submitProduct = () => {
        let productData = {
            productName, productPrice, productDescription, productCategory, productImage
        }
        // console.log(userData);

        let newAllProducts = [...allProducts, productData]
        setAllProducts(newAllProducts)
        console.log(newAllProducts)
        // let fruits = ["Pinapple", "orange", "pawpaw"]
        // let newFruit = [...fruits]
        // console.log(newFruit);
    }

    const deleteProduct = (index) => {
        // const filteredProducts = allProducts.filter((others,i)=>i !==index)
        const splicedProduct = allProducts.splice(index, 0)
        setAllProducts(splicedProduct)
    }
    return (
        <>
            <form>
                <h1>Sign Up here</h1>
                <input type="text" placeholder='Enter Your product name' onChange={(e) => { setProductName(e.target.value) }} />
                <input type="number" placeholder='Enter Your product price' onChange={(e) => { setProductPrice(e.target.value) }} />
                <input type="text" placeholder='Enter Your product description' onChange={(e) => { setProductDescription(e.target.value) }} />
                <input type="text" placeholder='Enter Your product category' onChange={(e) => { setProductCategory(e.target.value) }} />
                <input type="text" placeholder='Enter your product image' onChange={(e) => { setProductImage(e.target.value) }} />
                <button type='button' onClick={submitProduct}>Sign Up</button>
            </form>
            {
                allProducts.map((product, index) => (
                    <div key={index}>
                        <Card color="bg-danger" style="30rem"
                            title={product.productName}
                            mainTxt={product.productPrice}
                            image={product.productImage}
                            description={product.productDescription}
                            category={product.productCategory}
                        />
                        <button>Edit</button>
                        <button onClick={() => deleteProduct(index)}>Delete</button>
                    </div>
                ))}
        </>
    )
}
export default SignUpp



// Editing and Deleting
// Saving to Local Storage