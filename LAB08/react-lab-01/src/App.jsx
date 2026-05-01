import './App.css';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import Banner from './components/Banner';
import Button from './components/Button';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <NavBar />

      <main>
        <Greeting />
        <Banner />

        <section className="section">
          <h2>Our Product Card</h2>
          <Card />
        </section>

        <section className="section">
          <h2>Custom Buttons</h2>
          <div className="button-group">
            <Button text="Small Button" type="primary" size="small" />
            <Button text="Medium Button" type="secondary" size="medium" />
            <Button text="Large Button" type="danger" size="large" />
          </div>
        </section>

        <section className="section">
          <h2>Customer Testimonial</h2>
          <Testimonial />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;