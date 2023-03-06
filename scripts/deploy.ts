import { ethers } from "hardhat";

async function main() {
  const NotaNFT = await ethers.getContractFactory("NotaNFT");
  // Start deployment, returning a promise that resolves to a contract object
  const notaNFT = await NotaNFT.deploy();
  await notaNFT.deployed();

  console.log("Contract deployed to address:", notaNFT.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
