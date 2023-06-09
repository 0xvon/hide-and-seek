/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HideAndSeek, HideAndSeekInterface } from "../HideAndSeek";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seeker",
        type: "address",
      },
    ],
    name: "Found",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seeker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seekerX",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seekerY",
        type: "uint256",
      },
    ],
    name: "SeekerMoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hider",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "X",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "Y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "pi_b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_c",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct Verifier.Proof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "UpdatedProof",
    type: "event",
  },
  {
    inputs: [],
    name: "currentProof",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "X",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Y",
            type: "uint256",
          },
        ],
        internalType: "struct Pairing.G1Point",
        name: "pi_a",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256[2]",
            name: "X",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[2]",
            name: "Y",
            type: "uint256[2]",
          },
        ],
        internalType: "struct Pairing.G2Point",
        name: "pi_b",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "X",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Y",
            type: "uint256",
          },
        ],
        internalType: "struct Pairing.G1Point",
        name: "pi_c",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seeker",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "seekerX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seekerY",
        type: "uint256",
      },
    ],
    name: "seekerMove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_a",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "X",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "Y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "pi_b",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "X",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "Y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "pi_c",
            type: "tuple",
          },
        ],
        internalType: "struct Verifier.Proof",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "updateProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract Verifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001593380380620015938339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b611469806200012a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a99b91861161005b578063a99b9186146100da578063b0653658146100fa578063d4f77b1c14610116578063f3ab7ea9146101205761007d565b80632b7ac3f314610082578063441d4d79146100a057806382964a56146100be575b600080fd5b61008a61013e565b60405161009791906109e2565b60405180910390f35b6100a8610162565b6040516100b59190610a1e565b60405180910390f35b6100d860048036038101906100d39190610a7e565b610188565b005b6100e2610505565b6040516100f193929190610bc7565b60405180910390f35b610114600480360381019061010f9190610e50565b6105ed565b005b61011e61076f565b005b6101286108e0565b6040516101359190610a1e565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020f90610edb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036102a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090610f47565b60405180910390fd5b6000600367ffffffffffffffff8111156102c6576102c5610c15565b5b6040519080825280602002602001820160405280156102f45781602001602082028036833780820191505090505b509050828160008151811061030c5761030b610f67565b5b602002602001018181525050818160018151811061032d5761032c610f67565b5b60200260200101818152505060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166388b225b66003846040518363ffffffff1660e01b81526004016103989291906111a9565b602060405180830381865afa1580156103b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d99190611213565b9050801561048c5733600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ffaf499deb6973730595cb45514163513941791a444cd9abb2ad7c4f7b556a08e60405160405180910390a26104ff565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f7077795bc8245a776155ba48b71c8f2e035accf72a092dfc94714ecb3f79e4ea85856040516104f692919061124f565b60405180910390a25b50505050565b60038060000160405180604001604052908160008201548152602001600182015481525050908060020160405180604001604052908160008201600280602002604051908101604052809291908260028015610576576020028201915b815481526020019060010190808311610562575b50505050508152602001600282016002806020026040519081016040528092919082600280156105bb576020028201915b8154815260200190600101908083116105a7575b505050505081525050908060060160405180604001604052908160008201548152602001600182015481525050905083565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461067d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610674906112ea565b60405180910390fd5b806003600082015181600001600082015181600001556020820151816001015550506020820151816002016000820151816000019060026106bf929190610906565b506020820151816002019060026106d7929190610906565b50505060408201518160060160008201518160000155602082015181600101555050905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fa0e6d910ab5fcbfb6813ce1bfe36ab45c31592f7e4529818bf6fc0180db7130a8260405161076491906113ab565b60405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361080b5733600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108de565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461089c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089390611413565b60405180910390fd5b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8260028101928215610935579160200282015b82811115610934578251825591602001919060010190610919565b5b5090506109429190610946565b5090565b5b8082111561095f576000816000905550600101610947565b5090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109a86109a361099e84610963565b610983565b610963565b9050919050565b60006109ba8261098d565b9050919050565b60006109cc826109af565b9050919050565b6109dc816109c1565b82525050565b60006020820190506109f760008301846109d3565b92915050565b6000610a0882610963565b9050919050565b610a18816109fd565b82525050565b6000602082019050610a336000830184610a0f565b92915050565b6000604051905090565b600080fd5b6000819050919050565b610a5b81610a48565b8114610a6657600080fd5b50565b600081359050610a7881610a52565b92915050565b60008060408385031215610a9557610a94610a43565b5b6000610aa385828601610a69565b9250506020610ab485828601610a69565b9150509250929050565b610ac781610a48565b82525050565b604082016000820151610ae36000850182610abe565b506020820151610af66020850182610abe565b50505050565b600060029050919050565b600081905092915050565b6000819050919050565b6000610b288383610abe565b60208301905092915050565b6000602082019050919050565b610b4a81610afc565b610b548184610b07565b9250610b5f82610b12565b8060005b83811015610b90578151610b778782610b1c565b9650610b8283610b34565b925050600181019050610b63565b505050505050565b608082016000820151610bae6000850182610b41565b506020820151610bc16040850182610b41565b50505050565b600061010082019050610bdd6000830186610acd565b610bea6040830185610b98565b610bf760c0830184610acd565b949350505050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c4d82610c04565b810181811067ffffffffffffffff82111715610c6c57610c6b610c15565b5b80604052505050565b6000610c7f610a39565b9050610c8b8282610c44565b919050565b600060408284031215610ca657610ca5610bff565b5b610cb06040610c75565b90506000610cc084828501610a69565b6000830152506020610cd484828501610a69565b60208301525092915050565b600080fd5b600067ffffffffffffffff821115610d0057610cff610c15565b5b602082029050919050565b600080fd5b6000610d23610d1e84610ce5565b610c75565b90508060208402830185811115610d3d57610d3c610d0b565b5b835b81811015610d665780610d528882610a69565b845260208401935050602081019050610d3f565b5050509392505050565b600082601f830112610d8557610d84610ce0565b5b6002610d92848285610d10565b91505092915050565b600060808284031215610db157610db0610bff565b5b610dbb6040610c75565b90506000610dcb84828501610d70565b6000830152506040610ddf84828501610d70565b60208301525092915050565b60006101008284031215610e0257610e01610bff565b5b610e0c6060610c75565b90506000610e1c84828501610c90565b6000830152506040610e3084828501610d9b565b60208301525060c0610e4484828501610c90565b60408301525092915050565b60006101008284031215610e6757610e66610a43565b5b6000610e7584828501610deb565b91505092915050565b600082825260208201905092915050565b7f4f6e6c7920746865207365656b65722063616e206d6f76650000000000000000600082015250565b6000610ec5601883610e7e565b9150610ed082610e8f565b602082019050919050565b60006020820190508181036000830152610ef481610eb8565b9050919050565b7f5468657265206973206e6f206869646572206e6f770000000000000000000000600082015250565b6000610f31601583610e7e565b9150610f3c82610efb565b602082019050919050565b60006020820190508181036000830152610f6081610f24565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008160001c9050919050565b6000819050919050565b6000610fc0610fbb83610f96565b610fa3565b9050919050565b604082016000808301549050610fdc81610fad565b610fe96000860182610abe565b5060018301549050610ffa81610fad565b6110076020860182610abe565b5050505050565b600060029050919050565b6000819050919050565b600061102f8254610fad565b9050919050565b6000600182019050919050565b61104c8161100e565b6110568184610b07565b925061106182611019565b8060005b838110156110995761107682611023565b6110808782610b1c565b965061108b83611036565b925050600181019050611065565b505050505050565b6080820160008083016110b76000860182611043565b50600283016110c96040860182611043565b5050505050565b610100820160008083016110e76000860182610fc7565b50600283016110f960408601826110a1565b506006830161110b60c0860182610fc7565b5050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000602082019050919050565b600061115682611112565b611160818561111d565b935061116b8361112e565b8060005b8381101561119c5781516111838882610b1c565b975061118e8361113e565b92505060018101905061116f565b5085935050505092915050565b6000610120820190506111bf60008301856110d0565b8181036101008301526111d2818461114b565b90509392505050565b60008115159050919050565b6111f0816111db565b81146111fb57600080fd5b50565b60008151905061120d816111e7565b92915050565b60006020828403121561122957611228610a43565b5b6000611237848285016111fe565b91505092915050565b61124981610a48565b82525050565b60006040820190506112646000830185611240565b6112716020830184611240565b9392505050565b7f4f6e6c79207468652068696465722063616e207570646174652074686520707260008201527f6f6f660000000000000000000000000000000000000000000000000000000000602082015250565b60006112d4602383610e7e565b91506112df82611278565b604082019050919050565b60006020820190508181036000830152611303816112c7565b9050919050565b6040820160008201516113206000850182610abe565b5060208201516113336020850182610abe565b50505050565b60808201600082015161134f6000850182610b41565b5060208201516113626040850182610b41565b50505050565b6101008201600082015161137f600085018261130a565b5060208201516113926040850182611339565b5060408201516113a560c085018261130a565b50505050565b6000610100820190506113c16000830184611368565b92915050565b7f5365656b65722068617320616c7265616479206a6f696e656400000000000000600082015250565b60006113fd601983610e7e565b9150611408826113c7565b602082019050919050565b6000602082019050818103600083015261142c816113f0565b905091905056fea26469706673582212203ad330888d43861b2c3d24a5d21fc42c20d366e90b68a6e41ca8c3386e3f46e864736f6c63430008120033";

type HideAndSeekConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HideAndSeekConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HideAndSeek__factory extends ContractFactory {
  constructor(...args: HideAndSeekConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HideAndSeek> {
    return super.deploy(_verifier, overrides || {}) as Promise<HideAndSeek>;
  }
  override getDeployTransaction(
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_verifier, overrides || {});
  }
  override attach(address: string): HideAndSeek {
    return super.attach(address) as HideAndSeek;
  }
  override connect(signer: Signer): HideAndSeek__factory {
    return super.connect(signer) as HideAndSeek__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HideAndSeekInterface {
    return new utils.Interface(_abi) as HideAndSeekInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HideAndSeek {
    return new Contract(address, _abi, signerOrProvider) as HideAndSeek;
  }
}
