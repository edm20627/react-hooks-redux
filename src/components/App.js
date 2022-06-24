import React, { useMemo, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContexts'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const memoState = useMemo(() => ({ state, dispatch }), [state])

  return (
    <AppContext.Provider value={memoState}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
