import React, { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">React Input Field</h1>
        <div className="mb-4">
          <label htmlFor="inputField" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your text:
          </label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
        </div>
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-600">You typed: <span className="font-semibold">{inputValue}</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
