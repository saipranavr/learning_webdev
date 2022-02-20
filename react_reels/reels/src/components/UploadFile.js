import React from 'react'

function UploadFile() {
  return (
    <div>
        <input type="file" accept="video/*" id="upload-input" style={{display:'none'}}/>
        <label htmlFor></label>
    </div>
  )
}

export default UploadFile;