// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import "./Verifier.sol";

contract HideAndSeek {
    Verifier public verifier;

    address public hider;
    address public seeker;
    Verifier.Proof public currentProof;

    event UpdatedProof(address indexed hider, Verifier.Proof proof);
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

    function updateProof(Verifier.Proof memory _proof) external {
        require(msg.sender == hider, "Only the hider can update the proof");
        currentProof = _proof;
        emit UpdatedProof(hider, _proof);
    }

    function seekerMove(uint256 seekerX, uint256 seekerY) external {
        require(msg.sender == seeker, "Only the seeker can move");
        require(hider != address(0), "There is no hider now");

        uint[] memory input = new uint[](3);
        input[0] = seekerX;
        input[1] = seekerY;
        (bool success) = verifier.verifyProof(currentProof, input);

        if (success) {
            hider = msg.sender;
            emit Found(seeker);
        } else {
            emit SeekerMoved(seeker, seekerX, seekerY);
        }
    }
}