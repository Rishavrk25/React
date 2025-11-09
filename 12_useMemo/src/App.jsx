import React from 'react'
import WithoutUseMemo from './components/WithoutUseMemo'
import WithUseMemo from './components/WithUseMemo'

const App = () => {
  return (
    <div>
      <WithoutUseMemo></WithoutUseMemo>
      <WithUseMemo></WithUseMemo>
    </div>
  )
}

export default App