import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Our design adapts faster than a cat landing on its feet. Whether it is a desktop, tablet, or phone, your site will look flawless on every screen.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'We don’t just think outside the box, we redesign the box itself! Bold, modern, and tailor-made to turn heads.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'Like a ninja in the night, our SEO makes sure your site sneaks to the top of search results – invisibly powerful, but impossible to ignore.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Crystal-clear visuals that pop! Your website will shine brighter than a diamond on a 4K screen. No squinting required.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description: 'From Chrome to Safari, Firefox to Edge, your site will play nice with all the browsers—no awkward glitches or browser tantrums.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Got questions? We’ve got answers—faster than you can say "I need help." Our support team is always ready to save the day!'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;