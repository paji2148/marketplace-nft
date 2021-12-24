web3.eth.personal.sign(`I am signing my one-time nonce: ${nonce}`, publicAddress, "test password!")
            .then((signature) => {
                handleAuth(publicAddress, signature)
            });