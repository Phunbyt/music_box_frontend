import React, { useState } from 'react';
import NoResult from './NoResult';
import './SearchNoResultComp.css';

export default function SearchNoResultComp() {
    const [noResult, setNoResult] = useState({modal: false})
    return (
        <>
            <NoResult show={noResult.modal} close={() => {setNoResult({...noResult, modal: false})}}>
                {
                    <div className="noResultMain">
                        <span className="firstText">No Results</span><br />
                        <span className="secondText">MusicFinder didn't quite catch that</span><br />
                        <button className="tryAgain">TRY AGAIN</button>
                    </div>
                }
            </NoResult>
            <div>
                <button className="clickBtn" onClick={() => { setNoResult({ ...noResult, modal: true })}}>Click Me</button>
            </div>
        </>
    )
}
