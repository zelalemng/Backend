const Order = require('../models/Order');
const User = require('../models/user');
// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('category_id');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.orderId = async (req, res) => {
  try {
    const order = await Order.findOne({ order_id: req.params.orderId }).populate('category_id');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// Create a new order
exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
