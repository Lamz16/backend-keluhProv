"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/complaints").get(jsonku.tampilComplaints);

  /*get by id detail complaint*/
  app.route("/complaints/:id").get(jsonku.tampilComplaintId);

  // Mengupdate complaint berdasarkan ID
  app.route("/complaints/:id").put(jsonku.updateComplaint);

  // Menghapus complaint berdasarkan ID
  app.route("/complaints/:id").delete(jsonku.deleteComplaint);

  // Mengambil semua kategori
  app.route("/categories").get(jsonku.getAllCategories);

  app.route("/categories").post(jsonku.insertCategory);

  // Mengambil kategori berdasarkan ID
  app.route("/categories/:id").get(jsonku.getCategoryById);

  // Mengupdate category berdasarkan ID
  app.route("/categories/:id").put(jsonku.updateCategory);

  // Menghapus category berdasarkan ID
  app.route("/categories/:id").delete(jsonku.deleteCategory);

  // Mengambil semua diskusi
  app.route("/discussions").get(jsonku.getAllDiscussions);

  // Mengambil diskusi berdasarkan ID
  app.route("/discussions/:id").get(jsonku.getDiscussionById);

  // Menambah data discussions
  app.route("/discussions").post(jsonku.insertDiscussion);

  // Mengupdate discussion berdasarkan ID
  app.route("/discussions/:id").put(jsonku.updateDiscussion);

  // Menghapus discussion berdasarkan ID
  app.route("/discussions/:id").delete(jsonku.deleteDiscussion);

  // Mengambil semua berita
  app.route("/news").get(jsonku.getAllNews);

  // Mengambil berita berdasarkan ID
  app.route("/news/:id").get(jsonku.getNewsById);

  // Mengupdate news berdasarkan ID
  app.route("/news/:id").put(jsonku.updateNews);

  // Menghapus news berdasarkan ID
  app.route("/news/:id").delete(jsonku.deleteNews);

  // Mengambil semua daerah (regencies)
  app.route("/regencies").get(jsonku.getAllRegencies);

  // Mengambil daerah berdasarkan ID
  app.route("/regencies/:id").get(jsonku.getRegencyById);

  // Mengupdate regency berdasarkan ID
  app.route("/regencies/:id").put(jsonku.updateRegency);

  // Menghapus regency berdasarkan ID
  app.route("/regencies/:id").delete(jsonku.deleteRegency);

  // Mengambil semua pengguna
  app.route("/users").get(jsonku.getAllUsers);

  // Mengambil pengguna berdasarkan ID
  app.route("/users/:id").get(jsonku.getUserById);

  // Mengupdate user berdasarkan ID
  app.route("/users/:id").put(jsonku.updateUser);

  // Menghapus user berdasarkan ID
  app.route("/users/:id").delete(jsonku.deleteUser);

  app.route("/category").get(jsonku.tampilKategori);

  app.route("/category/:id").get(jsonku.tampilKategoriId);

  app.route("/tambah-category").post(jsonku.tambahKategori);
};
