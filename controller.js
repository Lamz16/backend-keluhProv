"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("aplikasi API berjalan", res);
};

// -----COMPLAINTS----
exports.tampilComplaints = function (req, res) {
  connection.query("SELECT * FROM complaints", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else response.ok(rows, res);
  });
};

exports.tampilComplaintId = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM complaints WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Ubah connection.log menjadi console.log
        res.status(500).send("Error retrieving data");
      } else {
        response.ok(rows,res) // Pastikan data dikirim dalam format JSON
      }
    }
  );
};

exports.updateComplaint = function (req, res) {
  let id = req.params.id;
  let {
    user_id,
    category_id,
    regency_id,
    address,
    description,
    status,
    type,
    date,
    total_likes,
    created_at,
    updated_at,
    deleted_at
  } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE complaints SET user_id = ?, category_id = ?, regency_id = ?, address = ?, description = ?, status = ?, type = ?, date = ? , total_likes=?, created_at=?, updated_at=?, deleted_at=? WHERE id = ?",
    [
      id,
      user_id,
      category_id,
      regency_id,
      address,
      description,
      status,
      type,
      date,
      total_likes,
      created_at,
      updated_at,
      deleted_at,

    ],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating complaint");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Complaint not found");
      } else {
        res.status(200).send("Complaint updated successfully");
      }
    }
  );
};

exports.deleteComplaint = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM complaints WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting complaint");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Complaint not found");
      } else {
        res.status(200).send("Complaint deleted successfully");
      }
    }
  );
};

// kurang edit status komplain
// kurang hapus


exports.getAllCategories = function (req, res) {
  connection.query("SELECT * FROM categories", function (error, rows) {
    if (error) {
      console.log(error); // Log error untuk debugging
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(rows); // Kirim data dalam format JSON
    }
  });
};

exports.getCategoryById = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM categories WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows); // Kirim data dalam format JSON
      }
    }
  );
};

exports.insertCategory = function (req, res) {
  let { name, description } = req.body;

  connection.query(
    "INSERT INTO categories (name, description) VALUES (?, ?)",
    [name, description],
    function (error, results) {
      if (error) {
        console.log(error);
        res.status(500).send("Error inserting category");
      } else {
        res.status(201).send("Category inserted successfully");
      }
    }
  );
};

exports.updateCategory = function (req, res) {
  let id = req.params.id;
  let { name, description } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE categories SET name = ?, description = ? WHERE id = ?",
    [name, description, id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating category");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Category not found");
      } else {
        res.status(200).send("Category updated successfully");
      }
    }
  );
};

exports.deleteCategory = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM categories WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting category");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Category not found");
      } else {
        res.status(200).send("Category deleted successfully");
      }
    }
  );
};

exports.getAllDiscussions = function (req, res) {
  connection.query("SELECT * FROM discussions", function (error, rows) {
    if (error) {
      console.log(error); // Log error untuk debugging
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(rows); // Kirim data dalam format JSON
    }
  });
};

exports.getDiscussionById = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM discussions WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows); // Kirim data dalam format JSON
      }
    }
  );
};

exports.getDiscussionByComplaintId = function (req, res) {
    let id = req.params.id; // Mendapatkan ID dari URL
    console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
    connection.query(
        "SELECT * FROM discussions WHERE complaint_id = ?", // Ganti `id` dengan `complaint_id` jika diskusi terkait dengan ID aduan
        [id], // Gunakan ID yang diperoleh dari parameter URL
        function (error, rows) {
            if (error) {
                console.log(error); // Log error untuk debugging
                res.status(500).send("Error retrieving data");
            } else {
                res.status(200).json(rows); // Kirim data dalam format JSON
            }
        }
    );
};


exports.insertDiscussion = function (req, res) {
  let { id, user_id, admin_id, complaint_id, comment } = req.body;

  connection.query(
      "INSERT INTO discussions (id, user_id, admin_id, complaint_id, comment) VALUES (?, ?, ?, ?, ?)", 
      [id, user_id, admin_id, complaint_id, comment],
      function (error, results) {
          if (error) {
              console.log(error);
              res.status(500).send("Error inserting discussion");
          } else {
              res.status(201).send("Discussion inserted successfully");
          }
      }
  );
};


