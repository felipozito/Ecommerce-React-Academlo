import React, { useState } from "react";
// import "../../Styles/productsDetails.css";

const Gallery = ({ images }) => {
      //   console.log(images);
      const [currentImage, setCurrentImage] = useState(1);

      const percent = 100 / images?.length;

      const listStyles = {
            width: `${100 * images?.length}%`,
            transform: `translateX(-${(currentImage - 1) * percent}%)`,
      };
      const up = () => {
            if (currentImage >= 3) {
                  setCurrentImage(1);
            } else {
                  setCurrentImage(currentImage + 1);
            }
      };
      const down = () => {
            if (currentImage <= 1) {
                  setCurrentImage(3);
            } else {
                  setCurrentImage(currentImage - 1);
            }
      };

      return (
            <div className="images-gallery">
                  <div className="gallery">
                        <div className="button-gallery left">
                              <button onClick={down}>
                                    <i className="bx bx-chevron-left"></i>
                              </button>
                        </div>
                        <div className="button-gallery right">
                              <button onClick={up}>
                                    <i className="bx bx-chevron-right"></i>
                              </button>
                        </div>

                        <ul className="images-list" style={listStyles}>
                              {images?.map((image) => (
                                    <li key={image}>
                                          <img src={image} alt="" />
                                    </li>
                              ))}
                        </ul>
                  </div>

                  <ul className="images-preview">
                        {images?.map((image, i) => (
                              <li key={image} className={currentImage === i + 1 ? "selected" : ""}>
                                    <img src={image} alt="" onClick={() => setCurrentImage(i + 1)} />
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

export default Gallery;
