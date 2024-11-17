import React, { useState, useRef } from 'react';
import './App.css';
import EffectsControl from './components/EffectsControl';
import ImageUpload from './components/ImageUpload';
import ImageCanvas from './components/ImageCanvas';

function App() {
    const [image, setImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    return (
        <div className="App">
            <h1>Image Background Removal & Effects</h1>
            <ImageUpload setImage={setImage} setProcessedImage={setProcessedImage} />
            <ImageCanvas image={image} processedImage={processedImage} setProcessedImage={setProcessedImage} />
            <EffectsControl processedImage={processedImage} setProcessedImage={setProcessedImage} />
        </div>
    );
}

export default App;