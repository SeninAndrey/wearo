import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <div className="w-[600px] pt-20 mx-auto flex flex-col items-center min-h-screen">
        <App />
    </div>
);