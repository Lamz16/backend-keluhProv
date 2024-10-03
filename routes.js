"use strict";

module.exports = function (app) {
    var jsonku = require("./controller");

    app.route("/")
        .get(jsonku.index);

    app.route("/complaints")
        .get(jsonku.tampilComplaints);

    /*get by id detail complaint*/
    app.route("/complaint-detail/:id")
        .get(jsonku.tampilComplaintId);

    // Mengambil semua kategori
    app.route("/categories")
        .get(jsonku.getAllCategories);

// Mengambil kategori berdasarkan ID
    app.route("/categories/:id")
        .get(jsonku.getCategoryById);


    // Mengambil semua diskusi
    app.route("/discussions")
        .get(jsonku.getAllDiscussions);

// Mengambil diskusi berdasarkan ID
    app.route("/discussions/:id")
        .get(jsonku.getDiscussionById);

// Mengambil semua berita
    app.route("/news")
        .get(jsonku.getAllNews);

// Mengambil berita berdasarkan ID
    app.route("/news/:id")
        .get(jsonku.getNewsById);

// Mengambil semua daerah (regencies)
    app.route("/regencies")
        .get(jsonku.getAllRegencies);

// Mengambil daerah berdasarkan ID
    app.route("/regencies/:id")
        .get(jsonku.getRegencyById);

    // Mengambil semua pengguna
    app.route("/users")
        .get(jsonku.getAllUsers);

// Mengambil pengguna berdasarkan ID
    app.route("/users/:id")
        .get(jsonku.getUserById);

};
