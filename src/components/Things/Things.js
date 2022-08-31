import React, { useContext, useEffect, useState, useCallback } from 'react';
import { DataContext } from '../context/Context';

const Things = () => {
  const { categorys, filterType } = useContext(DataContext);
  const [initialCategorys, setInitialCategorys] = useState([]);


  let obj = {
    category: [],
  };

  useEffect(() => {
    setInitialCategorys(initialCategorys => [...initialCategorys, ...obj.category]);
  }, [filterType]);

  const filterShoes = () => {
    const initialFilterType = filterType.filter((el) => {
      return el.length !== 0;
    });

    if (initialFilterType.length === 0) {
      return categorys;
    }
    // console.log(initialFilterType);
    for (let i = 0; i < initialFilterType.length; i++) {
      if (initialFilterType[i].isChecked) {
        // console.log(categorys.filter(val => initialFilterType[i][val.filter] === "on"), initialFilterType[i]);
        obj.category = (categorys.filter(val => initialFilterType[i][val.filter] === "on"));
        // return obj.category;
      }
    }
    return obj.category;
  };


  return (
    <>
      <div className="things">

        {
          // console.log(filterShoes())
          filterShoes().length > 0 &&
          filterShoes().map((item) => (
            <div className="things__block" key={item.id} >
              <img className='img' src={item.path} alt="" width={'180px'} height={'220px'} />

              <div className="things__content">
                <div className="things__title">{item.title}</div>
                <p className="things__filter">{item.filter}</p>
                <p className="things__price">{item.price} ₸</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Things;
