import React from 'react'

const Toast = () => {
  return (
    <div>
        <div class="toast-container position-absolute top-2 p-4 start-50 translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast align-items-center text-white bg-success" id="toast-add">
        <div class="toast-body text-center">
            Data Berhasil Disimpan
        </div>
    </div>
</div>
    </div>
  )
}

export default Toast