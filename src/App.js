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
import NotFound from './page/NotFound';
import AboutUs from './page/AboutUs';



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
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
