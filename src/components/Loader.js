import React from "react";
const Loader = ({ page, clickHandler }) => {
  let pages = [
      1, 2, 3, 4, 5,6,7,8,9,10
    ];
  
  return (
      <div className="pagination-buttons-list">
          {pages.map((ele, id) => {
      return (
        <button
          className={ele == page ? "active-btn" : ""}
          id={`button-${ele}`}
          key={id}
          onClick={() => {
            clickHandler(ele);
          }}
        >
          {ele}
        </button>
      );
    })}
      </div>
  )
}

export { Loader }