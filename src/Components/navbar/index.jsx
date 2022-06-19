import './style.css'
import logo from '../../Images/logo.svg'
import shopcar from '../../Images/Vector.svg'

function navbar() {
    return (
      <div className="navcont">
        <img className='logo' src={logo} />
        <a href="">Home</a>
        <a href="">Order Now</a>
        <a href="">Menu</a>
        <a href="">Location</a>
        <a href="" className="navphone">+1 - 650 - 547 - 9864</a>
        <button className='shopcar'>
            <img  className='btnimgcar' src={shopcar} />
        </button>
      </div>
    )
  }
  
  export default navbar
  