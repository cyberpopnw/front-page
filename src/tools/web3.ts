import store from '@/store'
import contracts from '@/tools/contracts'
import { resolve } from 'path/posix'
import { ref, computed } from 'vue'
const Web3 = (window as any).Web3 // Reference the global Web3 in index HTML file CDN import<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>



// login metamask
const login = async () => {
    const ethereum = (window as any).ethereum // Get metamask instance
    // if (!ethereum) {
    //     return 'No install';
    // }
    return ethereum.request({ method: 'eth_requestAccounts' })
}

const testactouns = () => {
    const web3 = new Web3((window as any).ethereum) // create a new web3 object
    // if (!ethereum) {
    //     return 'No install';
    // }
    console.log(web3);
    
    console.log(web3.eth.accounts, 'ethereum.eth.defaultAccount');
    
    // return ethereum.request({ method: 'eth_requestAccounts' })
}

// isinstall metamask
const hasMetaMask = async () => {
    const ethereum = (window as any).ethereum // Get metamask instance
    if (!ethereum) {
        return 'No install';
    }
}



// Account list
const getAccounts = async () => {
    const web3 = new Web3((window as any).ethereum) // create a new web3 object
    const res = await web3.eth.getAccounts()
    console.log(`---------->:getAccounts`, res)
    return res;
}



// Check the balance
const getBalance = async (id: any) => {
    const { abi, address }  = (contracts as any)['nft']
    const web3 = new Web3((window as any).ethereum) // create a new web3 object
    const contract = new web3.eth.Contract(abi, address) // Create contract
    let res = await contract.methods.batchBalanceOf(id).call();
    return res;
}


// Authorize a contract to use my currency
// const approve = (contractName: string = 'test', contractAddress: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC', num: string = '10') => {
//     const { abi, address } = (contracts as any)[contractName]
//     const web3 = new Web3((window as any).ethereum) 
//     const contract = new web3.eth.Contract(abi, address) // Create contract
//     let user = store.state.moralis?.user.accounts[0]
//     console.log(`---------->:user`, user)
//     // console.log(`---------->日志输出:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
//     // Send the transaction and use the event to get the returned result
//     contract.methods
//         .approve(contractAddress, `${Number(num) * Math.pow(10, 18)}`)
//         .send({ from: user })
//         .on('transactionHash', function (hash: any) {
//             console.log(`---------->:hash`, hash)
//         })
//         .on('receipt', function (receipt: any) {
//             console.log(`---------->:receipt`, receipt)
//         })
//         .on('confirmation', function (confirmationNumber: any, receipt: any) {
//             console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
//         })
//         .on('error', (err: any) => {
//             console.log(`---------->:err`, err)
//         })
// }

// Asset transfer
const accounts = computed(() => store?.state.wallet?.idTemp);
const safeTransferFrom = async (abi:any, address:any, TransferFrom:any, id:any, number?:any) => {
    console.log(abi, address, TransferFrom, id, number);
    const web3 = new Web3((window as any ).ethereum)
    const contract = new web3.eth.Contract(abi, address)
    return new Promise((resolve, reject) => {
        if(!number){  // 721 No need to transfer quantity
            console.log('这里');
            
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
            })
        }else{ // 1155 need to transfer quantity
            contract.methods.safeTransferFrom(accounts.value, TransferFrom, id, number, '0x').send({ from: accounts.value }).then( (receipt:any) => {
                resolve(receipt)
            }).catch((err:any) => {
                resolve(0)
            })
        }
    })
}

// Asset query
const batchBalanceOf = (abi:any, address:any) => {
    return new Promise(async (resolve, reject) => {
        // console.log(abi, address, accounts.value);
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.batchBalanceOf(accounts.value).call();
        resolve(res);
    })
}

// Native 1155 query assets
const balanceOfBatch = (abi: any, address: any, ids: any, isMarketV2?: any) => {
    let tempAccounts: any = []
    for (const iterator of ids) {
        tempAccounts.push(isMarketV2 ? isMarketV2 : accounts.value)
    }
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.balanceOfBatch(tempAccounts, ids).call();
        resolve(res);
    })
}

