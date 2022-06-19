import './style.css'
import Card from '../card/'

function Menu() {
    return(
        <div className='menucont'>
            <div className='linhacard'>
                <Card imgcard={'thief'} name={'Burger Thief'}/>
                <Card imgcard={'magic'} name={'Burger Magic'}/>
                <Card imgcard={'pika'} name={'Pika N’ Burger'}/>
            </div>
            <div className='linhacard'>
                <Card imgcard={'thief'} name={'Burger Thief'}/>
                <Card imgcard={'magic'} name={'Burger Magic'}/>
                <Card imgcard={'pika'} name={'Pika N’ Burger'}/>
            </div>
        </div>
    )
}

export default Menu