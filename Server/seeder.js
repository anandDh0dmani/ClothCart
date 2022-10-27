import colors from 'colors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import connectDB from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const adminUser = createdUser[0]._id;

        const sampleProdcts = products.map((product) => {
            return { ...product, user: adminUser};
        });

        await Product.insertMany(sampleProdcts);

        console.log(`Data Imported `.green.inverse);
        process.exit();

    } catch(error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log(`Destroyed Data`.red.inverse)
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

(process.argv[2] === '-d') ? destroyData() : importData();