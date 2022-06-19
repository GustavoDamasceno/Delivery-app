import './style.css'
import car from '../../Images/Vector.svg'

function Card(props) {
    return(
        <div className='cardcont'>
            <img className='cardimg' src={`../../src/Images/${props.imgcard}.svg`} />
            <p className='tittlecard'>{props.name}</p>
            <p className='textcard'>Lorem ipsum dolor sit amet, consectetur </p>
            <div className='groupcard'>
                <button className='addcar'>
                    <img src={car} />
                </button>
                <button className='orderbtn'>
                    <p>ORDER NOW</p>
                </button>
            </div>
        </div>
    )
}

export default Card