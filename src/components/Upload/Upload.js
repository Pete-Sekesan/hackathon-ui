import React, { useState } from "react";
import AuthAPIService from "../../services/auth-api-service";
import Spinner from "../../components/Spinner/Spinner";
import Button from "@material-ui/core/Button";

function Upload(props) {
  const [uploadError, setUploadError] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [resizeUrl, setResizeUrl] = useState("");
  const [loggedInState, setLoggedInState] = useState(null);
  const { setImgUrl, setPreviewSource, setShowForm } = props;

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    uploadPhotos(e);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    //convert img to url
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setShowButton(true);
      setUploadError("");
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    setLoggedInState(true);
    setUploadError(null);
    if (!resizeUrl) return;
    AuthAPIService.uploadImg(resizeUrl)
      .then((img) => {
        setImgUrl(img.public_id);
        setLoggedInState(null);
        setShowButton(false);
        setUploadError("");
      })
      .catch((res) => {
        setUploadError(res);
        setLoggedInState(null);
      });
  };

  const uploadPhotos = function (e) {
    // Read in file
    const file = e.target.files[0];

    // Ensure it's an image
    if (file.type.match(/image.*/)) {
      // Load the image
      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const image = new Image();
        image.onload = function (imageEvent) {
          // Resize the image
          let canvas = document.createElement("canvas"),
            max_size = 544,
            width = image.width,
            height = image.height;
          if (width > height) {
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }
          canvas.width = width;
          canvas.height = height;
          canvas.getContext("2d").drawImage(image, 0, 0, width, height);
          const dataUrl = canvas.toDataURL("image/jpeg");
          setResizeUrl(dataUrl);
        };
        image.src = readerEvent.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      {loggedInState && <Spinner />}
      <h3>Profile Image</h3>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          className="form-input"
          aria-label="upload-image"
          required
        />

        <div className="img-upload">
          {resizeUrl && (
            <img className="upload-image" src={resizeUrl} alt="chosen-img" />
          )}
        </div>
        {uploadError ? (
          <h3 className="error-message">{uploadError.message}</h3>
        ) : null}
        {showButton ? (
          <div className="submit-button">
            <h4>Please confirm profile image</h4>
            <button type="submit">Confirm Image</button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Upload;
