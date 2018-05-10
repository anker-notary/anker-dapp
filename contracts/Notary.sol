pragma solidity ^0.4.18;

contract Notary {

  struct Signature {
    address owner;
    uint blockNumber;
  }
  
  struct Document {
    Signature[] signatures;
  }

  // state
  mapping (bytes32 => Document) private Documents;


  // adds a signature to a Document
  // *transactional function*
  function addDocumentSignature(bytes32 fingerprint) public {  
    Documents[fingerprint].signatures.push(Signature({blockNumber:block.number, owner: msg.sender}));
  }
  
  // returns a Document with signatures
  // *read-only function*
  function getDocumentSignatures(bytes32 fingerprint) public constant returns (Document) {
    return Documents[fingerprint];
  }
}