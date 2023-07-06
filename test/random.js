const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Randomiser contract", async function () {
  it("Deployment should return randomised array", async function () {
    const randomContract = await ethers.deployContract("RandomChooser");
    const entrys = Array.from(Array(100).keys());

    await randomContract.randomiseSequence("test", 6, entrys);

    const currentRandoms = await randomContract.viewResults("test");

    expect(currentRandoms.length).to.equal(6);
  });
  it.only("Arrays should always be length 6", async function () {
    const randomContract = await ethers.deployContract("RandomChooser");
    const resultArrays = [];

    for (var i = 0; i < 50; i++) {
      const key = `${i}_test`;

      const entrys = Array.from(Array(10).keys());

      await randomContract.randomiseSequence(key, 6, entrys);

      const currentRandoms = await randomContract.viewResults(key);

      resultArrays.push(currentRandoms);
    }

    expect(resultArrays.every((val, i, arr) => val.length === 6)).to.equal(true);
  });
});
