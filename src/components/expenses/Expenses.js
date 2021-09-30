import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
function Expenses(props) {
    return (
        <Card className="expenses">
            {
                props.items.map((expense) => {

                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses
