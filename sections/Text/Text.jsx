import React from 'react'

const Text = ({headline, description}) => {
    return (
        <div>
            Static Text...
            <h1>{headline}</h1>
            <h5>{description}</h5>
        </div>
    )
}

export default Text