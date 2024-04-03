import React from "react";

const Results = ({prediction}) => {
    if (!prediction){
        return null;
    }

    return (
        <div style={{marginTop: '20px'}}>
        <h2 style={{ color: '#517889', textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem', fontFamily:"inherit"
        }}> Identified Traffic Sign:</h2>

        <p style={{ fontSize: '1.5rem', textAlign: 'center', color: '#333', marginTop: '0', marginBottom: '1rem', fontFamily:"inherit"
    }}> {prediction}</p>
    </div>

    );

};
export default Results;



