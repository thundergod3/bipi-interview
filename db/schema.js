const fs = require("fs");
const path = require("path");
const { gql } = require("apollo-server-express");
const {
  createMerchant,
  updateMerchant,
  toggleActiveMerchant,
} = require("../controllers/mutations/merchant.mutation.js");
const {
  getMerchants,
  getMerchantDetail,
} = require("../controllers/queries/merchant.query.js");

const typeDefs = [
  gql(
    fs.readFileSync(path.resolve(__dirname, "../graphql/input.graphql"), "utf8")
  ),
  gql(
    fs.readFileSync(
      path.resolve(__dirname, "../graphql/mutation.graphql"),
      "utf8"
    )
  ),
  gql(
    fs.readFileSync(path.resolve(__dirname, "../graphql/query.graphql"), "utf8")
  ),
  gql(
    fs.readFileSync(path.resolve(__dirname, "../graphql/type.graphql"), "utf8")
  ),
];

const resolvers = {
  Mutation: {
    createMerchant,
    updateMerchant,
    toggleActiveMerchant,
  },
  Query: {
    getMerchants,
    getMerchantDetail,
  },
};

module.exports = {
  resolvers,
  typeDefs,
};
