import React from 'react'


const searchbox = ({ searchChange }) => {
    return (
        <div>
            <input type="text" style={searchboxstyle} placeholder="Search flag" onChange={searchChange} />
        </div>
    )
}

const searchboxstyle = {
    width: '230px',
    marginBottom: '30px',
    height: '30px',
    boxShadow: '3px 3px 5px 2px #66606',
    borderRadius: '4px',
    borderStyle: 'groove',
    backgroundColor: '#cae6e6',
    textAlign: 'center',
}


export default searchbox