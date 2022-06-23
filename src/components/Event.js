import React from 'react'
import { PropTypes } from 'prop-types'

const Event = (props) => {
  const { event, dispatch } = props

  const handleClickDeleteButton = (id) => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) dispatch({ type: 'DELETE_EVENT', id })
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
  dispatch: PropTypes.func.isRequired,
}

Event.defaultProps = {
  event: {},
}

export default Event
