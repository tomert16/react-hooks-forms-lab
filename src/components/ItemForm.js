import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

const [category, setCategory] = useState("Produce");
const [name, setName] = useState("");

console.log(name);

function handleDropdownChange(event){
  setCategory(event.target.value)
}

function handleFormSubmit(e) {
  e.preventDefault();
  onItemFormSubmit({
    id: uuid(),
    name,
    category,
  });
}


function handleFormChange(event){
  setName(event.target.value)
}
console.log(handleFormSubmit);

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleDropdownChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
