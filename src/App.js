////////////////////////////////////AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0

import React, { useState, useEffect } from 'react';
import {BrowserRouter as  Router, Route, Routes,} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import BookDetail from './Components/BookDetail';
import BookList from './Components/BookList';
import FilterOptions from './Components/FilterOptions';

const API_KEY = 'AIzaSyByMtJ1mpylPuE9Yr9HreMl5Bxzr7FTTS0';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery !== "" ) {
      setBooks([]);
      setTotalBooks(0);
      fetchBooks();
    }
  }, [searchQuery, category, sorting]); //category, sorting

  const handleSearch = (query) => {
    if (query !== '') {
      setSearchQuery(query);
    }
  };
//&orderBy=${sorting}&printType=books&subject=${category}
const fetchBooks = async () => {
  const params = {
    q: `intitle:${searchQuery}${category !== 'all' ? `+subject:${category}` : ''}`,
    maxResults: 30,
    startIndex: books.length || 0,
    orderBy: sorting,
    key: API_KEY,
  }

  setLoading(true);
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.q}&maxResults=30&startIndex=${params.startIndex}&orderBy=${params.orderBy}&key=${params.key}`)
    const jsonData = await response.json();

    if (jsonData.items) {
      setBooks((prevBooks) => [...prevBooks, ...jsonData.items]);
      setTotalBooks(jsonData.totalItems);
    }
  } catch (error) {
    console.log('Error fetching books:', error);
  }
  setLoading(false);
};

  const handleLoadMore = () => {
    fetchBooks();
  };

  return (
    <Router>
      <div className="appContainer">
        <div className='header'>
          <h1 className='logo'>Search for book</h1>
          <SearchBar handleSearch={handleSearch} />
          <FilterOptions
            category={category}
            sorting={sorting}
            setCategory={setCategory}
            setSorting={setSorting}
          />
        </div> 
        <Routes>
          <Route path="/modsenTest"element={<BookList books={books} totalBooks={totalBooks} handleLoadMore={handleLoadMore} />}/>
          <Route path="/modsenTest/books/:id"element={<BookDetail books={books}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;





