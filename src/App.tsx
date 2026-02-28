import Header from './components/Header';
import Hero from './components/Hero';
import { LatestVideos, PopularVideos } from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <LatestVideos />
        <PopularVideos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
