import './style.css'

function InstaCard(props) {
    return(
        <div className='cardinsta'>
            <img className='instaimg' src={`../../src/Images/${props.imginsta}.svg`}/>
            <img className='perfil' src={`../../src/Images/${props.imgperfil}.png`}></img>
            
        </div>
    )
}

export default InstaCard