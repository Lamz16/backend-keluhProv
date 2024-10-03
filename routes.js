"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/")
  .get(jsonku.index);

  app.route("/complaints")
  .get(jsonku.tampilComplaints);

  app.route("/complaint-detail/:id")
  .get(jsonku.tampilComplaintId);

  app.route("/category")
  .get(jsonku.tampilKategori)

  app.route("/category/:id")
  .get(jsonku.tampilKategoriId)

  app.route("/tambah-category")
  .post(jsonku.tambahKategori)
};
