import React, { Component } from 'react'

import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

class Upload extends Component {
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
           Drop your files here!
          </DropContainer>
        )}
      </Dropzone>      
    )
  }
}

export default Upload;