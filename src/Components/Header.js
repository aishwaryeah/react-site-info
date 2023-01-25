import logo from './images/logo.png'

function Header() {
    return(
        <nav className='nav'>
                <img src={logo} alt="react-logo" className="nav--icon"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}


export default Header