import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { HideAndSeek } from "../types";
import { generateZkp } from "../lib/updateProof";
import { Verifier } from "../types";

export const hiderMove = async (
  contract: HideAndSeek,
  signer: SignerWithAddress,
  hiderX: number,
  hiderY: number
): Promise<Verifier.ProofStruct > => {
  const { proof, } = await generateZkp(hiderX, hiderY);
  const tx = await contract
    .connect(signer)
    .updateProof(proof);
  await tx.wait();
  return proof;
};
