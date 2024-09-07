import { useState } from "react"


function ValidatedShoppingListForm({addItem}){

  const [formData, setFormData] = useState({product : "", quantity:0})
 
  const handleChange = (evt) =>{
    const productData = evt.target.name;
    const productValue = evt.target.value;
    setFormData(currData =>{
      currData[productData] = productValue;
      return {...currData}
    })
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      addItem(formData)
      setFormData({product : "", quantity:0})
  }
  return(
    <form onSubmit={handleSubmit}>
      <h1>Product is : {formData.product} and quantity is : {formData.quantity}</h1>
      <label htmlFor="product">Product name</label>
      <input 
        type="text" 
        placeholder="product name" 
        name="product" 
        id="product"
        onChange={handleChange}
        value={formData.product}
        />
      <label htmlFor="quantity">Product quantity</label>
      <input 
        type="number" 
        placeholder="1" 
        name="quantity" 
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
        />
        <button>Add Item</button>
    </form>
  )
}

export default ValidatedShoppingListForm