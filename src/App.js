import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
import AppHeader from "./component/header";
import AppHero from "./component/hero";
import AppAbout from "./component/about";
import AppServices from "./component/services";
import AppWorks from "./component/works";
import AppTeams from "./component/teams";
import AppTestimonials from "./component/testimonials";

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      {/* <Button variant="secondary">Secondary</Button> */}
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
      </main>
    </div>
  );
}

export default App;
