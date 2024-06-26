import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import http from '@/api';  // Импортируйте ваш модуль http
import { getProduct } from '@/service/product.service';


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
        const response = await getProduct(100, 1); // Пример использования limit и page
        console.log('Response:', response);
        setCategories(response.data.data.categories); // Предполагается, что категории находятся в response.data.categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Select
      showSearch
      placeholder="Category"
      optionFilterProp="label"
      className='w-[200px] h-[47px]'
      onChange={onChange}
      onSearch={onSearch}
      options={categories.map((category: any) => ({
        value: category.id, // Подставьте правильные ключи из данных категорий
        label: category.name, // Подставьте правильные ключи из данных категорий
      }))}
    />
  );
};

export default App;
