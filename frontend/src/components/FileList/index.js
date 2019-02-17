import React from 'react';
import CircularProgressBar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
    <Container>
        { files && files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview}/>
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize} 
                            {!!uploadedFile.url && <button onClick={() => {}}> Delete! </button> }
                        </span>
                    </div>
                </FileInfo>

                <div>
                    {/* if the file has not finish uploading yet and has't have an error, show progress bar */}
                    {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressBar 
                            styles={{
                                // root is div that wraps the progress bar (the outmost one)
                                root: { width: 24 }, // the size wanted for the bar
                                path: { stroke: '#7159c1'}, // the color of the progress path itself
                            }}
                            strokeWidth={10}
                            percentage={uploadedFile.progress}
                        />
                    )}
                    
                    {/* if it has a link, it can be showed */}
                    {uploadedFile.url && (
                        <a 
                            href="http://localhost:3001/files/0c197d2016f07766b7da2aeefaf82532-FullSizeRender.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>
                    )}
                    
                    {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
                    {uploadedFile.error && <MdError size={24} color="#e57878" />}
                    
                </div>
            </li>
        ))}
    </Container>
)
    
export default FileList;