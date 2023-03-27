const CONTRACT_ADDRESS = "0x95c4427E9e9C7E58174D7B7D9cf0BFad77A19314";
const META_DATA_URL =
  "ipfs:/bafyreibtidp2f3flkxlc5sc7hel3zcifwaricffqor55zzm6x2izxzziqq/metadata.json";

// paste function here
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
