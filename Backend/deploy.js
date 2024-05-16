const main =async () => {
    const Transaction = await hre.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log("Transactions deployed to:", transactions.address);
}

const runmain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runmain();