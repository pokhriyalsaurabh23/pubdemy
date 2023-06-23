import React from 'react';

interface WhatYouWillLearnProps {
  data: string[];
}

const WhatYouWillLearn: React.FC<WhatYouWillLearnProps> = ({ data }) => {
  return (
    <div className="border rounded p-4" style={{ width: '80%' }}>
      <h2>What you'll learn</h2>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="d-flex align-items-center">
              <i className="fa fa-check me-2"></i>
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
