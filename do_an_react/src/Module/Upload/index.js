import React from 'react';
import axios from 'axios';

const UploadFile = () => {

    const handleUploadForm = (e) => {

        e.preventDefault();

        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("upload_file_input", imagefile.files[0]);
        axios.post('http://localhost:4000/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            
            <form onSubmit={handleUploadForm}>
                <legend>Form title</legend>
            
                <div class="form-group">
                    <label for="">label</label>
                    <input type="file" name="upload_file_input" class="form-control" id="file"/>
                </div>
            
                
            
                <button type="submit" class="btn btn-primary">Upload</button>
            </form>
            
        </div>
    );
};

export default UploadFile;