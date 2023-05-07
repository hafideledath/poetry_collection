function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-logo">speak up, <span className="red">dia.</span></a>
            <div className="links">
                <a href="/about">about</a>
                <a href="/submit">submit a poem</a>
            </div>
        </nav>
    );
}
 
export default Navbar;