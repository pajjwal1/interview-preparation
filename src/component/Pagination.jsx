import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setDatas(data.products);
    };
    fetchProducts();
  }, []);
  const pagginationStyle = {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
  };
  const spanStyle = {
    margin: "10px 0px",
    padding: "10px",
    border: "1px solid black",
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= datas.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      {datas.length > 0 && (
        <div>
          {datas.slice(page * 10 - 10, page * 10).map((element) => {
            return (
              <div key={element.id}>
                <img src={element.thumbnail} alt={element.title} />
                <span>{element.title}</span>
              </div>
            );
          })}
        </div>
      )}
      <div style={pagginationStyle}>
        <span style={spanStyle} onClick={() => selectPageHandler(page - 1)}>
          ⬅️
        </span>
        {[...Array(datas.length / 10)].map((_, id) => {
          return (
            <div>
              <span style={spanStyle} onClick={() => selectPageHandler(id + 1)}>
                <span
                  style={page === id + 1 ? { backgroundColor: "grey" } : {}}
                >
                  {id + 1}
                </span>
              </span>
            </div>
          );
        })}
        <span style={spanStyle} onClick={() => selectPageHandler(page + 1)}>
          ➡️
        </span>
      </div>
    </>
  );
};

export default Pagination;

// import React, { useEffect, useState } from "react";

// const URL = "https://jsonplaceholder.typicode.com/albums/1/photos";
// const RandomCode = () => {
//   const [apiData, setApiData] = useState([]);
//   const [page, setPage] = useState(1);
//   useEffect(() => {
//     fetch(URL)
//       .then((res) => res.json())
//       .then((data) => setApiData(data));
//   }, []);
//   return (
//     <div>
//       <h2>Now we will move towards Pagination example</h2>
//       {apiData.slice(page * 10 - 10, page * 10).map((data) => {
//         return <img key={data.id} src={data.thumbnailUrl} alt={data.title} />;
//       })}
//       <br />
//       <span onClick={() => (page <= 1 ? {} : setPage(page - 1))}>⬅️</span>
//       {[...Array(apiData.length / 10)].map((_, id) => {
//         return (
//           <>
//             <span key={id + 1} onClick={() => setPage(id + 1)}>
//               {id + 1}
//             </span>
//           </>
//         );
//       })}
//       <span
//         onClick={() => (page >= apiData.length / 10 ? {} : setPage(page + 1))}
//       >
//         ➡️
//       </span>
//     </div>
//   );
// };

// export default RandomCode;
