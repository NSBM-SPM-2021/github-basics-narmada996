const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

// const PORT = 3001;

//Database Connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "spm_librarymanagementsystem"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
//View Book Details
app.get("/api/get", (req,res) =>{
    // const sqlSelect = "SELECT * FROM books_tb";
    // db.query(sqlSelect, (err, result) => {
    //     res.send(result);
    // });
    console.log("hello");
});
//Insert Book Details
app.post("/api/insert", (req,res) => {

    const bookid = req.body.bookid;
    const isbnno = req.body.isbnno;
    const booktitle = req.body.booktitle;
    const author = req.body.author;
    const publishdate = req.body.publishdate;
    const addingdate = req.body.addingdate;
    const pages = req.body.pages;
    const price = req.body.price;
    const source = req.body.source;
    const remarks = req.body.remarks;

    const sqlInsert = "INSERT INTO books_tb (Book_ID,ISBN_NO,Book_Title,Author,Publish_Date,Adding_Date,Pages,Price,Source,Remarks)VALUES(?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [bookid,isbnno,booktitle,author,publishdate,addingdate,pages,price,source,remarks],(err, result) => {
        console.log(result);
    });
});
//Delete Book Details
app.delete('/api/delete/:Book_ID',(req, res) => {
    const deletebookid = req.params.Book_ID;
    const sqlDelete = "DELETE FROM books_tb WHERE Book_ID = ?";

    db.query(sqlDelete, deletebookid, (err, result) => {
        if (err) console.log(err);
    });
});
//Update Book Details
app.put("/api/update",(req,res) => {
    const updatebookid = req.body.updatebookid;
    const updateisbnno = req.body.updateisbnno;
    const updatebooktitle = req.body.updatebooktitle;
    const updateauthor = req.body.updateauthor;
    const updatepublishdate = req.body.updatepublishdate;
    const updateaddingdate = req.body.updateaddingdate;
    const updatepages = req.body.updatepages;
    const updateprice = req.body.updateprice;
    const updatesource = req.body.updatesource;
    const updateremarks = req.body.updateremarks;

    var sqlUpdate = "UPDATE LOW_PRIORITY IGNORE books_tb SET ISBN_NO = ?, Book_Title = ?, Author = ?, Publish_Date = ?, Adding_Date = ?, Pages = ?, Price = ?, Source = ?, Remarks = ? WHERE Book_ID = ?";
    console.log(sqlUpdate);
    db.query(sqlUpdate,[updateisbnno,updatebooktitle,updateauthor,updatepublishdate,updateaddingdate,updatepages,updateprice,updatesource,updateremarks,updatebookid],(err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
});


//Server
app.listen(3001, () => {
    console.log("running on port 3001");
});

//Server
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`running on port ${PORT}`);
// });