exports.updateDiscussion = function (req, res) {
  let id = req.params.id;
  let { user_id, admin_id, complaint_id, comment } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE discussions SET user_id = ?, admin_id = ?, complaint_id = ?, comment = ? WHERE id = ?",
    [user_id, admin_id, complaint_id, comment, id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating discussion");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Discussion not found");
      } else {
        res.status(200).send("Discussion updated successfully");
      }
    }
  );
};

exports.deleteDiscussion = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM discussions WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting discussion");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Discussion not found");
      } else {
        res.status(200).send("Discussion deleted successfully");
      }
    }
  );
};

exports.getAllNews = function (req, res) {
  connection.query("SELECT * FROM news", function (error, rows) {
    if (error) {
      console.log(error); // Log error untuk debugging
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(rows); // Kirim data dalam format JSON
    }
  });
};

exports.getNewsById = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM news WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows); // Kirim data dalam format JSON
      }
    }
  );
};

exports.updateNews = function (req, res) {
  let id = req.params.id;
  let { admin_id, category_id, title, content, total_likes } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE news SET admin_id = ?, category_id = ?, title = ?, content = ?, total_likes = ? WHERE id = ?",
    [admin_id, category_id, title, content, total_likes, id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating news");
      } else if (results.affectedRows === 0) {
        res.status(404).send("News not found");
      } else {
        res.status(200).send("News updated successfully");
      }
    }
  );
};

exports.deleteNews = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM news WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting news");
      } else if (results.affectedRows === 0) {
        res.status(404).send("News not found");
      } else {
        res.status(200).send("News deleted successfully");
      }
    }
  );
};

exports.getAllRegencies = function (req, res) {
  connection.query("SELECT * FROM regencies", function (error, rows) {
    if (error) {
      console.log(error); // Log error untuk debugging
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(rows); // Kirim data dalam format JSON
    }
  });
};

exports.getRegencyById = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM regencies WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows); // Kirim data dalam format JSON
      }
    }
  );
};

exports.updateRegency = function (req, res) {
  let id = req.params.id;
  let { name } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE regencies SET name = ? WHERE id = ?",
    [name, id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating regency");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Regency not found");
      } else {
        res.status(200).send("Regency updated successfully");
      }
    }
  );
};

exports.deleteRegency = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM regencies WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting regency");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Regency not found");
      } else {
        res.status(200).send("Regency deleted successfully");
      }
    }
  );
};

exports.getAllUsers = function (req, res) {
  connection.query("SELECT * FROM users", function (error, rows) {
    if (error) {
      console.log(error); // Log error untuk debugging
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(rows); // Kirim data dalam format JSON
    }
  });
};

exports.getUserById = function (req, res) {
  let id = req.params.id;
  console.log("ID yang diterima:", id); // Tambahkan log ini untuk debugging
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows); // Kirim data dalam format JSON
      }
    }
  );
};

exports.updateUser = function (req, res) {
  let id = req.params.id;
  let { name, email, password, telephone_number, profile_photo } = req.body; // Mengambil data dari body permintaan

  connection.query(
    "UPDATE users SET name = ?, email = ?, password = ?, telephone_number = ?, profile_photo = ? WHERE id = ?",
    [name, email, password, telephone_number, profile_photo, id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error updating user");
      } else if (results.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.status(200).send("User updated successfully");
      }
    }
  );
};

exports.deleteUser = function (req, res) {
  let id = req.params.id;

  connection.query(
    "DELETE FROM users WHERE id = ?",
    [id],
    function (error, results) {
      if (error) {
        console.log(error); // Log error untuk debugging
        res.status(500).send("Error deleting user");
      } else if (results.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.status(200).send("User deleted successfully");
      }
    }
  );
};



// -----COMPLAINTS----

// ----KATEGORI----
exports.tampilKategori = function (req, res) {
  connection.query("SELECT * FROM categories", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else response.ok(rows, res);
  });
};

exports.tampilKategoriId = function (req, res) {
  let id = req.params.id;
  console.log("Id : " + id);

  connection.query(
    "SELECT * FROM categories WHERE id=?",
    [id],
    function (error, rows) {
      if (error) {
        console.log(error);
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(rows);
      }
    }
  );
};

exports.tambahKategori = function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var description = req.body.description;

  connection.query(
    "INSERT INTO categories (id, name, description) VALUES (?, ?, ?)",
    [id, name, description],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil menambah data!", res);
      }
    }
  );
};

//kurang edit kategori
// hapus kategori
