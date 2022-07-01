import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  // console.log(request);
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documenaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
