import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Reducer from './Reducer.jsx'
// import UseEffect from './UseEffect'
// import UseRef from './UseRef'
import UseCallback from './useCallback'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <UseCallback />
  // </StrictMode>,
)
