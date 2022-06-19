import './style.css'
import Navbar from '../../Components/navbar/'
import Menu from '../../Components/menu/'
import principalIcon from  '../../Images/principalIcon.svg'
import InstaCard from '../../Components/instacard'

import rec1 from '../../Images/recorange.svg'
import rec2 from '../../Images/recyellow.svg'
import rec3 from '../../Images/recred.svg'

import bg from '../../Images/bg.svg'
import bg1 from '../../Images/b1.svg'
import bg2 from '../../Images/bg2.svg'

function App() {
  return (
    <div>
      <div className='fundo'></div>
      <Navbar />
      <p className='burgerenfeite'>Burger</p>
      <div className='Heading2'>
        <p className='txtenfeite'>Our special</p>
        <p className='txtheading2'>Dine in + Delivery</p>
      </div>
      <img className='principalIcon' src={principalIcon} />
      <div className='pricePrincipal'>
        <p className='txtprice'>$7.99</p>
      </div>
      <p className='sassy'>Sassy Burger</p>
      <p className='oursassy'>Our great burgers , Now with extra cheese </p>
      <p className='txtsingle'>Single Patty</p>
      <p className='textsingle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <button className='btnordemnow'>ORDER NOW</button>

      <p className='menuenfeite'>Menu</p>
      <Menu />
      <div className='orderfoot'>
        <div className='order1'>
          <img src={rec1} />
          <img className='bg' src={bg} />
          <p>Chicha Burger</p>
        </div>
        <div className='order2'>
        <img src={rec2} />
        <img className='bg' src={bg1} />
        <p>Friend Burger</p>
        </div>
        <div className='order3'>
        <img src={rec3} />
        <img className='bg' src={bg2} />
        <p>The Grill Thrill </p>
        </div>
      </div>

      <div className='findsection'>
        <p className='txtfindtittle'>Follow us on Instagram</p>
        <p className='txtfind'>For the latest news, updates and inspirational recipes, follow us on Instagram to flavour up your food!</p>
      </div>
      <p className='socialenfeitee'>Social</p>

      <div className='divinsta'>
        <InstaCard imginsta={'instatwo'} imgperfil={'perfi'}/>
        <InstaCard imginsta={'instaone'} imgperfil={'perfione'}/>
        <InstaCard imginsta={'insta'} imgperfil={'perfitwo'}/>
      </div>

      <div className='footer'> </div>
    </div>
  )
}

export default App
