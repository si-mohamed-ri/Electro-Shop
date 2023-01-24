import React, { useState } from "react";
import "./Phone.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { phone } from "../../DaynamicData";
import ReactPaginate from "react-paginate";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Phone = () => {
  const All = phone.length;
  const [product, setProduct] = useState(phone.slice(0, All));
  const [pageNumber, setPageNumber] = useState(0);
  console.log(setProduct);

  const PerPage = 10;
  const pageVisted = pageNumber * PerPage;

  const ShiftingProduct = product
    .slice(pageVisted, pageVisted + PerPage)
    .map((item) => (
      <li key={item.id}>
        <img src={item.Img} alt="" />
        <h1>{item.Uname}</h1>
        <div className="info">
          <span>{item.price} $</span>
          <div className="right">
            <AddShoppingCartOutlinedIcon />
          </div>
        </div>
      </li>
    ));

  const pageCount = Math.ceil(product.length / PerPage);

  const onchagePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="phone">
        <Sidebar />
        <div className="phone-container">
          <Navbar />
          <div className="phoneItems">
            <ul className="Items">{ShiftingProduct}</ul>
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
      </div>
      <Footer />
    </>
  );
};

export default Phone;
