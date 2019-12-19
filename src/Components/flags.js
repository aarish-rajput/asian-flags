import React from 'react';
import PropTypes from 'prop-types';

const flags = ({ img, name }) => {
    return (
        <div>
            <img src={img} alt="flag" height="160px" width="240px" />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

flags.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default flags;