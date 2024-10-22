import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'The team at InnovaTech Systems transformed our IT infrastructure, making our systems more efficient and secure. Their expert solutions have been key in driving our growth, and their customer service is unmatched!',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Partnering with InnovaTech Systems has been a game-changer for our business. Their innovative technology solutions streamlined our operations, saving us both time and money. We couldn’t be more pleased with the results.',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'InnovaTech Systems exceeded our expectations with their tailored tech solutions. Their professionalism and in-depth knowledge helped us solve complex challenges, and we’re now more productive than ever.',
    designation: 'CEO'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">What clients say about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;