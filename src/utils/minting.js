import jsip from "@/api/smartContract.json";

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