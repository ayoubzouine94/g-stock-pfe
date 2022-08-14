
import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import AddArticle from './pages/article/AddArticle';
import ArticleList from './pages/article/ArticleList';
import './App.css';

import AddClient from './pages/client/AddClient';
import ClientList from './pages/client/ClientList';
import UpdateArticle from './pages/article/UpdateArticle';
import Menu from './pages/Menu';
import AddFournisseur from './pages/fournisseurs/AddFournisseur';
import FournisseurList from './pages/fournisseurs/FournisseurList';




function App() {
  
  return (
 
      <BrowserRouter>
      <Navbar />
        <Routes>
         

          
          <Route path='/articlelist' element={  <ArticleList />}></Route>
          <Route path='/addarticle' element={<AddArticle />}></Route>
          <Route path='/addclient' element={<AddClient />}></Route>
          <Route path='/clientlist' element={<ClientList />}></Route>
         <Route path='/editarticle/:id' element={<UpdateArticle />}></Route> 
          <Route path='/addfournisseur' element={<AddFournisseur />}></Route>
          <Route path='/fournisseurlist' element={<FournisseurList />}></Route>
          <Route path='/' element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
           
  
  );
}

export default App;
