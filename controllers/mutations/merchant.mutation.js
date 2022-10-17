const Merchant = require("../../model/merchant.model");

const createMerchant = async (_, { data }) => {
  return Merchant.query().insert(data);
};

const updateMerchant = async (_, { id, data }) => {
  await Merchant.query().findById(id).update(data);

  const findData = await Merchant.query().findById(id);

  return findData;
};

const toggleActiveMerchant = async (_, { id }) => {
  const findData = await Merchant.query().findById(id);

  await Merchant.query().findById(id).update({
    isActive: !findData.isActive,
  });

  return {
    message: "Toggle merchant successful",
  };
};

module.exports = {
  createMerchant,
  updateMerchant,
  toggleActiveMerchant,
};
