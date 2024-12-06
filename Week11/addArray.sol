//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

contract Adder {
    uint public constant MAX=10;
    uint[MAX] public array;

    constructor (){
        for (uint i = 0; i< MAX; i++){
            array[i] = i;
        }
    }
    function add() public view returns (uint){
        uint sum;
        for (uint i = 0; i< MAX; i++)
            sum+=array[i];
        return sum;
    } 

}