const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const {expect} = require("chai");

describe("Token contract 2", function() {
    async function deployTokenFixture(){
        const [owner, addr1, addr2] = await ethers.getSigners();
        const hardhatToken = await ethers.deployContract("Token");
        return { hardhatToken, owner, addr1, addr2 };
    }

it("Should assign totalSupply to owner", async function(){
    const {hardhatToken, owner} = await loadFixture(deployTokenFixture);
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect( await hardhatToken.totalSupply()).to.equal(ownerBalance);
})

it("Token transfer between owner and addr1", async function(){
})

it("Token transfer between addr1 and addr2", async ()=>{
})

it("Token reset: test initial balances of accounts", async function(){
})
            
})