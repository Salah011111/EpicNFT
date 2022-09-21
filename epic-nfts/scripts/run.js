/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 09:59:10
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 10:56:57
 * @FilePath: \epic-nfts\scripts\run.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
    const main = async () => {
        const nftContractFactory = await hre.ethers.getContractFactory('MyNFT');
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();
        console.log("Contract deployed to:", nftContract.address);

        // Call the function.
        let txn = await nftContract.makeAnEpicNFT()
        // Wait for it to be mined.
        await txn.wait()

        // Mint another NFT for fun.
        txn = await nftContract.makeAnEpicNFT()
        // Wait for it to be mined.
        await txn.wait()

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