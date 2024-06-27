import { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="h-64 w-64 rounded-lg object-cover shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
