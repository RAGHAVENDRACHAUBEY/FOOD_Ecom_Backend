const orderhModel = require("../../Model/User/orders");

class Order {
  async postOrder(req, res) {
    let orderdata = req.body[0];
    try {
      orderdata?.map((data) => {
        let neworder = new orderhModel({
          customerId: data.customerId,
          productId: data.productId,
          productname: data.productname,
          oname: data.oname,
          ophoneNumber: data.ophoneNumber,
          oemail: data.oemail,
          ocity: data.ocity,
          opincode: data.opincode,
          ocountry: data.ocountry,
          quantity: data.quantity,
          totalPrice: data.totalPrice,
          address: data.address,
          paymentId: data.paymentId,
          paymentmethod: data.paymentmethod,
        });

        neworder.save().then((data) => {
          console.log(data);
        });
      });
      return res.status(200).json({ success: "success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getallOrder(req, res) {
    try {
      const getOrder = await orderhModel
        .find({})
        .populate("customerId")
        .populate("productId")
        .sort({ _id: -1 });
      if (!getOrder) {
        return res.status(401).json({ message: "Data not found" });
      }
      return res.status(200).json({ success: getOrder });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getOrderwithId(req, res) {
    try {
      let id = req.params.id;
      // console.log("sab changa si: ", id);
      const getOrder = await orderhModel
        .find({ customerId: id })
        .populate("customerId")
        .populate("productId")
        .sort({ _id: -1 });
      if (!getOrder) {
        return res.status(400).json({ message: "Data not found" });
      }
      return res.status(200).json({ success: getOrder });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

const orderController = new Order();
module.exports = orderController;
