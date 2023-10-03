// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import ListComponent from "../components/ListComponent";
import TodoComponent from "../components/TodoComponent";
import Box from '@mui/material/Box';

function TodoPage() {
  // Define state for the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // useEffect can be used for any side effects related to 'selectedCategory'
  useEffect(() => {
    // You can perform actions here when 'selectedCategory' changes
    // For example, you can fetch data based on the selected category
  }, [selectedCategory])

  // Event handler to set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  // Function to reset the selected category
  const resetCategory = () => {
    setSelectedCategory(null);
  }

  return (
    <Box>
      {/* Render the appropriate component based on whether a category is selected */}
      {selectedCategory ? (
        <TodoComponent category={selectedCategory} onReturn={resetCategory} />
      ) : (
        <ListComponent onCategoryClick={handleCategoryClick} />
      )}
    </Box>
  );
}

export default TodoPage;
