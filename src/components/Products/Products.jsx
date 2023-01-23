import React, { useState } from "react";
import "./Products.scss";
import { products } from "../../DaynamicData";
import ReactPaginate from "react-paginate";

const Products = ({ prou }) => {
  const [product, setProduct] = useState(products.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const PerPage = 4;
  const pageVisted = pageNumber * PerPage;

  const ShiftingProduct = product
    .slice(pageVisted, pageVisted + PerPage)
    .map(item => (
      <li key={item.id}>
        <img src={item.Img} alt="" />
        <h1>{item.Nmae}</h1>
      </li>
    ));

    const pageCount = Math.ceil(product.length / PerPage);

    const onchagePage = ({selected}) => {
        setPageNumber(selected)
    }

  return (
    <div className="product">
      <div className="top">
        <h1>All Products</h1>
      </div>
      <div className="productItem">
        <ul className="listItem">
          {ShiftingProduct}
        </ul>
        <div className="prev-nex">
          <ReactPaginate 
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={onchagePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisb"}
            activeClassName={"paginAct"}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
