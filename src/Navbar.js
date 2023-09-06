function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-logo">speak up, <span className="red">dia.</span></a>
            <div className="links">
                <a href="/about">about</a>
                <a onClick={() => window.open("https://www.amazon.com/Speak-DIA-anthology-evocative-student-written/dp/B0C9SNG7Y4", '_blank')}>latest volume</a>
                <a href="/submit">submit a poem</a>
            </div>
        </nav>
    );
}
 
export default Navbar;