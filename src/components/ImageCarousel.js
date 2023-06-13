import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function ImageCarousel({ toggle }) {
  const [images, setImages] = useState(null);

  const getImages = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/images");
      console.log(data);
      setImages(data.images); //QUE
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [toggle]);

  return (
    <Carousel>
      {images
        ? images.map((image) => {
            return (
              <Carousel.Item key={image._id}>
                <img src={image.url} alt="carousel" />
                <Carousel.Caption>
                  <h3>{image.description ? image.description : null}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        : "No images to display"}
    </Carousel>
  );
}
