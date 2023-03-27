import { useEffect, useState } from 'react';
import './Body.css'

export default function () {
    const [cards, setCards] = useState([]);
    const [novoItem, setNovoItem] = useState("")
    
    useEffect(()=>{
        setCards(["card1","card2","card3"])
    },[])
    return (
    <div className='todo'>
        <div className='form'>
        <input placeholder="tarefa" value ={novoItem} onChange = {value => setNovoItem(value.target.value)} type ="text"/>
        <button onClick= {() => addCard()}>add</button>
        </div>
        
        <ul className="content">
            {cards.map((item, index) => (
                <li key={index}>
                    <div className="card">
                    {item}
                    <button onClick={() => deleteCard(index)} >X</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>);

    function addCard(){
        if(novoItem <= 0){
            alert("digite uma tarefa...")
            return
        }

        let itemIndex = cards.indexOf(novoItem)
        if (itemIndex >=0){
            alert("essa tarefa ja existe, digite outra tarefa...")
            return
        }
        setCards([...cards, novoItem])
        setNovoItem("")
    }

    function deleteCard(index) {
        let cardTemp = [...cards]
        cardTemp.splice(index, 1)
        setCards(cardTemp)
    }
}