const abiEthStakingContract = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}],
  "name": "Blacklisted",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {"indexed": false, "internalType": "uint256", "name": "lockupPeriod", "type": "uint256"}],
  "name": "Deposit",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "InterestClaimed",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}],
  "name": "Unblacklisted",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "Withdraw",
  "type": "event"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "blacklist",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
    "internalType": "uint256",
    "name": "depositIndex",
    "type": "uint256"
  }],
  "name": "calculateInterest",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "lockupPeriod", "type": "uint256"}],
  "name": "claimInterestForDeposit",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "lockupPeriod", "type": "uint256"}, {
    "internalType": "address",
    "name": "referral",
    "type": "address"
  }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getBalance",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getDepositInfo",
  "outputs": [{
    "internalType": "uint256[]",
    "name": "depositIndices",
    "type": "uint256[]"
  }, {"internalType": "uint256[]", "name": "unlockTimes", "type": "uint256[]"}, {
    "internalType": "uint256[]",
    "name": "stakedAmounts",
    "type": "uint256[]"
  }, {"internalType": "uint256[]", "name": "lockupPeriods", "type": "uint256[]"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
    "internalType": "uint256",
    "name": "lockupPeriod",
    "type": "uint256"
  }],
  "name": "getDepositStatus",
  "outputs": [{
    "internalType": "uint256[]",
    "name": "depositIndices",
    "type": "uint256[]"
  }, {"internalType": "uint256[]", "name": "remainingTimes", "type": "uint256[]"}, {
    "internalType": "uint256[]",
    "name": "interestsCollected",
    "type": "uint256[]"
  }, {"internalType": "uint256[]", "name": "interestsNotCollected", "type": "uint256[]"}, {
    "internalType": "uint256[]",
    "name": "nextInterestClaims",
    "type": "uint256[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getInterestRate",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getLastClaimTime",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getLockupPeriod",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getNumberOfDeposits",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getReferral",
  "outputs": [{"internalType": "address", "name": "", "type": "address"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "getRemainingAmount",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
    "internalType": "uint256",
    "name": "lockupPeriod",
    "type": "uint256"
  }],
  "name": "getTotalWithdrawnAmount",
  "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "isBlacklisted",
  "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
  "name": "transferFunds",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
  "name": "unblacklist",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{"internalType": "uint256", "name": "depositIndex", "type": "uint256"}],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]


export default abiEthStakingContract

