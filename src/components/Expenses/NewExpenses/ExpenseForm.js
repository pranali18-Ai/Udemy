import React from 'react';
import './NewExpenses';
import './ExpenseForm.css';
import 'bootstrap/dist/css/bootstrap.css';


const ExpenseForm = () => {
    return (
        <div>
        <form className='container.sm p-5 my-5   bg-dark text-white  mt-sm-3 mb-sm-5 ' >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
            </div>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' />
                </div>
            </div>

            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2023-12-31' />
                </div>
            </div>
            <br/>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
                </div>
                <br />
      </form>
        </div>
        

        
    );
};
export default ExpenseForm;
