import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';
import EditionArticles from './page/EditionArticles';
import ArticleDetail from './page/ArticleDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Articles from './page/Articles';
import ContributorCards from './page/ContributorCards';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editions/:id/articles" element={<EditionArticles/>} />
        <Route path="/articles/:id" element={<ArticleDetail/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/editors" element={<ContributorCards/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
