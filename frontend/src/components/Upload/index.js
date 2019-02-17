import React, { Component } from 'react'

import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessage>Drag your files here!</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">File not supported!</UploadMessage>
    }
    
    // if drag is active, but not rejected (so files are supported, the user can release/drop them)
    return <UploadMessage type="success">You can drop the files here!!!</UploadMessage>
  }


  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
           <input {...getInputProps()} /> 
           {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>      
    )
  }
}

export default Upload;