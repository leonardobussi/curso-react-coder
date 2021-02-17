import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num){
    let n = parseInt(num)
    if(n < 0) return " sem retorno"
    if(n === 0 || n === 1) return 1
    return calcFatorial(n - 1)  * n

}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [isPair, setIsPair] =  useState("Ímpar")

    useEffect(function(){
        setIsPair(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="exercicio - 01"/>

            <div className="center">
                <div>
                    <span className="text">Fatorial</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" 
                    className="input" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)} />
            </div>



            <SectionTitle title="exercicio - 02"/>

            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{isPair}</span>
                </div>
            </div>



        </div>
    )
}

export default UseEffect
