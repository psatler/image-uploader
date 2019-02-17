import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

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
