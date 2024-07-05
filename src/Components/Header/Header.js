import './Header.css'
import logo from '../../logo.svg'; 

export default function Header() {
    return (
        <div className='header'>
            <img className='header-img' src={logo} alt="Logo da aplicação" />
            <h3 className='header_title'>Notas</h3>
        </div>)
}