import React from "react";

const ProductTableCard = () => {
  return (
    <>
      {" "}
      <tr>
        <th scope="row">1</th>
        <td class="pd-name-col">
          <a href="#">Brandix Air Compressor DELTA500</a>
          <p>Id : 01 || SKU : 134554</p>
        </td>
        <td>
          <span>T-shirt</span>
        </td>
        <td>250 Unit</td>
        <td>$250</td>
        <td>$150</td>
        <td className="pd-action-icon"><i class='bx bx-dots-horizontal-rounded'></i></td>
      </tr>
    </>
  );
};

export default ProductTableCard;