// Market contract query
const balanceOf = (abi:any, address:any, id:any) => {
    console.log(abi, address, id);
    
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        let res = await contract.methods.balanceOf(accounts.value, id).call();
        resolve(res);
    })
}

// Lotbox gift box dedicated developers face the user interface, and use this function to obtain random rewards from the trophy box
const unpack = (abi: any, address: any, id: any, number: any) => {
    console.log(abi);
    console.log(address);
    console.log(id);
    console.log(number);
    
    return new Promise((resolve, reject) => {
        let intNumber = parseInt(number);
        console.log(intNumber, 'intNumber');
        const web3 = new Web3((window as any ).ethereum)
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.unpack(id, intNumber).send({ from: accounts.value})
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            resolve(receipt)
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
            resolve(0)
        })
    })
}


// Query 721 contract
const tokensOfOwner = (abi: any, address: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.tokensOfOwner(accounts.value).call();
        resolve(result);
    })
}


const addChain = (chainId: Number) => {
    const ethereum = (window as any).ethereum // Get metamask instance
    const web3 = new Web3((window as any).ethereum)
    // console.log(web3.utils.numberToHex(chainId), 'web3.utils.numberToHex(chainId)');
    let info: any;
    if(chainId == 43113){
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(43113),
                    chainName: 'Fuji',
                    nativeCurrency: {
                        name: 'AVAX',
                        symbol: 'AVAX', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                    blockExplorerUrls: ['https://testnet.snowtrace.io/']
                }
            ]
        }
    }else if(chainId == 80001){
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(80001),
                    chainName: 'Mumbai',
                    nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
                }
            ]
        }
    }else if(chainId == 56){
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(56),
                    chainName: 'BSC',
                    nativeCurrency: {
                        name: 'BSC',
                        symbol: 'BSC', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed1.defibit.io'],
                    blockExplorerUrls: ['https://bscscan.com/']
                }
            ]
        }
    }else{
        info = {
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: web3.utils.numberToHex(85),
                    chainName: 'GateChain Testnet',
                    nativeCurrency: {
                        name: 'GT',
                        symbol: 'GT', // 2-6 characters long
                        decimals: 18
                    },
                    rpcUrls: ['https://meteora-evm.gatenode.cc'],
                    blockExplorerUrls: ['https://gatescan.org/testnet/']
                }
            ]
        }
    }
    return new Promise((resolve, reject) => {
        ethereum.request({
            ...info
        }).then((res:any)=>{
            web3.eth.net.getId().then((realChainId: any) => {
                // console.log('0',realChainId, info.params[0].chainId);
                if( realChainId == info.params[0].chainId ){ // Judge whether the handover is successful or failed by the handover result
                    resolve(1)
                    return
                }
                resolve(0)
            })  

        })
        
    })

}


// Purchase NFT
const buyLootBox = (abi: any, address: any, boxId: any, price: any, number?: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);

        console.log(abi, address);

        console.log(boxId, price);
        
        contract.methods.buyLootBox(boxId, price, number || 1).send({ from: accounts.value }).then((receipt:any) => {
            resolve(receipt)
        }).catch((err:any) => {
            console.log(err);
            resolve(0)
        })
    })
}

const allowance = (abi: any, address: any, contract_address: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        let res = await contract.methods.allowance(accounts.value, contract_address).call();
        resolve(res);
    })
}

// Authorize a contract to use my currency
const approve = (abi: any, address: any, contract_address: any, number: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        contract.methods.approve(contract_address, number).send({ from: accounts.value }).then((receipt:any) => {
            resolve(receipt)
        }).catch((err:any) => {
            console.log(err);
            resolve(0)
        })
    })
}

const totolsuppl = async (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address);
        let res = await contract.methods.totalSupply().call()
        resolve(res)
    })

}

// Query whether authorized
const getApproved = (abi: any, address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        const result = contract.methods.getApproved(tokenId).call()
        resolve(result);
    })
}

