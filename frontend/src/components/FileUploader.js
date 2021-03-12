import React, {useRef, Component } from 'react'
import { File,Form } from 'react-bootstrap'

function FileUploader() {
        const FileUploader = ({onFileSelect}) => {
            const fileInput = useRef(null)
        
            const handleFileInput = (e) => {
                // handle validations
                onFileSelect(e.target.files[0])
            }
        
            return (
                <div className="file-uploader">
                    <Form.File
                                id="custom-file"
                                label="Click to Upload"
                                custom
                                name="selectedFile" required onChange={handleFileInput}
                            />
                    <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" />
                </div>
            )
        }
}

export default FileUploader
