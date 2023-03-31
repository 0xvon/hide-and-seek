import { expect } from "chai";
import { ethers } from "hardhat";
import { Verifier, Verifier__factory } from "../types";
import { BigNumberish } from "ethers";
import { PromiseOrValue } from "../types/common";

describe("Verifier", () => {
  let verifier: Verifier;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();

    const VerifierFactory = (await ethers.getContractFactory(
      "Verifier",
      deployer
    )) as Verifier__factory;
    verifier = await VerifierFactory.deploy();
    await verifier.deployed();
  });

  ethers.utils;

  it("should return true for a valid proof", async () => {
    const input: [PromiseOrValue<BigNumberish>] = [3];
    const proof: {
      A: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
      B: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ];
      C: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    } = {
      A: [
        ethers.BigNumber.from(
          "20192589587168319784555861478156829758163378240786728145838296342436111009628"
        ),
        ethers.BigNumber.from(
          "9512773189750389670223367550287932298787108772960203904495336084646072590579"
        ),
      ],
      B: [
        [
          ethers.BigNumber.from(
            "20998940774490333832706339805742426187432208516780275294848585932928112813889"
          ),
          ethers.BigNumber.from(
            "16969961721706704048772442907427349586283506211848127917239243413770013099139"
          ),
        ],
        [
          ethers.BigNumber.from(
            "16566978398718563700795440554520817222547728927703041437966051159155880483722"
          ),
          ethers.BigNumber.from(
            "14674228117382447011635776688990862366047781894433230154996473046898273654864"
          ),
        ],
      ],
      C: [
        ethers.BigNumber.from(
          "18392636367984250994066733108085650776718238902566512801411664116622229315903"
        ),
        ethers.BigNumber.from(
          "16638118073942182275976888874931679542413840254040563084681608481735143974017"
        ),
      ],
    };

    const result = await verifier.verifyProof(proof.A, proof.B, proof.C, input);
    expect(result).to.equal(0);
  });
});
