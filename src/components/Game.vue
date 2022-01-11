<template>
    <div class="container">
      <div v-if="walletConnected" class="topconatiner">
        Wallet connected: x04f..24df
      </div>
      <div v-else class="topconatiner">
        <a href="#" id="connectWalletbtn" v-on:click="connectWallet">Connect wallet</a>
      </div>
      <div class="wallet-flex">
        <div style="flex-grow: 1;">
        <div class="mobile">
            <div class="header">
               <div class='btnmenu'>
                 <button class="btndeposit change" v-on:click="deposit('BUSD')"><span>Deposit DFNX</span></button>
               </div>
               <div class='btnmenu'>
                 <button class="btnwithdraw change"><span>Withdraw DFNX</span></button>
               </div>
                    
            </div>
            <div class="content">
                <div class="total">
                    <div class="label">Ingame Reward balance</div>
                    <div class="value">0</div>
                </div>
                <div class="total">
                    <div class="label">Ingame DFNX balance</div>
                    <div class="value">0</div>
                </div>
                <div style="padding-top: 23px">
                <button class='btnaction change'><span>Mint NFT</span></button>
                </div>
                <div>
                <button class='btnaction change'><span>Play</span></button>
                </div>
                <div class="list">
                    <div class="item1">
                        <div class="section1">
                            <div class="text">
                                <div class="title">DUNEFALL</div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        </div>
            <NFT />
        </div>
    </div>
</template>
<script>

import Web3 from 'web3';
import NFT from './NFT.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import contractAbi from './games/cont.json';

import { GET_GAME_STATUS, START_GAME } from '../store/game';

import {
  GET_ACCOUNT_ADDRESS,
  GET_IS_WALLET_CONNECTED,
  SET_IS_WALLET_CONNECTED,
  SET_ACCOUNT_ADDRESS
} from '../store/wallet';

export default {
  name: 'Game',
  components: {
    NFT
  },
  data: () => ({
  }),
  mounted() {
    this.connectWallet()
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      status: GET_GAME_STATUS,
      walletAddress: GET_ACCOUNT_ADDRESS,
      walletConnected: GET_IS_WALLET_CONNECTED,
      setConnected: SET_IS_WALLET_CONNECTED,
      setWalletAddress: SET_ACCOUNT_ADDRESS
    })
  },
  methods: {
    ...mapActions({
      startGameApi: START_GAME,
    }),
    ...mapMutations({
    }),

    async deposit(value, token) {
      const contract = '0x340f2d79a6f9df426c1df4a84934a221a2b8ec05';
      const web3 = new Web3(Web3.givenProvider);
        if (token === 'BUSD' || token !== 'BUSD') {
          const myContract = new web3.eth.Contract(
            contractAbi,
            '0x397bBd6A0E41bdF4C2F971731E380Db8Ad06eBc1'
          )
          const result = await myContract.methods.deposit(value).send({
            to: contract,
            from: this.walletAddress});
          console.log(result);
        }
    },

    async connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.setConnected(true);
        this.setWalletAddress(accounts[0]);
      }
    },

    async withdraw(value, token) {
      const contract = '0x340f2d79a6f9df826c1df4a85934a226a2b8ec00';
      const web3 = new Web3(Web3.givenProvider);
        if (token === 'BUSD') {
          const myContract = new web3.eth.Contract(
            contractAbi,
            '0x397bBd6A0E41bdF4C3F971731E180Db8Ad06eBc1'
          )
          const result = await myContract.methods.withdraw(value).send({
            to: contract,
            from: this.walletAddress,});
          console.log(result);
        }
    },
    
    async signUser(){
     const web3 = new Web3(Web3.givenProvider);    
    console.log(
      await web3.eth.personal.sign(web3.utils.toHex("Sign to Login. Nonce: 2dda52a88115"), this.walletAddress)
      );
      }
  }
}
</script>

<style>
:root{
    --main-color: #fde7c5;
  }

