import React, { useContext, useState } from 'react'
import { ADD_OPERATION_LOG, CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_ALL_OPERATION_LOGS } from '../actions'
import AppContext from '../contexts/AppContexts'
import timeCurrentIso8601 from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operationAt: timeCurrentIso8601(),
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを本当に削除してもよいですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'すべてのイベントを削除しました',
        operationAt: timeCurrentIso8601(),
      })
    }
  }

  const unCreatable = title === '' || body === ''

  const deleteAllOperationLogs = (e) => {
    e.preventDefault()
    const result = window.confirm('すべての操作ログを本当に削除してもよいですか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      })
    }
  }

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
            }}
          />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>
          全てのイベントを削除する
        </button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>
          全ての操作ログを削除する
        </button>
      </form>
    </>
  )
}

export default EventForm
