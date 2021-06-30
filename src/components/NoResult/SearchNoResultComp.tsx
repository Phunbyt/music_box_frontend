import React, { useState } from 'react';
import NoResult from './NoResult';
import './SearchNoResultComp.css';

export default function SearchNoResultComp() {
    const [noResult, setNoResult] = useState({modal: false})
    return (
        <>
            <NoResult show={noResult.modal} close={() => {setNoResult({...noResult, modal: false})}}>
                {

                }
            </NoResult>
            <div>
                <button className="clickBtn" onClick={() => { setNoResult({ ...noResult, modal: true })}}>Click Me</button>
            </div>
        </>
    )
}
