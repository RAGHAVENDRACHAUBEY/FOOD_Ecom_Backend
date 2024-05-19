const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: ObjectId,
      ref: "user",
    },
    productId: {
      type: ObjectId,
      ref: "product",
      required: true,
    },
    productname: {
      type: String,
    },
    oname: {
      type: String,
      required: true,
    },
    ophoneNumber: {
      type: String,
      required: true,
    },
    oemail: {
      type: String,
      required: true,
    },
    ocity: {
      type: String,
      required: true,
    },
    opincode: {
      type: String,
      required: true,
    },
    ocountry: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
    },
    paymentmethod: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: [
        "pending",
        "Confirm",
        "Shipped",
        "Outfordelivery",
        "Cancelled",
        "Delivered",
      ],
    },
  },
  { timestamps: true }
);

const orderhModel = mongoose.model("Order", orderSchema);
module.exports = orderhModel;
