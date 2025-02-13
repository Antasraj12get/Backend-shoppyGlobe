import Cart from "./models/Cart.js";

export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.create({ userId: req.user.id, products: [{ productId, quantity }] });
    res.json(cart);
};

export const updateCart = async (req, res) => {
    const { quantity } = req.body;
    await Cart.findByIdAndUpdate(req.params.id, { quantity });
    res.json({ message: "Cart updated" });
};

export const removeFromCart = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
};
