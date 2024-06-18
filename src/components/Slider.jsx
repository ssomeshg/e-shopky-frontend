import banner1 from '../assets/banner1.jpg'
import Search from './Search'
export default function Slider(){

    return<>
    <div className='container relative'>
        <ul>
            <li><img src="https://img.freepik.com/vetores-premium/modelo-de-banner-de-venda-com-desenho-geometrico_2307-476.jpg?w=1380" className='w-100 rounded-lg h-[30rem]' alt="" style={{objectFit:'cover'}} /></li>
        </ul>
        <Search/>
    </div>
    </>
}