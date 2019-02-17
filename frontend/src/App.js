import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from './services/api'

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

class App extends Component {
  state = {
    uploadedFiles: [],
  }

  handleUpload = files => {
    // console.log(files)
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file), //here, generating a preview image url even before it getting to the backend server via the global URL
      progress: 0,
      uploaded: false, // if the uploaded has finished with success or not
      error: false, // if there was an error with the upload
      url: null, // url to be clicked for link of the image. It will only be filled once the upload has completed successfully
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
    });

    // handling the upload part
    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    // uploading progress number
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map( uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
      })
    })
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();
    data.append('file', uploadedFile.file, uploadedFile.name);

    // NOTE: below we're not using async await
    api.post('/posts', data, {
      // function of axios to check the progress
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress,
        });
      }
    });
  };

  render() {
    const { uploadedFiles } = this.state;

    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          { !!uploadedFiles && <FileList files={uploadedFiles} />}
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
