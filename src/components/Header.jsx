
import chefClaudeLogo from "../assets/images/logo.png"

export default function Header() {

  return (
    <header>
      <div className="header__logo">
        <img className="header__logo-img" src={chefClaudeLogo} alt="logo" />
        <span className="header__logo-txt">Chef Claude</span>
      </div>
    </header>
  )
}