import React, { useState } from "react";
import "./Category.scss";
import { products } from "../../DaynamicData";
import ReactPaginate from "react-paginate";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Category = ({ prou }) => {
  const All = products.length;
  const [product, setProduct] = useState(products.slice(0, All));
  const [pageNumber, setPageNumber] = useState(0);
  console.log(setProduct);

  const PerPage = 6;
  const pageVisted = pageNumber * PerPage;

  const ShiftingProduct = product
    .slice(pageVisted, pageVisted + PerPage)
    .map((item) => (
      <li key={item.id}>
        <img src={item.Img} alt="" />
        <h1>{item.Nmae}</h1>
        <div className="info">
          <span>{item.price} $</span>
          <div className="right">
            <AddShoppingCartOutlinedIcon/>
            <FavoriteBorderOutlinedIcon className="favor"/>
          </div>
        </div>
      </li>
    ));

  const pageCount = Math.ceil(product.length / PerPage);

  const onchagePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="product">
      <div className="top">
        <h1>Last Products</h1>
      </div>
      <div className="productItem">
        <ul className="listItem">{ShiftingProduct}</ul>
      </div>
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
  );
};

export default Category;
