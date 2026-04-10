import React from 'react'

const Input = ({label,register, name,rules,error, ...props}) => {
  return (
     <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              {label}
            </label>
            <input 
              {...register(name, rules)}
              {...props}
              className="w-full px-4 py-3 border border-gray-300/50 bg-gray-50/50 rounded-2xl text-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/75 transition-all duration-200 shadow-sm hover:shadow-md"
          
            />
            {error && <p className='text-red-600'>{error.message}</p>}
          </div>
  )
}

export default Input