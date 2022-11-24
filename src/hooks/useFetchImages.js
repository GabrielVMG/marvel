import {useState, useEffect} from 'react'
import { getCharacters } from '../helpers/getCharacters';


export const useFetchImages = (character) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getCharacters(character);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
