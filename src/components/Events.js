import React, { useContext } from 'react'
import AppContext from '../contexts/AppContexts'
import Event from './Event'

const Events = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {state.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Events
