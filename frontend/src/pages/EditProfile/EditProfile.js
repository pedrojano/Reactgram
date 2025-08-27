import "./EditProfile.css";
import { uploads } from "../../utils/config";
// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Redux
import { profile, resetMessage } from "../../slices/userSlice";
// Components
import Message from "../../components/message/Message";
import { updateProfile } from "../../slices/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, error, loading, message } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setImageProfile] = useState("");
  const [bio, setBio] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // Load use data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // Fill form with user data
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
      setImageProfile(user.profileImage);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (name) {
        formData.append("name", name);
    }

    if (bio) {
        formData.append("bio", bio);
    }
    
    if (password) {
        formData.append("password", password);
    }

    if (profileImage) {
        formData.append("profileImage", profileImage);
    }

    await dispatch(updateProfile(formData));

    setTimeout(() => {
        dispatch(resetMessage());
    }, 2000);
};

  
  const handleFile = (e) => {
    // image preview
    const image = e.target.files[0];

    setPreviewImage(image);

    // update image state
    setImageProfile(image);
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você!
      </p>

      {(user.profileImage || previewImage) && (
        <img
          className="profile-image"
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input type="email" placeholder="E-mail" disabled value={email || ""} />
        <label>
          <span>Imagem de perfil:</span>
          <input type="file" onChange={handleFile} />
        </label>
        <label>
          <span>Bio:</span>
          <input
            type="text"
            placeholder="Descrição do Perfil!"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          />
        </label>
        <label>
          <span>Alterar Senha</span>
          <input
            type="password"
            placeholder="Nova Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </label>
        {!loading && <input type="submit" value="Atualizar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </form>
    </div>
  );
};

export default EditProfile;
