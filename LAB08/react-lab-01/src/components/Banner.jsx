import Button from "./Button";

function Banner() {
  return (
    <section className="banner" id="home">
      <h1>Build Your Future with React JS</h1>
      <p>Learn components, props, styling, and UI development step by step.</p>

      <Button text="Get Started" type="primary" size="large" />
    </section>
  );
}

export default Banner;