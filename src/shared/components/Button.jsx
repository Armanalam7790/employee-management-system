import React from 'react'

const Button = ({text}) => {
  return (
    <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/25 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 uppercase tracking-wide text-sm"
          >
            {text}
          </button>
  )
}

export default Button