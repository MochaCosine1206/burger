const connection = require('./connection.js');


module.exports = {
function selectAll(body){
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [body], function(err, result) {
        if (err) {
          return res.status(500).end();
        }
    
        // Send back the ID of the new todo
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
      });
}

function insertOne(body){
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [body], function(err, result) {
        if (err) {
          return res.status(500).end();
        }
    
        // Send back the ID of the new todo
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
      });
}

function updateOne(body, id){
    connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [body, id], function(err, result) {
        if (err) {
          // If an error occurred, send a generic server failure
          return res.status(500).end();
        }
        else if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
}

}