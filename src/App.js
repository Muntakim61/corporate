
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './component/header';
import AppHero from './component/hero';
import AppAbout from './component/about';
import AppServices from './component/services';
import AppWorks from './component/works';
import AppTeams from './component/teams';
import AppTestimonials from './component/testimonials';
import AppPricing from './component/pricing';
import AppBlog from './component/blog';
import AppContact from './component/contact';
import AppFooter from './component/footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
