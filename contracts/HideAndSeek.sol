// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import "./Verifier.sol"; // zk-SNARKs Verifier Contract

contract HideAndSeek {
    Verifier public verifier;

    address public hider;
    address public seeker;
    bytes public currentProof;

    event UpdatedProof(address indexed hider, bytes proof);
    event SeekerMoved(address indexed seeker, uint256 seekerX, uint256 seekerY);
    event Found(address indexed seeker);

    constructor(address _verifier) {
        verifier = Verifier(_verifier);
    }

    function joinGame() external {
        if (hider == address(0)) {
            hider = msg.sender;
        } else {
            require(seeker == address(0), "Seeker has already joined");
            seeker = msg.sender;
        }
        
    }

    function updateProof(bytes calldata _proof) external {
        require(msg.sender == hider, "Only the hider can update the proof");
        currentProof = _proof;
        emit UpdatedProof(hider, _proof);
    }

    function seekerMove(uint256 seekerX, uint256 seekerY) external {
        require(msg.sender == seeker, "Only the seeker can move");
        require(hider != address(0), "There is no hider now");

        (bool success, ) = address(verifier).call(abi.encodeWithSignature("verifyProof(bytes,uint256,uint256)", currentProof, seekerX, seekerY));
        require(success, "Failed to verify the proof");

        if (success) {
            hider = msg.sender;
            emit Found(seeker);
        } else {
            emit SeekerMoved(seeker, seekerX, seekerY);
        }
    }
}