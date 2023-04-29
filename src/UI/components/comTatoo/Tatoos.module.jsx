import './Tatoos.css'
import Car from './1.jpg'
import Car1 from './2.jpg'
import Car2 from './3.jpg' 
import Car3 from './4.jpg'


let tutki = [ 
  {id: 1, tat: Car, carPrice: 1000},
  {id: 2,tat: Car2, carPrice: 2000}, 
  {id: 3,tat: Car3, carPrice: 3000},
  {id: 4,tat: Car1, carPrice: 4000}
]
let Shashana = () => tutki.map(immgg => { return (
   <div key={immgg.id} className='qwe' >
      <img className='images' src={immgg.tat}/>
           <p className='Paragraf'>{new Intl.NumberFormat('ru-RU',{style: 'currency',currency:'USD'}).format(immgg.carPrice)}</p>
           <button className='buut'>Узнать больше</button>
         </div>) } 
        )
export default Shashana;