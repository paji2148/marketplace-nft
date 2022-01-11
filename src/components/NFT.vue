<template>
   <div class="mid-container">
                <h1 style="color: black;">Your NFTs</h1>
                <div v-if="!hasnft">
                    <p style="color: black; font-size: 20px;">you do not have any NFT</p>
                </div>
                <div v-else class="nft-container">
                    <div class="nft-item">
                        <div class="nft-background">
                            <img class="nft-avatar" src="https://www.dunefall.com/avatar1.png">
                        </div>
                        <p class="nft-details">Tukeha Helnet</p>
                        <p class="nft-details">Age 9</p>
                    </div>
                    <div class="nft-item">
                        <div class="nft-background">
                            <img class="nft-avatar" src="https://www.dunefall.com/avatar2.png">
                        </div>
                        <p class="nft-details">Mike Water</p>
                        <p class="nft-details">Age 9</p> 
                    </div>
                </div>
            </div>
 
</template>
<script>

export default {
  name: 'NFT',
  components: {},
  data: () => ({
      hasnft: false
  }),
  mounted() {
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style>
.mid-container {
  flex-grow: 1;
  text-align: center;
  margin-top: 30px;
}

.nft-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
  
.nft-item {
    background-clip: content-box;
    margin: 20px;
    width: 180px;
    background-size: 100% 100%;
}
  
.nft-background{
  background-clip: content-box;
  width: 200px;
  height: 200px;
  background: url("https://www.dunefall.com/nftframe.png") no-repeat;opacity: 0.65;
  background-size: 100% 100%;
  position: relative;
}

.nft-avatar {
  max-width: 84%;
  max-height: 84%;
  min-height: 85%;
  position: absolute;
  bottom: 14px;
  right: 9%;
}

.nft-details { 
  text-align: center;
  font-size: 16px;
  color: black;
  padding: 1px;
  margin: 0px;
}

@media (max-width:800px) {
  .route-container { 
    display: block;
  }
  .route-item {
    margin-top: 20px;
  }
  }
</style>