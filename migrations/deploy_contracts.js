var Notary = artifacts.require("Notary");

module.exports = function(deployer) {
  deployer.deploy(Notary);
};
