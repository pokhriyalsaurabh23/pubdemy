import React from 'react';

interface RequirementsProps {
  data: string[];
}

const Requirements: React.FC<RequirementsProps> = ({ data }) => {
  return (
    <div className="mb-3">
      <h2>Requirements</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements;
