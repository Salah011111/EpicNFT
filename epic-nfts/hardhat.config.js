/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 09:51:21
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 15:37:15
 * @FilePath: \epic-nfts\hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: "https://rpc.ankr.com/eth_rinkeby",
      accounts: ['4394a9ab9c42f2efccd246ed9ecdcd3127fbe6f07f4eb66874d5e575b686b311'],
    },
  },
  etherscan: {
    // url:"",
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "X4CG195DXBAA2GBWFH9RDD89T31RJJG9GJ",
  }

};