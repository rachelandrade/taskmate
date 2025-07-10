import { useState } from 'react';
export const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show && <div className={`box ${result}`}>
                {children}
            </div >}
            <button onClick={() => setShow(!show)} className="trigger">{show ? 'Hide' : 'Show'}</button>
        </>
    )
}