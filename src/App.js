// // App.js

import React from 'react';
import './App.css'; // If you have a CSS file
import './Gallery.css'; // Import gallery styles
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <Gallery />
    </div>
  );
}

export default App;

// import React from 'react';
// import LikeButton from './LikeButton';
// function App() {
//    return (
//       <div>
//          <LikeButton />
//       </div>
//    );
// }
// export default App;