const isApprovedForAll = (abi: any, address: string, operator: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        const result = contract.methods.isApprovedForAll(accounts.value, operator).call()
        resolve(result);
    })
}

// Special for game pool authorization
const approvePool = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.approve('0xB2172269b03BD2b5c89dcB2A7187632B435E8484', tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}

// 1155 authorized
const setApprovalForAll = (abi: any[], address: string) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.setApprovalForAll('0xB2172269b03BD2b5c89dcB2A7187632B435E8484', true).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// Load role
const loadingNft = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.loadingRole(tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}

// Load role 1155
const loadingErc1155 = (abi: any[], address: string, tokenId: any, number: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.loadingWeapons(tokenId, number).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


//withdraw cyt
const withdraw = (abi: any[], address: string, amount: number) =>  {  // two staking CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.withdraw(amount).send({ from: accounts.value }).then(function (receipt: any) {
            console.log(receipt);
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error',err);
        })
    })
}

// Withdrawal and withdrawal
const withdrawRole = (abi: any[], address: string, tokenId: any) => {
    return new Promise((resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.withdrawRole(accounts.value, tokenId).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error');
        })
    })
}


// Query pledge contract and pledge amount
const getBalanceOf = (abi: any[], address: string) => { // you have stake amount
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.getBalanceOf(accounts.value).call();
        resolve(result)
    })
}


// Total pledge pools
const getTotalSupply = (abi: any[], address: string) => { // two staking CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.getTotalSupply().call();
        resolve(result)
    })
}


const ERC20balanceOf = (abi: any[], address: string) => { 
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.balanceOf(accounts.value).call();
        // resolve(result/1000000)
        resolve(result)
    })
} 

// Pledge cyt quantity
const stake = (abi: any[], address: string, number: number) => { // two staking CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods
            .stake(number)
            .send({ from: accounts.value })
            .on('transactionHash', function (hash: any) {
                console.log(`---------->:hash`, hash)
            })
            .on('receipt', function (receipt: any) {
                console.log(`---------->:receipt`, receipt)
                setTimeout(() => {
                    resolve(receipt)
                }, 1000);
            })
            .on('confirmation', function (confirmationNumber: any, receipt: any) {
                console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
            })
            .on('error', (err: any) => {
                console.log(`---------->:err`, err)
                resolve(0)
            })
        // contract.methods.stake(number).send({ from: accounts.value }).then(function (receipt: any) {
        //     resolve(receipt)
        // }).catch((err: any) => {
        //     resolve(0)
        //     console.log('error');
        // })
    })
}


// Remaining days of pledge cyt
const DaysRemaining = (abi: any[], address: string, tokenId: number) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let _price = await contract.methods._price([1]).call();
        let earned = await contract.methods.earned(accounts.value).call();
        let rewardAllToken = await contract.methods.rewardPerToken().call(); // all person get coin from notifyRewardAmount
        let getBalanceOf = await contract.methods.getBalanceOf(accounts.value).call();
        let result = ((_price - earned) * 1000000000000000000)  / (rewardAllToken * getBalanceOf); //_balances

        const rewardRate = await contract.methods.rewardRate().call()
        const totalSupply = await contract.methods.getTotalSupply().call();
        let rewardPerToken = rewardRate*getBalanceOf / totalSupply  // one person stake one coin get coin /s 
        if( !rewardPerToken ) rewardPerToken = 0
        console.log(rewardRate ,getBalanceOf,totalSupply , rewardPerToken);
        resolve({result,earned,rewardPerToken,rewardAllToken  });
    })
}

// Remaining days of pledge coin
const DaysRemainingCoin = (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        const earned = await contract.methods.earned(accounts.value).call();
        // const rewardAllToken = await contract.methods.rewardPerToken().call(); // all person get coin from notifyRewardAmount

        // const rewardRate = await contract.methods.rewardRate().call()
        const rewardsDuration = await contract.methods.rewardsDuration().call()
        const getBalanceOf = await contract.methods.getBalanceOf(accounts.value).call();
        const totalSupply = await contract.methods.getTotalSupply().call();
        const rewardRate = totalSupply / rewardsDuration
        const rewardPerToken = rewardRate*Number(getBalanceOf) / Number(totalSupply) // one person stake one coin get coin /s 
        console.log(rewardRate,getBalanceOf,totalSupply , rewardPerToken);
        
        resolve({earned,rewardPerToken });
    })
}


