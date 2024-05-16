const main =async () => {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy('Hello Hardhat!');

    await greeter.deployed();

    console.log("Greeter deployed to:", greeter.address);
}

main()
  .them(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });