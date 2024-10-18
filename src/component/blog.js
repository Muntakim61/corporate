import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.jpg'),
    time: '13th October 2024',
    title: 'Coffee Lovers',
    description: 'Coffee lovers are individuals passionate about coffee, savoring its rich aroma and diverse flavors. They often explore different brewing methods, beans, and origins, appreciating coffee as an art form and daily ritual.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    time: '12th October 2024',
    title: 'Tips for UI Design',
    description: 'Effective UI design focuses on simplicity, intuitive navigation, and consistent visuals. Prioritize user experience by using readable fonts, balanced spacing, clear call-to-action buttons, and responsive layouts.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '14th October 2024',
    title: 'Beautiful Day',
    description: 'A beautiful day often means clear skies, pleasant weather, and a peaceful atmosphere. It can evoke feelings of joy, gratitude, and inspiration, making simple moments feel special and uplifting.',
    link: 'https://www.twitter.com'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from our blog</h2>
          <div className="subtitle">Get our latest news from our blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;