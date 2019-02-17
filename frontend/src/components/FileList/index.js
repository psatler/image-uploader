import React from 'react';
import CircularProgressBar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="http://localhost:3001/files/0c197d2016f07766b7da2aeefaf82532-FullSizeRender.jpg"/>
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
                />

                <a 
                    href="http://localhost:3001/files/0c197d2016f07766b7da2aeefaf82532-FullSizeRender.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                </a>

                <MdCheckCircle size={24} color="#78e5d5" />
                <MdError size={24} color="#e57878" />
            </div>
        </li>
    </Container>
)
    
export default FileList;