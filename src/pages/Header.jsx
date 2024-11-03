import './Header.css'

function Header() {
    return(
        <header className="navegacao">
            <h1>Header</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header