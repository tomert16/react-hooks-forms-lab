import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categorySearch, setCategorySearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchFilter(event){
    setCategorySearch(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchFilter}/>
      <ul className="Items">
        {itemsToDisplay
        .filter((item) => {
          return categorySearch.toLowerCase() === "" ? item : item.name.toLowerCase().includes(categorySearch.toLowerCase());
        })
        .map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
          
      </ul>
    </div>
  );
}

export default ShoppingList;
