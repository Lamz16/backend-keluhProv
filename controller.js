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

exports.getAllCategories = function (req, res) {
    connection.query(
        "SELECT * FROM categories",
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};

exports.getCategoryById = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM categories WHERE id = ?", [id],
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getAllDiscussions = function (req, res) {
    connection.query(
        "SELECT * FROM discussions",
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};

exports.getDiscussionById = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM discussions WHERE id = ?", [id],
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getAllNews = function (req, res) {
    connection.query(
        "SELECT * FROM news",
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getNewsById = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM news WHERE id = ?", [id],
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};

exports.getAllRegencies = function (req, res) {
    connection.query(
        "SELECT * FROM regencies",
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getRegencyById = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM regencies WHERE id = ?", [id],
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getAllUsers = function (req, res) {
    connection.query(
        "SELECT * FROM users",
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};


exports.getUserById = function (req, res) {
    let id = req.params.id;
    console.log("ID yang diterima:", id);  // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM users WHERE id = ?", [id],
        function (error, rows) {
            if (error) {
                console.log(error);  // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows);  // Kirim data dalam format JSON
            }
        }
    );
};

  