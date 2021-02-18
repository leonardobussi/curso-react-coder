import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'




const UseCallback = (props) => {
    const [count, setCount] = useState(0)


   const inc = useCallback(function(delta){
         setCount(curr => curr + delta)
    }, [setCount])

    const zera = useCallback(function(){
        setCount(curr => curr - curr)
    }, [setCount])


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} zera={zera} />
            </div>
        </div>
    )
}

export default  React.memo(UseCallback)
