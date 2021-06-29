import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, children}: any) => {
    return (
        <Alert variant={variant} style={{color: 'red', fontSize: '20px', textAlign: 'center'}}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'Info'
}

export default Message
