const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const {expect} = require("chai");

describe("Token contract 3", ()=> {
    async function deployTokenFixture(){
        const [owner, addr1, addr2] = await ethers.getSigners();
        const hardhatToken = await ethers.deployContract("Token");
        await hardhatToken.waitForDeployment();
        return { hardhatToken, owner, addr1, addr2 };
    }

describe("Deployment", ()=> {
})

describe("Transactions", ()=>{
});

describe("Events", ()=>{
})
});