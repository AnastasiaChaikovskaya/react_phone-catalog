import Menu from './components/MenuDesktop';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <a href="">
          <img
            src="./img/logo/header-logo.svg"
            alt="header logo"
            className="header__logo"
          />
        </a>

        <div className="header__icon">
          <img src="./img/icons/icon-menu.svg" alt="burger menu" />
        </div>
        <Menu />
      </div>
    </header>
  );
};
