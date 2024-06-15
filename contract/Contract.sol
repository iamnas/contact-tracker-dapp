// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contact {

    struct Contract {
        string name;
        uint phoneNumber;
        string email;    
    }

    Contract[] public contracts;

    event AddContract(string  _name,uint _phoneNumber,string  _email, uint _time);
    // event AddContracts(Contract _contract, uint _time);

    function addContract(string calldata _name,uint _phoneNumber,string calldata _email) public {

        contracts.push(Contract({
            name:_name,
            phoneNumber:_phoneNumber,
            email:_email

        }));

        emit AddContract(_name,_phoneNumber,_email,block.timestamp);

    }

    function addContracts(Contract calldata _contract) public {
        contracts.push(_contract);
        emit AddContract(_contract.name,_contract.phoneNumber,_contract.email,block.timestamp);
    }

    function getContractsSize() public view returns (uint){
        return contracts.length;
    }
}
