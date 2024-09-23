import React from 'react';

function JsonDisplay({ products }) {
  return (
    <div id="jsonDisplay" style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '10px', border: '1px solid #ddd', marginTop: '20px', fontFamily: 'monospace', width: '100%' }}>
      {JSON.stringify({ products }, null, 2)}
    </div>
  );
}

export default JsonDisplay;
