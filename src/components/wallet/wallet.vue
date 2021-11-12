<template>
    <div class="wallet_container" id="">
      <div v-if="!onBscChain"><ChainError/></div>
      <div v-else style="text-align: center">My Tokens</div>

      <div class="filter__summary-line"></div>

      <div class="filter__summary d-flex flex-column" style="justify-content: space-around">
        <div class="filter__summary d-flex flex-column" style="justify-content: space-around">
          <div class="d-flex justify-content-between">
            InGame: {{clgAmount}} $CRG <a style="font-size: 21px; float:left; text-decoration:none;" title="Transfer to BSC" href="#" class="js-claim-tokens" >
            <span style="color: rgb(230 0 0); margin-left: 6px;">--&gt;</span>
          </a>
          </div>
          <div class="d-flex justify-content-between">
            <a style="font-size: 21px; float:left; text-decoration:none;" title="Transfer to BSC" href="#" class="js-claim-tokens" >
              <span style="color: rgb(230 0 0); margin-left: 6px;">--></span>
            </a> OnBSC:&nbsp;<span id="on-chain-balance"></span>{{lifeToken}} &nbsp;$CRG
          </div>
        </div>
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

import { mapGetters } from 'vuex';

import {
  GET_INGAME_CLG,
  GET_LIFE_TOKEN,
} from '../../store/wallet';

export default {
  name: 'Wallet',
  components: {},
  data: () => ({
    onBscChain: true,
  }),
  computed: {
    ...mapGetters({
      clgAmount:  GET_INGAME_CLG,
      lifeToken:  GET_LIFE_TOKEN,
    })
  },
  methods: {
    // async connectWallet() {
    //   if (typeof window.ethereum !== 'undefined') {
    //     const web = new Web3(Web3.givenProvider);
    //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     const chainId = await web.eth.getChainId();
    //     console.log(chainId)
    //     this.accountConnected = accounts[0]
    //     this.connected = true;
    //   }
    // }
  },
  mounted() {
    // this.connectWallet();
    // console.log('dmd md dm')
  },
  // created: function() {
  //   window.ethereum.on('accountsChanged', (accounts) => {
  //     if (accounts[0] !== this.accountConnected) {
  //       this.connected = false;
  //     }
  //   });
  //   window.ethereum.on("chainChanged", () => {
  //     document.location.reload();
  //   });
  // },
}
</script>
<style>
.wallet_container{
  width: 350px;
  height: 400px;
  margin: 25px auto auto;
  padding-left: 25px;
  padding-top: 30px;
  background: url("http://localhost:8080/design.png") no-repeat;
  background-size: 100% 100%;
}

*,:after,:before{box-sizing:border-box;}
a{color:#007bff;text-decoration:none;background-color:transparent;}
a:hover{color:#0056b3;text-decoration:underline;}

.d-flex{display:flex!important;}
.flex-column{flex-direction:column!important;}
.filter__category{display:block;font-family:Roboto Condensed,sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:23px;color:#fff;margin-bottom:15px;}
.filter__category:hover{color:#139ed2;text-decoration:none;}
/*.filter__summary{display:flex;justify-content:space-between;align-items:center;}*/
.filter__summary-line{position:relative;margin-top:15px;margin-bottom:15px;display:inline-block;width:100%;}
.filter__summary-line:before{content:" ";width:100%;height:1px;position:absolute;background:#42b983;}
.filter__summary-line:after{content:" ";height:3px;width:25px;position:absolute;background:red;left:50%;margin-left:-7px;top:-1px;}

button {
  border: none;
  text-align: center;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;
}

button:hover {opacity: 0.5}

@media (max-width: 560px) {
  .wallet_container{
    height: 250px;
    width: 200px;
  }
  .filter__category{display:block;font-family:Roboto Condensed,sans-serif;font-style:normal;font-weight:400;font-size:11px;line-height:14px;
    color:#fff;margin-bottom:3px;}
  .filter__category:hover{color:#139ed2;text-decoration:none;}
  /*.filter__summary{display:flex;justify-content:space-between;align-items:center;}*/
  .filter__summary-line{position:relative;margin-top:1px;margin-bottom:2px;display:inline-block;width:100%;}
  .filter__summary-line:before{content:" ";width:100%;height:1px;position:absolute;background:#42b983;}
  .filter__summary-line:after{content:" ";height:3px;width:18px;position:absolute;background:red;left:50%;margin-left:-7px;top:-1px;}
}

</style>
