import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-8 border-blue-500 rounded-full h-16 w-16 animate-spin"></div>
    </div>
  );
};

export default Loading;
