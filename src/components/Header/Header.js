import "./Header.css";
import React, {useContext} from "react";
import { DataContext } from "../context/Context";

// Icons
import Flags from "../../assets/icons/Flags.svg";
import Admin from "../../assets/icons/Admin.svg";
import Heard from "../../assets/icons/Heard.svg";
import Search from "../../assets/icons/Search.svg";
import Shop from "../../assets/icons/Shop.svg";
import Logo from "../../assets/icons/Logo.svg";
import Sort from '../../assets/icons/Sort.svg';


const Header = () => {

  const { handleSort } = useContext(DataContext)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__links">
              <HeaderLinks />
            </div>
          </div>

          <div className="header__category">
            <div className="nav">
                <Category />
            </div>
          </div>
        </div>
      </header>

      <header className="header">
        <div className="container">
            <div className="route">
                <div className="router">Главная  <span>/</span>  Обувь <span>/</span> Лофер</div>
                <h1>Лоферы</h1>
            </div>
        </div>
      </header>

      <header className="header">
        <div className="container">
            <div className="sort">
                <div className="sorting">
                    <img src={Sort} alt="Sort" />
                    <span onClick={handleSort}>Сортировать</span>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

const HeaderLinks = () => {
  return (
    <>
      <div className="header__nav">
        <div className="header__flags">
          <img src={Flags} alt="Flags" />
          <div className="country">
            Россия, <span>$</span>
          </div>
        </div>

        <div className="nav">
          <a href="/" className="nav__link active">
            Женщины
          </a>
          <a href="/" className="nav__link">
            Мужчины
          </a>
          <a href="/" className="nav__link" style={{ marginRight: "0" }}>
            Дети
          </a>
        </div>
      </div>

      <div className="header__logo">
        <img className="img" src={Logo} alt="Logo" />
      </div>

      <div className="header__icons">
        <img src={Search} alt="Search" style={{ marginLeft: "0" }} />
        <img src={Admin} alt="Admin" />
        <img src={Heard} alt="Heard" />
        <img src={Shop} alt="Shop" />
      </div>
    </>
  );
};

const Category = () => {
  return (
    <>
      <a href="/" className="nav__link category">
        Новинки
      </a>
      <a href="/" className="nav__link category">
        Бренды
      </a>
      <a href="/" className="nav__link category">
        Одежда
      </a>
      <a href="/" className="nav__link category">
        Обувь
      </a>
      <a href="/" className="nav__link category">
        Сумки
      </a>
      <a href="/" className="nav__link category">
        Ювелирные украшения
      </a>
      <a href="/" className="nav__link category">
        Часы
      </a>
      <a href="/" className="nav__link category">
        Аксессуары
      </a>
      <a href="/" className="nav__link category">
        Выгодные предложения
      </a>
    </>
  );
};

export default Header;
