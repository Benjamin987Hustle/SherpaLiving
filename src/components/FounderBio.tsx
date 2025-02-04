import React from 'react';

interface FounderBioProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const FounderBio = ({ name, role, imageUrl, bio }: FounderBioProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-4">{role}</p>
      <p className="text-gray-600 text-left">{bio}</p>
    </div>
  );
};

export default FounderBio;