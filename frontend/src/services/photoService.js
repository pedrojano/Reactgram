import { data } from "react-router-dom";
import { api, requestConfig } from "../utils/config";

// PublishPhoto an User photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "/photos", config)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    return res.data;

  } catch (error) {
    console.log(error);
  }
};

const photoService = {
    publishPhoto,
};

export default photoService;
