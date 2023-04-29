import { useState } from 'react';
import './Forposts.css'
import { Link } from 'react-router-dom';
const Rideside = () => {
    const [dobav, setDobav] = useState('')
    const createTato = (e) => {
        console.log(dobav)
    }
    return (
        <div className="ridsid">
            <h2>
                <Link to='/contact'><li>Контакты</li></Link>
            </h2>
            <h2>
                <Link to='/Callback'><li>Отзывы</li></Link>
            </h2>
            <h2>
                <Link to='/Works'><li>Работы</li></Link>
            </h2>
            <div>
                <input className="Fp" placeholder="Цена" onChange={e => setDobav(e.target.value)} value={dobav}></input>
                <input className="Fp" placeholder="Тату"></input>
                <button className="Btbtbt" onClick={e => createTato(e)}>Вставить</button>
            </div>
        </div>
    )
}
export default Rideside;