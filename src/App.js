import {Header, IntroText, Welcome, Mood, PlayerSection, Bio, Platforms, Footer} from './component/common/index';

function App() {
  return (
    <div className='bg-gray-950'>
      <Header />
      <Bio />
      <Welcome />
      <IntroText />
      <PlayerSection />
      <Mood />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;
