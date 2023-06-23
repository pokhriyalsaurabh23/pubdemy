import React from "react";

const CartItem: React.FC<{
  item: { id: number; imageUrl: string; title: string; discountedPrice: number; price: number };
}> = ({ item }) => {
  return (
    <div className="card mb-3" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.imageUrl} alt={item.title} className="img-fluid" style={{ height: "150px" }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{item.title}</h5>
              <div>
                <p className="card-text mb-0">
                  ₹{item.discountedPrice}
                </p>
                <p className="card-text mb-0 text-secondary text-decoration-line-through">₹{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
