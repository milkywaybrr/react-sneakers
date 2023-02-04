import logo from '../../../assets/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="React Sneakers" width="40" height="40" />

            <div>
                <h1>React Snekers</h1>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
    )
}

export default Logo;