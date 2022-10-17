const Merchant = require("../../model/merchant.model");

const getMerchants = async (_, { page, limit, orderBy }) => {
  const orderByList = orderBy
    ? [orderBy]
    : [
        {
          column: "id",
          order: "asc",
        },
      ];
  const data = await Merchant.query().page(page, limit).orderBy(orderByList);

  return data.results;
};

const getMerchantDetail = async (_, { id }) => {
  const findData = await Merchant.query().findById(id);

  return findData;
};

module.exports = {
  getMerchants,
  getMerchantDetail,
};
