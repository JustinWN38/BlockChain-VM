const { expect } = require("chai");

describe("Token contract 1", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function(){
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    await hardhatToken.transfer(addr1.address, 500);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(500);
    let amount=100;
    await hardhatToken.connect(addr1).transfer(addr2.address, amount);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(400);
    console.log(amount)
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(amount);
  })
});
