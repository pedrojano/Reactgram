import "./Photo.css";

import { uploads } from "../../utils/config";

// Componentes
import Message from "../../components/message/Message";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import LikeContainer from "../../components/Like/LikeContainer";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { getPhoto, like, resetMessage } from "../../slices/photoSlice";


const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  // Comentarios

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // Like
  const handleLike = () => {
    dispatch(like(photo._id));

    resetMessage();
  }; 
  
  // coments

  if (loading) {
    return <p>Caregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-cotainer">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
    </div>
  );
};

export default Photo;