* {
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    font-weight: 100;
    background-color: var(--main-color);
  }
  
  .container {
    height: 100%;
  }
  
  .mobile {
    width: 360px;
    height: 640px;
    text-align: center;
    justify-content: center;
    grid-template-rows: 10% auto;
    color: #fff;
    margin: auto;
    height: auto;
  }
  
  .mobile > div {
    padding: 1rem 2rem;
  }
  
  .header {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: #21223f;
    display: flex;
    margin-top: 25px;
    padding-bottom: 25px;
    justify-content: space-between;
    align-items: center;
  }
  
  .filter {
    display: flex;
    min-width: 80px;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid #828393;
    align-items: center;
    border-radius: 10px;
  }
  
  .calendar i,
  .select i,
  .total .label {
    color: #828393;
  }
  
  .content {
    background: #21223f;
    border-bottom-right-radius: 1rem;
    display: grid;
    border-bottom-left-radius: 1rem;
  }
  
  .total {
    align-self: start;
    justify-self: center;
    flex-direction: column;
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  
  .total > div:not(:first-child):not(:last-child) {
    margin: 0.5rem;
  }
  
  .total .label,
  .card .label {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 0.8rem;
  }
  
  .total .value {
    font-size: 1.8rem;
  }
  
  .total .balance {
    background: #1f3a4a;
    color: #02ca8c;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
  
  .cards {
    display: grid;
    overflow-x: auto;
    overflow-y: hidden;
    align-self: start;
    grid-template-columns: repeat(auto-fill, minmax(auto, 0));
    grid-gap: 10px;
  }
  
  .card {
    min-width: 130px;
    height: 90px;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .green {
    background: #00cccc;
  }
  
  .magenta {
    background: #7359ff;
  }
  
  .gray {
    background: #7a7faf;
  }
  
  .card .balance {
    display: flex;
    align-self: start;
    padding: 0.5rem 0;
    width: 60px;
    justify-content: space-around;
    font-size: 0.8rem;
  }
  
  .card .label {
    color: #adffff;
    font-size: 0.7rem;
  }
  
  .card .item {
    align-self: start;
    padding: 0.5rem 0;
    height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card .arrow-up {
    transform: rotateZ(45deg);
  }
  
  .card .item .value {
    font-size: 1.3rem;
  }
  
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #21233f;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #676767;
    border-radius: 10px;
  }
  
  .menu {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
  }
  
  .menu li {
    height: 40px;
    position: relative;
  }
  
  .menu label,
  .menu input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
  }
  
  .menu input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
  }
  
  .menu input[type="radio"]:checked + label {
    border-bottom: 1px solid #2181ff;
    opacity: 1;
  }
  
  .menu input[type="radio"]:checked + label i {
    color: #2181ff;
  }
  
  .menu label {
    cursor: pointer;
    z-index: 90;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .menu label:hover {
    opacity: 0.7;
  }
  
  .list {
    background: #211c3a;
    display: grid;
    grid-gap: 5px;
    padding: 5px 0;
    overflow-y: auto;
    /* text-align: center; */
    margin: auto;
  }
  
  .list div[class^="item"] {
    display: flex;
    justify-content: space-between;
    background: #21223f;
    padding: 10px 0;
  }
  
  .list div[class^="section"] {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  
  .list .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  
  .list .icon.up {
    color: #00ff00;
    transform: rotateZ(30deg);
  }
  
  .list .icon.down {
    color: #ff0000;
    transform: rotateZ(-150deg);
  }
  
  .list .description {
    color: #7d7d7d;
  }
  
  .list .signal {
    font-weight: bold;
  }
  
  .list .signal.positive {
    color: #00ff00;
  }
  
  .list .signal.negative {
    color: #ff0000;
  }
  

#lastgame {
  margin-top: 20px;
  height: 40px;
}

.btndeposit:hover {
background-color:#3e4074;  }

.btnwithdraw:hover {
background-color:#3e4074; }

.btnplay:hover {
background-color:#3e4074; }

.change:hover span {
  display: none
}

.change:hover:before {
  content: "Coming soon!"
}

  .btnwithdraw {
  background-color: #21223f;
  color: white;
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  border: 2px solid rgb(133, 76, 76);
  letter-spacing:1px;
  text-shadow:0;
  cursor: pointer;
  transition: all 0.25s ease;
  }
.btndeposit {
  background-color: #21223f;
  color: white;
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  border: 2px solid rgb(71, 105, 71);
  letter-spacing:1px;
  text-shadow:0;
  cursor: pointer;
  transition: all 0.25s ease;
  }
  .btnaction {
  background-color: #21223f;
  color: white;
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  border: 2px solid rgb(71, 105, 71);
  letter-spacing:1px;
  text-shadow:0;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-bottom: 20px;
  }


.topconatiner {
  color: black;
  font: 20px;
  margin-top: 30px;
}


	#connectWalletbtn{
		border: 2px solid black;
		padding: 4px 8px;
		color: rgb(8, 8, 8);
		cursor: pointer;
		position: relative;
		overflow: hidden;
		font-size: 20px;
		font-family: sans-serif;
		transition: all .5s;
    text-decoration: none;
    border-radius: 15px;
		}

	#connectWalletbtn:before{
			width: 100%;
			height: 100%;
			content: '';
			margin: auto;
			/* position: absolute; */
			top:  0%;
			left: 0%;
			background: #212121;
			transition: all .5s;
			z-index: -1;
      border-radius: 15px;
			
		}
	#connectWalletbtn:after{
			width: 100%;
			content: '';
			margin: auto;
			/* position: absolute; */
			top:  0%;
			left: 0%;
			background: #212121;
			transition: all .5s;
			z-index: -1;
      border-radius: 15px;
			
	}
	#connectWalletbtn:hover{
		color: #f0e5e5;
	}
	#connectWalletbtn:hover:before{			
			transform: rotateX(90deg);

	}
	#connectWalletbtn:hover:after{
			transform: rotateY(90deg);

	}

.wallet-flex{
 display:flex; justify-content: center;align-items: center;
 flex-wrap: wrap;
 margin: 5%;
 margin-top: 50px;
}
</style>
