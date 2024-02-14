// full-stack-application-test/public/server/db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: ''
});

    connection.query("CREATE DATABASE IF NOT EXISTS fragenAntwortenDB", function (err) {
        if (err) throw err;
        connection.changeUser({database : 'fragenAntwortenDB'}, function(err) {
            if (err) throw err;
            
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS FrageAntwort (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    frage TEXT,
                    antwort TEXT
                )`;
            connection.query(createTableQuery, function (err) {
                if (err) throw err;
                console.log("Tabelle FrageAntwort wurde erstellt oder existiert bereits.");
            });
        });
    });

    function addFrageAntwort(frage, antwort) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO FrageAntwort (frage, antwort) VALUES (?, ?)";
            connection.query(query, [frage, antwort], (err, result) => {
                if (err) reject(err);
                resolve(result.insertId);
            });
        });
    }
    
    function getFrageAntwort() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT id, frage, antwort FROM FrageAntwort", (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    function updateFrageAntwort(id, neueFrage, neueAntwort) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE FrageAntwort SET frage = ?, antwort = ? WHERE id = ?";
            connection.query(query, [neueFrage, neueAntwort, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    function deleteRowFrageAntwort(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM FrageAntwort WHERE id = ?";
            connection.query(query, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }    

module.exports = { addFrageAntwort, getFrageAntwort, updateFrageAntwort, deleteRowFrageAntwort };

