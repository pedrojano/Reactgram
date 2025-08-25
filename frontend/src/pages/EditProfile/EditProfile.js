import "./EditProfile.css";
import { uploads } from "../../utils/config";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import {profile, resetMessage} from '../../slices/userSlice'

// Components
import Message from "../../components/Message";


const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você!
      </p>

      {/* Preview da imagem */}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <label>
          <span>Imagem de perfil:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Descrição do Perfil!" />
        </label>
        <label>
          <span>Alterar Senha</span>
          <input type="password" placeholder="Nova Senha" />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default EditProfile;
