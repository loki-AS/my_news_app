import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import axios from 'axios'
import NewsContent from './Components/NewsContent/NewsContent';
import Footer from './Components/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey={process.env.REACT_API_KEY}&category=${category}&pageSize=${loadMore}`)
        setNewsArray(news.data.articles)
        setNewsResults(news.data.totalResults)
    } catch(error){
        console.log(error)
    }
}

useEffect(() => {
  newsApi()
}, [newsResults, category, loadMore])

  return (
    <div className="App">
      <Nav setCategory={setCategory} />
      {newsResults && (
        <NewsContent 
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />        
      )}
      <Footer />
    </div>
  );
}

export default App;
