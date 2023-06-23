import React from 'react';

interface DescriptionProps {
  data: string;
}

const Description: React.FC<DescriptionProps> = ({ data }) => {
  return (
    <div className="mb-3">
      <h2>Description</h2>
      <p>{data}</p>
    </div>
  );
};

export default Description;
