## ANKER_ : an open source public notary tool on Ethereum

## ABOUT 
Witnessing a signature at a certain moment in time by a decentralized network is one of the basic ingredients in almost all blockchain use cases. 

A notary is a person licensed by the government to perform acts in legal affairs, in particular witnessing signatures on documents (wiki).

The basic principle behind this is that someone else than you can vouch that a certain piece of data existed and signed by you at a certain moment of time. Anker replaces that person by the Ethereum network.

Given the fact that the basic principle behind the notary system effectively didn’t change much over the last 400 years, we hope that with this tool, we can convince governments that notarisation now can be done faster, cheaper and more reliable.


## HOW IT WORKS
### 1. Calculate Unique Fingerprint
  Each document has unique fingerprints. One of those fingerprints is the so called SHA-256 Hash. The cool thing about SHA-256 hashes is that they’re easy to calculate, but very hard to forge! 
### 2.Persist Fingerprint To Blockchain
  Once the hash is calculated, Anchor creates a small contract which allows you to add this hash to the Ethereum  blockchain. This contract is then broadcasted, and ready to be mined.
### 3. Share Distributed Proof
  As soon as the contract is mined into the blockchain, everyone in the network can now verify that as of that block’s time, the document was in existence, signed by you. Additionally you can let someone co-sign a document when the document is registered, creating a chain of signatures. 
