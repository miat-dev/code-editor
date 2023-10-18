
const Navbar = () => {
    return (
        <nav className="navbar ">
            <ul className="nav navbar-nav" style={{ display: 'flex' }}>
                <li>
                    <button className="btn run_btn"
                    >Run</button>
                </li>
                <li>
                    <button className="btn"
                        // href="javascript:autoFormatSelection()"
                    >Format</button>
                </li>
                <li>
                    <button className="btn"
                        // href="javascript:commentSelection(true)"
                    >Comment
                    </button>
                </li>
                <li><button className="btn"
                    // href="javascript:commentSelection(false)"
                >Uncomment</button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;