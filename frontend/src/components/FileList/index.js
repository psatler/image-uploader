import React from 'react';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="http://localhost:3000/files/0c197d2016f07766b7da2aeefaf82532-FullSizeRender.jpg"/>
                <div>
                    <strong>profile.png</strong>
                    <span>64kb <button onClick={() => {}}> Delete! </button></span>
                </div>
            </FileInfo>
        </li>
    </Container>
)
    
export default FileList;