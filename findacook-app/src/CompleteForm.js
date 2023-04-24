import React, { useState } from 'react';
import Footer from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

async function postImage({documents, description}) {
  const formData = new FormData();
  for (let i = 0; i < documents.length; i++) {
    formData.append('document', documents[i]);
  }
  formData.append('description', description);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const result = await axios.post('https://findacook-backend.onrender.com/cook/documents', formData, config);
  return result.data;
}


const CompleteForm = () => {
    const { categories } = useSelector(state => state.categories);

    const [file, setFile] = useState()
    const [description, setDescription] = useState("")
    const [documents, setDocuments] = useState([]);
  
    const submit = async (event) => {
      event.preventDefault();
      const result = await postImage({documents, description});
      setDocuments([...result.documents, ...documents]);
    };
    
  
    const fileSelected = (event) => {
      const files = event.target.files;
      setDocuments(files);
    };
  return (
    <>
      <nav className="thing1">
        <div className="formLogo">
          <a href="/">
            <img src="./images/logo-new-edit-01.png" />
          </a>
        </div>
      </nav>
      {/* <nav className="thing2">
        <div className="personal-info-text">
          <h1>Personal Information</h1>
        </div>
      </nav> */}



      <div className="personal-form-body">
        <main className="personal-form-container">
        <section className="personal-form-section">
          <h2>Personal Information</h2>
          <form encType="multipart/form-data" method="POST" action="/cook/documents" onSubmit={submit} className="personal-form">
        <label for="other">Other</label>
        <input type="file" name="document" multiple onChange={(e) => fileSelected(e)} placeholder="Other" accept=".pdf" /> <br />


        <a href="/submit"><button className="applicationBtn">Apply</button></a>

      </form>
        </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CompleteForm;