// DaysRemaining speed
const DaysRemainingSpeed = (abi: any[], address: string, tokenId: number) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let _price = await contract.methods._price([1]).call();
        let rewardPerToken = await contract.methods.rewardPerToken().call(); // two staking CYTStakingRewards
        let getBalanceOf = await contract.methods.getBalanceOf(accounts.value).call(); // two staking CYTStakingRewards
        let result = (rewardPerToken * getBalanceOf); //_balances
        console.log(result, 'result');
        resolve(result);
    })
}


const DaysNeededPrediction = (abi: any[], address: string) => { // staking
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.DaysNeededPrediction(1, accounts.value).call()
        resolve(result);
    })
}


const DaysNeededPredictionx = (abi: any[], address: string) => { // staking
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let result = await contract.methods.DaysNeededPredictionx(1, accounts.value).call()
        resolve(result);
    })
}


// staking progress
const progress = (abi: any[], address: string) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let earned = await contract.methods.earned(accounts.value).call() // two staking CYTStakingRewards
        let _price = await contract.methods._price(1).call() // staking
        let finishGetNFT = Math.floor(earned/_price) // id:2 price*3
        let progressVal = (earned/_price) * 100 > 100 ? 100 : (earned/_price) * 100
        resolve({finishGetNFT, progressVal})
    })
}


// Call once before pledge
const notifyrewardamount = (abi: any[], address: string) => { // two staking CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.notifyRewardAmount(6000000).send({ from: accounts.value }).then(function (receipt: any) {
            console.log(receipt, 'web3.noti');
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error',err);
        })
    })
}


// After the pledge is completed, get cyt reward
const getReward = (abi: any[], address: string) => { // CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.getReward().send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error',err);
        })
    })
}

// After the pledge is completed, get cyt reward number
const rewards = (abi: any[], address: string) => { // CYTStakingRewards
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        // let rewardsNumber = contract.methods.rewards(accounts.value).call()
        let rewardsNumber = contract.methods.rewardRate().call()
        // let rewardsNumber = contract.methods.rewardsDuration().call()
        // let rewardsNumber = contract.methods.lastTimeRewardApplicable().call()
        
        resolve(rewardsNumber)
    })
}


// After the pledge is completed, receive NFT rewards 1155
const getNFT = (abi: any[], address: string, amount: number) => { // staking
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        contract.methods.getNFT(amount, 1).send({ from: accounts.value }).then(function (receipt: any) {
            resolve(receipt)
        }).catch((err: any) => {
            resolve(0)
            console.log('error',err);
        })
    })
}

const leftNumber = (abi: any[], address: string, ids: any) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3((Web3 as any).givenProvider);
        const contract = new web3.eth.Contract(abi, address)
        let box = await contract.methods.balanceOfBatch('0x7291030263771b40731D6Bc6b352358D23F5737F', ids).call();
        resolve(box)
    })
}

export default {
    safeTransferFrom,
    batchBalanceOf,
    login,
    hasMetaMask,
    getAccounts,
    getBalance,
    approve,
    balanceOfBatch,
    unpack,
    tokensOfOwner,
    addChain,
    balanceOf,
    buyLootBox,
    allowance,
    totolsuppl,
    getApproved,
    isApprovedForAll,
    approvePool,
    setApprovalForAll,
    loadingNft,
    loadingErc1155,
    withdrawRole,
    testactouns,
    getBalanceOf,
    getTotalSupply,
    ERC20balanceOf,
    stake,
    DaysRemaining,
    DaysRemainingCoin,
    DaysRemainingSpeed,
    notifyrewardamount,
    getReward,
    getNFT,
    progress,
    withdraw,
    DaysNeededPrediction,
    DaysNeededPredictionx,
    leftNumber,
    rewards,
    contracts,
}
