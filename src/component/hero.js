import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/bg-img-1.jpg'),
    title: 'The perfect design for your website',
    description: 'Custom-crafted designs that capture your brand’s essence, ensuring your website stands out and impresses.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    // image: require('../assets/images/img-hero2.jpg'),
    image: require('../assets/images/rbg-testimonial.jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Take control of your financial future today with expert guidance and a plan that grows with you.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/rbg-image-1.jpg'),
    title: 'Enjoy the Difference',
    description: 'Experience innovation and service that sets us apart—where excellence isn’t just expected, it’s guaranteed.',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;