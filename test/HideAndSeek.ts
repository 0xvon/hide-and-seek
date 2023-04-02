import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { HideAndSeek, Verifier } from "../types";
import { hiderMove } from "./UpdateProof";

describe("HideAndSeek", () => {
  let hideAndSeek: HideAndSeek;
  let verifier: Verifier;
  let hider: SignerWithAddress;
  let seeker: SignerWithAddress;
  let hiderAddress: string;
  let seekerAddress: string;

  beforeEach(async () => {
    [hider, seeker] = await ethers.getSigners();
    hiderAddress = await hider.getAddress();
    seekerAddress = await seeker.getAddress();

    // Deploy the Verifier contract
    const VerifierFactory = await ethers.getContractFactory("Verifier");
    verifier = (await VerifierFactory.deploy()) as Verifier;
    await verifier.deployed();

    // Deploy the HideAndSeek contract
    const HideAndSeekFactory = await ethers.getContractFactory("HideAndSeek");
    hideAndSeek = (await HideAndSeekFactory.deploy(verifier.address)) as HideAndSeek;
    await hideAndSeek.deployed();
  });

  it("should deploy the HideAndSeek contract", async () => {
    expect(hideAndSeek.address).to.not.equal(0);
  });

  it("hider found", async () => {
    // no hider
    expect(await hideAndSeek.hider()).to.equal(ethers.constants.AddressZero);

    // hider join the game
    await hideAndSeek.connect(hider).joinGame();
    expect(await hideAndSeek.hider()).to.equal(hider.address);
    
    // seeker join the game
    await hideAndSeek.connect(seeker).joinGame();
    expect(await hideAndSeek.seeker()).to.equal(seeker.address);

    // hider moves
    await hiderMove(hideAndSeek, hider, 0, 0);
    
    // await hideAndSeek.updateProof();

    // seeker moves
    // await hideAndSeek.connect(seeker).seekerMove(0, 0);
  })

  it("should update proof correctly", async () => {
    const fakeProof = "0x1234";
    await hideAndSeek.connect(hider).joinGame();
    await expect(hideAndSeek.connect(hider).updateProof(fakeProof))
      .to.emit(hideAndSeek, "UpdatedProof")
      .withArgs(hiderAddress, fakeProof);
  
    const updatedProof = await hideAndSeek.currentProof();
    expect(updatedProof).to.equal(fakeProof);
  });
  
  it("should reject updateProof from a non-hider", async () => {
    const fakeProof = "0x1234";
    await hideAndSeek.connect(hider).joinGame();
    await expect(hideAndSeek.connect(seeker).updateProof(fakeProof)).to.be.revertedWith("Only the hider can update the proof");
  });
});