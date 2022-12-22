


const mysql = require("mysql");

const connection = mysql.createConnection({

	host: "localhost",
	user: "root"
	password: "My$QL@31"
	databse: "nodejs"

});

connection.connect(function(error){

	if (error) throw error
		else console.log("connected to the database successfully")
});

app.get("/", function(req, res){

	res.sendFile(__dirname + "/lf.html");

})

app.listen(4500);

	