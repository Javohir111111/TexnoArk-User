import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import http from '@/api';  // Ensure you have your HTTP module
import { getProduct } from '@/service/category.service';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

// const getProduct = (limit: number, page: number) => {
//   return http.get(`/category/search?limit=${limit}&page=${page}`);
// };

const App: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getProduct(100, 1); // Example usage of limit and page
        console.log('Response:', response);
        setCategories(response.data.data.categories); // Assuming categories are in response.data.categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const formatTreeData = (categories: any) => {
    // Assuming categories is an array of objects with 'id', 'name', and optional 'children' properties
    return categories.map((category: any) => ({
      title: category.name,
      value: category.id,
      children: category.children ? formatTreeData(category.children) : [],
    }));
  };

  return (
    <TreeSelect
      showSearch
      placeholder="Category"
      treeDefaultExpandAll
      className='w-[200px] h-[47px]'
      onChange={onChange}
      onSearch={onSearch}
      treeData={formatTreeData(categories)}
    />
  );
};

export default App;
