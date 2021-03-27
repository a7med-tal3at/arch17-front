import React, { Component } from "react";
import { BiChevronRight } from "react-icons/bi";
class StepOne extends Component {
 state = {};
 render() {
  return (
   <div id="add-product-one">
    <h3 className="light-head">What Kind of product you want to add ?</h3>
    <div className="product-kinds">
     <button>
      Furniture <BiChevronRight />
     </button>
     <button>
      Lighting{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Decore{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Bathroom{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Wellness{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Kitchen{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Finishes Materials{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
     <button>
      Construction Products{" "}
      <span>
       <BiChevronRight />
      </span>
     </button>
    </div>
   </div>
  );
 }
}

export default StepOne;
