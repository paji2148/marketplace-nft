import jsip from "@/api/smartContract.json";
import Web3 from "web3";

const nftContract = new web.eth.Contract(jsip, '0x1368601D448737D7393C88DadDbE5216309ea6E6');
const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
const transactionParameters = {
    to: "0x1368601D448737D7393C88DadDbE5216309ea6E6",
    from: "0xd0d493225039fEb11CA072f8F539e32c5aC19175",
    'data': nftContract.methods.mint(accounts[0], 1).encodeABI()
};
try {
    await window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
    return {
        success: true,
    }
} catch (error) {
    return {
        success: false,
    }
}



// chsin id
const web = new Web3(Web3.givenProvider);
const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
const chainId = await web.eth.getChainId();
console.log(chainId)
this.accountConnected = accounts[0]
this.connected = true;





// sign example
// recipient is the address that should be paid.
// amount, in wei, specifies how much ether should be sent.
// nonce can be any unique number to prevent replay attacks
// contractAddress is used to prevent cross-contract replay attacks
function signPayment(recipient, amount, nonce, contractAddress, callback) {
    var hash = "0x" + abi.soliditySHA3(
        ["address", "uint256", "uint256", "address"],
        [recipient, amount, nonce, contractAddress]
    ).toString("hex");

    web3.eth.personal.sign(hash, web3.eth.defaultAccount, callback);
}