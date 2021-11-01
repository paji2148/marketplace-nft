<template>
    <div class="js-filter-board filter__board pt-4 d-none d-lg-block" id="js-category">
      <div v-if="!onBscChain"><ChainError/></div>
      <div v-else class="filter__board-name">My Tokens</div>

      <div class="filter__summary-line"></div>

      <div class="filter__summary d-flex flex-column" style="justify-content: space-around">
        <div class="filter__summary d-flex flex-column" style="justify-content: space-around">
          <div class="d-flex justify-content-between">
            InGame: 1 $CRG <a style="font-size: 21px; float:left; text-decoration:none;" title="Transfer to BSC" href="#" class="js-claim-tokens" >
            <span style="color: rgb(230 0 0); margin-left: 20px;">--&gt;</span>
          </a>
          </div>
          <div class="d-flex justify-content-between js-reload-my-tokens">
            <a style="font-size: 21px;display: none; float:right;text-decoration:none;" href="#" class="js-stake-tokens avxt-balance">
              <span style="color: green; margin-right: 20px;">&lt;--</span>
            </a> OnBSC:&nbsp;<span id="on-chain-balance"></span>1 &nbsp;$CRG
          </div>
        </div>
      </div>
      <div class="filter__summary" style="justify-content: space-around">
        <a href="#">
          <button class="btn-primary">
            MINT Students
          </button>
        </a>
      </div>
      <div class="filter__summary-line"></div>

      <div class="filter__categories">
        <a href="#" class="filter__category">My CRGS</a>
        <a href="#" class="filter__category">My Logs</a>
      </div>
      <div class="filter__summary-line"></div>
      <div class="filter__categories">
        <a href="#" class="filter__category">My NFTS</a>
      </div>
  </div>
</template>

<script>

import Web3 from 'web3';
import ChainError from "@/components/wallet/chainError";
export default {
  name: 'Wallet',
  components: {ChainError},
  data: () => ({
    accountConnected: null,
    connected: false,
    onBscChain: true,
  }),

  methods: {
    async connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        const web = new Web3(Web3.givenProvider);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = await web.eth.getChainId();
        console.log(chainId)
        this.accountConnected = accounts[0]
        this.connected = true;
      }
    }
  },
  mounted() {
    this.connectWallet();
  },
  created: function() {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts[0] !== this.accountConnected) {
        this.connected = false;
      }
    });
    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });
  },
}
</script>
<style>
*,:after,:before{box-sizing:border-box;}
a{color:#007bff;text-decoration:none;background-color:transparent;}
a:hover{color:#0056b3;text-decoration:underline;}
button{border-radius:0;}
button:focus:not(:focus-visible){outline:0;}
button{overflow:visible;}
button{-webkit-appearance:button;}
button::-moz-focus-inner{padding:0;border-style:none;}
.d-none{display:none!important;}
.d-flex{display:flex!important;}
@media (min-width:992px){
  .d-lg-block{display:block!important;}
}
.flex-column{flex-direction:column!important;}
.justify-content-between{justify-content:space-between!important;}
.pt-4{padding-top:1.5rem!important;}
.filter__category{display:block;font-family:Roboto Condensed,sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:23px;color:#fff;margin-bottom:15px;}
.filter__category:hover{color:#139ed2;text-decoration:none;}
.filter__board{display:block;background-image:url(http://localhost:8080/design.png);background-repeat:no-repeat;background-size:100% 100%;padding:16px;min-height:418px;width:290px;max-width:100%;left:122px;top:182px;border-radius:0;margin-bottom:20px;}
@media screen and (max-width:991px){
  .filter__board{margin:0 auto 30px;}
}
.filter__board-name{font-style:normal;font-weight:400;color:#fff;}
.filter__board-name{font-family:Roboto Condensed,sans-serif;font-size:21px;line-height:25px;text-align:center;}
.filter__summary{display:flex;justify-content:space-between;align-items:center;}
.filter__summary-line{position:relative;margin-top:15px;margin-bottom:15px;display:inline-block;width:100%;}
.filter__summary-line:before{content:" ";width:100%;height:1px;position:absolute;background:#42b983;}
.filter__summary-line:after{content:" ";height:3px;width:25px;position:absolute;background:red;left:50%;margin-left:-7px;top:-1px;}
.btn-primary{background-repeat:no-repeat!important;background-size:100% 100%!important;background-color:transparent!important;border:0!important;outline:0!important;border-radius:0!important;height:43px!important;min-width:158px!important;font-family:Aldrich;font-style:normal;font-weight:400;font-size:15px;line-height:15px;text-align:center;color:#fff;}
.btn-primary:hover{text-decoration:none;}
.btn-primary:focus{outline:0!important;box-shadow:none!important;}
button{text-transform:none;}
button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}
</style>
