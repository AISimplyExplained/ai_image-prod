import React from 'react'

const Loader = () => {
  return (
    <div class="loader relative w-28 h-28 scale-50">
        <div class="box1 absolute border-4 border-white box-border animate-abox1"></div>
        <div class="box2 absolute border-4 border-white box-border animate-abox2"></div>
        <div class="box3 absolute border-4 border-white box-border animate-abox3"></div>
    </div>
  )
}

export default Loader