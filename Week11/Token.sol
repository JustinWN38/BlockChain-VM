//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openZeppelin/contract/access/Ownable.sol";
import "hardhat/console.sol";

contract TextToken is ERC20 {
    uint constant TOTAL_SUPPLY = 1000000;
    uint constant TOKENS_TO_CHANGE_TEXT = 10;
    string public text;
    address public owner;

    constructor () ERC20("TextToken", "TXT") {
        owner = msg.sender;
        _mint(owner, TOTAL_SUPPLY * 10 ** decimals());
    } 

    function setText(string memory _text) public {
        require(balanceOf(msg.sender) >=10, "insufficient funds");  // check - balance is sufficiently in credit to pay for the transaction
        console.log("Pre tx Balance:", balanceOf(msg.sender));
        transfer(owner, TOKENS_TO_CHANGE_TEXT);                     // effects - transfer the cost
        console.log("Post tx Balance:", balanceOf(msg.sender));
        text= _text;                                                // interact - change the text
    }

}

//Write tests for functions

