import React from "react";
import { useForm } from "react-hook-form";

const CheckoutPaymentMethod: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
      console.log(data);
      // Perform submit logic here
    };
    return (
        <div className="mb-4 border border-light shadow p-3">
            <div className="d-flex justify-content-between">
                <h2>Payment Method</h2>
                <p className="text-secondary">
                    Secured Connection <i className="fa-solid fa-lock"></i>
                </p>
            </div>
            <form>
            <div className="mb-3">
          <label htmlFor="cardName" className="form-label fw-bold">
            Name on Card
          </label>
          <input
            type="text"
            className="form-control"
            id="cardName"
            placeholder="Name on card"
            {...register("cardName", { required: true })}
          />
          {errors.cardName && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label fw-bold">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber", { required: true })}
          />
          {errors.cardNumber && <span>This field is required</span>}
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="securityCode" className="form-label fw-bold">
              Security Code
            </label>
            <input
              type="text"
              className="form-control"
              id="securityCode"
              placeholder="Security code"
              {...register("securityCode", { required: true })}
            />
            {errors.securityCode && <span>This field is required</span>}
          </div>
          <div className="col-md-6">
            <label htmlFor="expiryDate" className="form-label fw-bold">
              Expiry Date
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              placeholder="MM/YY"
              {...register("expiryDate", { required: true })}
            />
            {errors.expiryDate && <span>This field is required</span>}
          </div>
        </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="saveCard"
                    />
                    <label className="form-check-label" htmlFor="saveCard">
                        Securely save this card for my later purchase
                    </label>
                </div>
                <div className="mb-3">
                    <div className="form-check card bg-light">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="upi"
                        />
                        <label className="form-check-label" htmlFor="upi">
                            <img src="data:image/png;base64,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" style={{ height: "30px", width: "30px" }} alt="Paytm" />
                            UPI
                        </label>
                    </div>
                    <div className="form-check card bg-light">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="paytm"
                        />
                        <label className="form-check-label" htmlFor="paytm">
                            <img src="data:image/png;base64,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" style={{ height: "30px", width: "30px" }} alt="Paytm" />
                            Paytm
                        </label>
                    </div>
                    <div className="form-check card bg-light">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="netbanking"
                        />
                        <label className="form-check-label" htmlFor="netbanking">
                            <i className="fa-solid fa-building-columns"></i> Net Banking
                        </label>
                    </div>
                    <div className="form-check card bg-light">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="mobilewallet"
                        />
                        <label className="form-check-label" htmlFor="mobilewallet">
                            <i className="fa-solid fa-wallet"></i> Mobile Wallets
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPaymentMethod;
