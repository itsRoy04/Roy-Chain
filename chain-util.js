const EC = require('elliptic').ec;
//crypto algo
const ec = new EC('secp256k1') //cryptography algotithm

const uuidV1 = require('uuid').v1 //unique id for every transaction 


const SHA256 =require('crypto-js/sha256')
class ChainUtil{

static genKeyPair(){
    return ec.genKeyPair(); //used to create sign based key
}


static id(){
    return uuidV1();
}

static hash(data){
    return SHA256(JSON.stringify(data)).toString();
}

static verifySignature(publicKey,signature,dataHash){

    return ec.keyFromPublic(publicKey,'hex').verify(dataHash,signature)
}

}


module.exports = ChainUtil 