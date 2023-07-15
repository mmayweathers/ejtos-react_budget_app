import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {selectedValue} from '../components/Currency'
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {selectedValue} {budget}</span>
        </div>
    );
};
export default Budget;
