import React, { useState, useEffect } from 'react';
import ListComponent from "../components/ListComponent";
import TodoComponent from "../components/TodoComponent";
import Box from '@mui/material/Box';

function TodoPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {

  }, [selectedCategory])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  const resetCategory = () => {
    setSelectedCategory(null);
  }

  return (
    <Box
    >
      {selectedCategory ? (
        <TodoComponent category={selectedCategory} onReturn={resetCategory} />
      ) : (
        <ListComponent onCategoryClick={handleCategoryClick} />
      )}
    </Box>
  );
}

export default TodoPage;
