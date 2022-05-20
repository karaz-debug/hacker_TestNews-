import React from 'react'

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className=" spinner-border h-20 w-20 animate-spin rounded-full border border-slate-400 border-t-[#e92828] text-transparent">
        Loading
      </div>
    </div>
  )
}

export default Spinner
