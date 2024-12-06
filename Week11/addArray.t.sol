// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {Adder} from "../src/addArray.sol";
import {Vm} from "../forge-std/Vm.sol";

contract addArrayTest is Test{
    Adder public adder;

    function setUp() public {
        adder = new Adder();
    }

    function test_add() public {
        uint256 sum;
        sum = adder.add();
        assertEq(sum, 45); //9
//        assertEq(sum, 4950); //100
    }

}