import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Welcome from './components/Welcome';


const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;



const App = () => {
  const [word, setWord] = useState('')
  const [images, setImages] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images])
      })
      .catch((err) => {
        console.log(err)
      });
    setWord('')
  }

  const handleDeleteImage = (id) => {
    setImages(images.filter(image => image.id !== id))
  }

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSubmit} />
      <Container className='mt-4'>
        {images.length ?
          <Row xs={1} ma={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row> : (<Welcome />)}
      </Container>
    </div>
  );
}

export default App;
