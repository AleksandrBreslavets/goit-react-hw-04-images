import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "helpers/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Wrapper, Text } from "./App.styled";

const EMPTY_MSG = 'Sorry. There are not such images...';
const EMPTY_INPUT_MSG = "Please, type something in input to search.";
const ERROR_MSG = "Something went wrong. Try to reload the page!";

export const App = () => {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [bigImage, setBigImage] = useState({});
  const abortCtrl = useRef();

  useEffect(() => {
    const queryToSearch = query.slice(query.indexOf('/') + 1, query.length);
    if (queryToSearch || page !== 1) {
      async function getImagesByQuery() {
        try {
          if (abortCtrl.current) {
            abortCtrl.current.abort();
          }
          abortCtrl.current = new AbortController();
          setIsLoading(true);
          setError(null);
          const response = await getImages(queryToSearch, page, abortCtrl.current);
          const {
            data: { hits: images, totalHits },
            config: { params: { page: currPage, per_page } }
          } = response;
          
          if (!images.length) {
            setIsEmpty(true);
            return;
          }
          setImages(prevImages => [...prevImages, ...images]);
          setIsShowBtn(currPage < Math.ceil(totalHits / per_page));
        }
        catch (error) {
          if (error.code !== 'ERR_CANCELED') {
            setError(ERROR_MSG);
          }
        }
        finally {
          setIsLoading(false);
        }
      }
      getImagesByQuery();
    }
  }, [query, page])

  const onFormSubmit = (value) => {
    if (!value) toast.error(EMPTY_INPUT_MSG);
    setQuery(`${Date.now()}/${value}`);
    setImages([]);
    setPage(1);
    setError(null);
    setIsShowBtn(false);
    setIsEmpty(false);
    setIsModalShown(false);
    setBigImage({});
  };
  
  const onModalOpen = (e) => {
    const altDescr = e.target.alt
    const bigImgURL = e.target.dataset.bigphoto;
    setIsModalShown(true);
    setBigImage({ bigImgURL, altDescr });
  };

  return <Wrapper>
    <Searchbar onSubmit={onFormSubmit} />
    <ImageGallery images={images} onOpen={onModalOpen} />
    {isEmpty && <Text>{EMPTY_MSG}</Text>}
    {error && <Text>{ERROR_MSG}</Text>}
    {isLoading && <Loader />}
    {isShowBtn && <Button onClick={() => setPage(prevPage => prevPage + 1)} />}
    <Modal isOpen={isModalShown} onClose={() => setIsModalShown(false)} bigImg={bigImage}></Modal>
    <Toaster
      position="top-right"
      toastOptions={{ duration: 2000 }} />
  </Wrapper>
}