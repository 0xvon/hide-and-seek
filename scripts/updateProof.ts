import fs from "fs";
import path from "path";
import { groth16 } from "snarkjs";

export async function generateZkp(
  hiderX: number,
  hiderY: number
): Promise<{ proof: any; publicKey: any }> {
  const { proof, publicSignals } = await groth16.fullProve(
    { hider_x: hiderX, hider_y: hiderY },
    path.join(__dirname, "../zk/build/circuit.wasm"),
    path.join(__dirname, "../zk/ptau/circuit_final.zkey")
  );

  return { proof, publicKey: publicSignals };
}

// // Example usage
// (async () => {
//   try {
//     const { proof, publicKey } = await generateZkp(2, 4);
//     console.log("Generated proof:", proof);
//     console.log("Public key:", publicKey);
//   } catch (error) {
//     console.error("Error generating ZKP:", error);
//   }
// })();
