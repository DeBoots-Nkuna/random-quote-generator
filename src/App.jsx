import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import { QUOTES } from './assets/data.js';
import { useState } from 'react';
import Footer from './components/Footer';
import './index.css';

function App() {
  //use state
  const [randomNumber, setRandomNumber] = useState(0);
  let number = 0;

  function handleSelect() {
    console.log('button is clicked');
    //generating random number
    number = Math.floor(Math.random() * 10);
    //changing state
    setRandomNumber(number);
    console.log('random number generated: ', number);
  }
  return (
    <main>
      {/* Header */}
      <section>
        <Header />
      </section>
      <section>
        <div className="box">
          <QuoteCard
            quote={QUOTES[randomNumber].quote}
            author={QUOTES[randomNumber].author}
          />
        </div>
        {/* button quote generator */}
        <QuoteButton onSelect={handleSelect} />
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
export default App;
