import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "hardhat-circom";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    // settings: {
    //   snarkjs: {
    //     files: ["./zk/circuit.circom"],
    //     wasmFile: "./zk/build/circuit.wasm",
    //     zkeyFile: "./zk/ptau/circuit_final.zkey",
    //   }
    // }
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./zk",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "./ptau/pot12_final.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: [{ name: "circuit" }],
  },
};

export default config;
