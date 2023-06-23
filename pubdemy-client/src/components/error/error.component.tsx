import React from 'react';

const Error: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mt-5 p-4 bg-danger text-white">
            <h1 className="display-4">Page Not Found</h1>
            <p className="lead">The requested page could not be found.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
