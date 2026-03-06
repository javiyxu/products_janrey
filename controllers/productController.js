//SQL
const connection = require('../config/db');

//Get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM userdata', (err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};


//Create a new user
//CRUD - Create
exports.createUser=(req,res)=>{
    const {productName,category,stockCount,locationCode,lastUpdated}=req.body;
    connection.query('INSERT INTO userdata (product_name, category, stock_count, location_code, last_updated) VALUES (?,?,?,?,?)',[productName,category,stockCount,locationCode,lastUpdated],(err,result)=>{
        if(err) throw err;
            res.json({message: 'User created succesfully', userId:result.insertId});
    });
};



