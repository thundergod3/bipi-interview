const knex = require("knex");
const { Model } = require("objection");
const knexfile = require("../db/knexfile.js");

const db = knex(knexfile.development);

Model.knex(db);

class Merchant extends Model {
  static get tableName() {
    return "merchant";
  }
}

module.exports = Merchant;
