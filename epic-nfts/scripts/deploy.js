/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 10:17:20
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 15:13:24
 * @FilePath: \epic-nfts\scripts\deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
    const main = async () => {
        const nftContractFactory = await hre.ethers.getContractFactory('MyNFT2');
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();
        console.log("Contract deployed to:", nftContract.address);

        // Call the function.
        let txn = await nftContract.makeAnEpicNFT()
        // Wait for it to be mined.
        await txn.wait()
        console.log("Minted NFT #1")

        txn = await nftContract.makeAnEpicNFT()
        // Wait for it to be mined.
        await txn.wait()
        console.log("Minted NFT #2")
    };

    const runMain = async () => {
        try {
            await main();
            process.exit(0);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    };

    runMain()