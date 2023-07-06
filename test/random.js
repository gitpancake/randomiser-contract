const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Randomiser contract", function () {
  it("Deployment should return randomised array", async function () {
    const randomContract = await ethers.deployContract("RandomChooser");

    const entrys = Array.from(Array(100).keys());
    await randomContract.randomiseSequence("test", 6, entrys);

    const currentRandoms = await randomContract.viewResults("test");

    console.log(currentRandoms);
  });
});
