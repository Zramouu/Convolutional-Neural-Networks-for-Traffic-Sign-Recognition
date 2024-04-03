import React, { useState } from 'react';
import { HiUpload } from "react-icons/hi";
import { BsFileEarmarkImage } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import '../Upload/Upload.css';

const UploadForm = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  
  const handleUploadClick = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleDeleteClick = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <>
      {!previewUrl && (
        <div className="upload-form">
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="input"
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
            <HiUpload color="#517889" size="50px" />
            <span>Upload Image </span>
          </label>
        </div>
      )}
      {previewUrl && (
        <>
        <div className="result-form">
          <div className="image-preview">
            <img src={previewUrl} height= "300px" width="300px" alt="Preview" className="full-width-image" />
          </div>

          </div>
          <section className='uploaded-row'>
            <BsFileEarmarkImage color='black' size="25px" />
            <span>
              {selectedFile.name}
              <MdDeleteOutline color='black' size="25px" onClick={handleDeleteClick} />
            </span>
          </section>
        </>
      )}
      {selectedFile && (
        <button type="button" onClick={handleUploadClick} className="button">
          Predict
        </button>
      )}
    </>
  );
};

export default UploadForm;
