import React from "react";
import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  useWhyDidYouUpdate('Categories', { value, onChangeCategory });


  return (
    <div className="categories">
      <ul>
        {categories.map((CategoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {CategoryName}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;











