# zkSNARK CIRCOM Example

This is zkSNARK circuit and verifier contract example.

## zk circuit

`./zk/circuit.circom`

```circom
template Multiplier() {
    signal private input a;
    signal private input b;
    signal output c;

    c <== a * b;
}

component main = Multiplier();

```

## getting started

1. setup

```bash
$ git clone ...
$ cd zk-snarks-circom-example
$ npm i
```

2. create zk verification

```bash
$ npm run zk
$ npm run verifier
```

3. test contract

```bash
$ npm run test
```
