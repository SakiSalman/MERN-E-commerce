import React, { useState } from "react";
import ProductTableCard from "./ProductTable/ProductTableCard";
import AdminModal from "./Modal/AdminModal";

const ProductTab = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <div className="product-tab-container">
        <div className="product-graph-area">
          <div className="adnew-btn">
            <button className="add-new-btn shadow-sm" onClick={()=> setModal(!modal)}>Add New</button>
          </div>
          <div className="products-items-wrapper">
            <h4>All Products</h4>
            <div className="Product-table shadow-sm">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" className="form-check-input" />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Regular Price</th>
                    <th scope="col">Sale Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductTableCard></ProductTableCard>
                  <ProductTableCard></ProductTableCard>
                  <ProductTableCard></ProductTableCard>
                  <ProductTableCard></ProductTableCard>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {modal && (
          <AdminModal title={"Add New Product"} setFunc={setModal}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Product Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Prdocut Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Regular Price
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Regular Price"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Sale Price
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Sale Price"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Category
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Product Photo
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">
                Product Gallery
              </label>
              <input multiple class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <button className="btn btn-primary btn-lg w-100">Publish</button>
            </div>


          </AdminModal>
        )}
      </div>
    </>
  );
};

export default ProductTab;
