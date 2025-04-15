import { useState } from 'react';
import { Camera, CameraResultType, CameraPhoto } from '@capacitor/camera';

function App() {
  const [image, setImage] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const photo: CameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        quality: 90,
      });
      
      // Ensure dataUrl exists and is a string
      if (photo.dataUrl && typeof photo.dataUrl === 'string') {
        setImage(photo.dataUrl);
      } else {
        throw new Error('Photo data URL is invalid');
      }
    } catch (err) {
      console.error('Camera error:', err);
      if (err instanceof Error) {
        alert('Camera access failed: ' + err.message);
      } else {
        alert('Camera access failed: Unknown error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📷 React + Vite + Capacitor</h1>

      <button
        onClick={takePhoto}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
      >
        Take Photo
      </button>

      {image && (
        <div className="mt-6">
          <img
            src={image}
            alt="Captured"
            className="rounded-xl shadow-lg max-w-xs border-4 border-blue-200"
          />
        </div>
      )}
    </div>
  );
}

export default App;