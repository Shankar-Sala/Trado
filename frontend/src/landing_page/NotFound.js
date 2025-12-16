import React from 'react';

function NotFound() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="text-center">
        <h1 className="display-4 mb-3">404 Not Found</h1>
        <p className="fs-5 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
