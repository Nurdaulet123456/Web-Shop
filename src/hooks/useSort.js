import {useState, useCallback} from 'react';

export const useSort = (categorys) => {
    const [sort, setSort] = useState(false);

  const handleSort = useCallback(() => {
    if (!sort) {
        setSort(true);
        return categorys.sort((a, b) => a.price - b.price);
    } else {
        setSort(false)
        return categorys.sort((a, b) => b.price - a.price)
    }
  }, [sort])

  return {
    handleSort
  }
}
;
