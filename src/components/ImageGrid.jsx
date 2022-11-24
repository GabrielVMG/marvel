import { useState } from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import { ImageItem } from "./ImageItem";


export const ImageGrid = ({character}) => {
  const itemsPerPage = 4;
  const {images, isLoading} = useFetchImages(character);
  const [currentPage, setCurrentPage] = useState(0);
  const initIndex = currentPage * itemsPerPage;
  const lastIndex = images.length > (initIndex + itemsPerPage) ? (initIndex + itemsPerPage) : images.length;
  const limitPages = (images.length % itemsPerPage == 0) ? parseInt(images.length/itemsPerPage, 10) : (parseInt(images.length/itemsPerPage, 10) + 1);

  const items = images.map((image) => (
    <ImageItem
      key={image.id}
      {...image}
    />
  ));

  const prevHandler = () => {
      if (currentPage < 1) return;
      setCurrentPage(currentPage - 1);
  }

  const nextHandler = () => {
      if (currentPage+1 == limitPages) return;
      setCurrentPage(currentPage + 1);
  }

  return (
    <>
        <h3>Resultados de: {character}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        {
          images.length == 0 && (<h2>No hay resultados</h2>)
        }
        <div className="card-grid">
          {
            items.slice(initIndex, lastIndex)
          }
          {
            images.length != 0 && (
            <p>
              Mostrando resultados del: {initIndex+1} al {lastIndex}
            </p>)
          }
          {
            images.length != 0 && (
            <p>
              Total de resultados: {images.length}
            </p>)
          }
        </div>
        {
          images.length != 0 && (
          <div className="buttons-container">
            <button onClick={prevHandler} id="btnPrev">Anterior</button>
            <button onClick={nextHandler} id="btnNext">Siguiente</button>
          </div>)
        }
    </>
  )
}
