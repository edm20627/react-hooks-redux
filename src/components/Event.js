import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContexts'
import timeCurrentIso8601 from '../utils'

const Event = (props) => {
  const { event } = props
  const { dispatch } = useContext(AppContext)

  const handleClickDeleteButton = (id) => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました`,
        operationAt: timeCurrentIso8601(),
      })
    }
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleClickDeleteButton(event.id)
          }}
        >
          削除
        </button>
      </td>
    </tr>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
}

Event.defaultProps = {
  event: {},
}

export default Event
