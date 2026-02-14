import React from 'react';

const CardComponent = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4">Lorem Ipsum Heading</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Consectetur adipiscing elit.</li>
        <li>Sed do eiusmod tempor incididunt.</li>
      </ul>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default CardComponent;
