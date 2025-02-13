import app from "./src/app.js";

const PORT = process.env.PORT || 5300;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import cartRoutes from './routes/cartRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);

// const PORT = process.env.PORT || 5300;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
