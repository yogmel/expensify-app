// Export a stateless functional component
// description, amount, createdAt
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h1>
      <Link to={`/edit/${id}`}>
        {description}
      </Link>
    </h1>
    <p> {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')} </p>
  </div>
)

export default ExpenseListItem