import React from "react";

const Paginations = ({ postperpage, totalpost,paginate }) => {
  const pagelength = [];
  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    console.log(1, "xcvzx");
    pagelength.push(i);
    console.log("pagelength", pagelength);
  }
  console.log("pagelength out", pagelength);
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {pagelength.map((number) => {
          return (
            <div key={number.id}>
              <a href="!#"  onClick={()=>paginate(number)}>{number}</a>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginations;
