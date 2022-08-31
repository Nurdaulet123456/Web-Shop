import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/Context";
import Bottom from "../../assets/icons/arrow_bottom.svg";
import Top from "../../assets/icons/arrow_top.svg";
import { filtersBrends, filterGroup } from "../Data/Filters";

export const Filter = ({ title, children }) => {
  const [open, setOpen] = useState(false);



  return (
    <>
      <div className="filters__content">
        <div className="filters__block">
          <div className="filters__choose">{title}</div>
          <img
            className="filters__cancel"
            src={!open ? Bottom : Top}
            alt=""
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={`filters__content ${!open ? "collapsed" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export const According = () => {
  const { setFilterType } = useContext(DataContext);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (checked) {
      setFilterType([...checked]);
    }
  }, [checked])



  const isCheckedFunc = (e) => {
    const target = e.target;
    // console.log(target.checked);
    const objCheckbox = { [target.name]: target.value, isChecked: target.checked };


    setChecked(checked => {
      return [...checked.filter(val => val[target.name] !== objCheckbox[target.name]), objCheckbox];
    });

  }

  return (
    <>
      <div className="filters">
        <div className="filters__content">
          <div className="filters__block">
            <div className="filters__choose">Выбранные фильтра</div>
            <div className="filters__cancel">Сбросить</div>
          </div>
        </div>

        <Filter title="Обувь">
          <div>
            <input type="text" placeholder="Поиск Обувь" name="search" />
          </div>

          {filterGroup.map((item) => (
            <div className="filters__check" key={item.id}>
              <input onChange={(e) => isCheckedFunc(e, item.group)} id={item.for} type="checkbox" name={item.group} />
              <label htmlFor={item.for}>{item.group}</label>
            </div>
          ))}
        </Filter>

        <Filter title="Бренды">
          <div>
            <input type="text" placeholder="Поиск бренда" name="search" />
          </div>

          {filtersBrends.map((item) => (
            <div className="filters__check" key={item.id}>
              <input id={item.for} type="checkbox" name="check" />
              <label htmlFor={item.for}>{item.brend}</label>
            </div>
          ))}
        </Filter>
      </div>
    </>
  );
};
