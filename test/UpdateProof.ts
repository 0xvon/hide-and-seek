import { Circuit, groth, stringifyBigInts, parseBigInts } from "snarkjs";
import { ethers, BigNumberish } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { HideAndSeek } from "../types";
import { generateZkp } from "../scripts/updateProof";

export const hiderMove = async (
  contract: HideAndSeek,
  signer: SignerWithAddress,
  hiderX: number,
  hiderY: number
) => {  
  const { proof, } = await generateZkp(hiderX, hiderY);

  // Send proof to the contract
  // const proofStr = JSON.stringify(stringifyBigInts(proof));
  const proofStr = JSON.stringify(proof);
  console.log(proofStr);
  // const publicSignalsStr = JSON.stringify(stringifyBigInts(publicSignals));

  const tx = await contract
    .connect(signer)
    .updateProof(proofStr);
  await tx.wait();
};
