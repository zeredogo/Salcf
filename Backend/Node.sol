// SPDX - License-Identifier: MIT
pragma solidity ^0.8.3;

contract Node{
    string public Name;
    uint256 public Price;
    address public Sender; 

    function getName(string memory _name) public view returns{
        return _name = 'salcf';
    } 

    function getPrice(uint256 _price) public view returns{
        return _price = ;
    }

    function getSender(address _sender) public view returns{
        return _sender = msg.sender
    } 
}