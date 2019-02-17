import React from 'react';
import CircularProgressBar from 'react-circular-progressbar'

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

            <div>
                <CircularProgressBar 
                    styles={{
                        // root is div that wraps the progress bar (the outmost one)
                        root: { width: 24 }, // the size wanted for the bar
                        path: { stroke: '#7159c1'}, // the color of the progress path itself
                    }}
                    strokeWidth={10}
                    percentage={60}
                >

                </CircularProgressBar>
            </div>
        </li>
    </Container>
)
    
export default FileList;