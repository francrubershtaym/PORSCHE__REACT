import logo from "../assets/photo/logo.png"
const Navbar = ({ list }) => {
    return (
        <header className="header">
            <div className="container nav">
                <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
                <ul className="list">
                    {list.map((item) => (
                        <a href="#" className="list__link" key={item}>
                            <li className="item" key={item}>
                                {item}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>



        </header>
    );
};
export default Navbar;