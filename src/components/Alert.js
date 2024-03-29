import React from 'react'

const Alert = ({type}) => {
  return (
    <div className={ `alert ${type.type}` } role="alert">
 {type.message}
</div>
  )
}

export default Alert