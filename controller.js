"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("aplikasi API berjalan", res);
};

exports.tampilComplaints = function (req, res) {
  connection.query("SELECT * FROM complaints", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else response.ok(rows, res);
  });
};

exports.tampilComplaintId = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
      "SELECT * FROM complaints WHERE id = ?", [id],
      function (error, rows) {
        if (error) {
          console.log(error);  // Ubah connection.log menjadi console.log
          res.status(500).send("Error retrieving data");
        } else {
          res.status(200).json(rows);  // Pastikan data dikirim dalam format JSON
        }
      }
    );
};
  