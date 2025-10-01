import { data } from "react-router-dom";
import { api, requestConfig } from "../utils/config";

// PublishPhoto an User photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/photos", config);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.errors ? errorData.errors[0] : "Erro ao publicar foto"
      );
    }
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
    return {
      errors: [error.message],
    };
  }
};
// Get User Photos
const getUserPhotos = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/photos/user/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Delete photos
const deletePhoto = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);
    
    return res;
    } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
};

export default photoService;
