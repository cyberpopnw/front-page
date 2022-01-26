import store from '@/store'
import contracts from '@/tools/contracts'
const Web3 = (window as any).Web3 // <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
const Moralis = (window as any).Moralis //  <script src="https://cdn.jsdelivr.net/npm/moralis@latest/dist/moralis.min.js"></script>

// 
const login = async () => {
    const ethereum = (window as any).ethereum // 
    if (typeof ethereum.isMetaMask === 'undefined') {
        alert('not dapp')
        alert('install MetaMask！')
    }
    return ethereum.request({ method: 'eth_requestAccounts' })
}

// 
const getAccounts = async () => {
    const web3 = new Web3((window as any).ethereum) // 
    const res = await web3.eth.getAccounts()
    console.log(`---------->:getAccounts`, res)
    return res;
}

// 
const getBalance = async (address: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC') => {
    const web3 = new Web3((window as any).ethereum) // 
    const res = await web3.eth.getBalance(address)
    console.log(`---------->:getBalance`, res)
    return res
}

// 
const getContract = async (contractName: string = 'test') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 
    const contract = new web3.eth.Contract(abi, address) // 
    console.log(`---------->:contract`, contract)
}

// 
const approve = (contractName: string = 'test', contractAddress: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC', num: string = '10') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) //  
    const contract = new web3.eth.Contract(abi, address) // 
    let user = store.state.moralis?.user.accounts[0]
    console.log(`---------->:user`, user)
    // console.log(`---------->:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
    // 
    contract.methods
        .approve(contractAddress, `${Number(num) * Math.pow(10, 18)}`)
        .send({ from: user })
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
        })
}

// 
const setAirdrop = async (userAddress: string = '', state: boolean = true) => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) // 
    const contract = new web3.eth.Contract(abi, address) // 
    let user = store.state.moralis?.user.accounts[0]
    const res = await contract.methods.setUsers(userAddress, state).send({ from: user })
    // const res = await contract.methods.test('0x9a4244c1d438810f09f468dfc2ea4cf40ad93c10', '2').call()
    console.log(`---------->:call_test`, res)
}

// 
const pool = async () => {
    const { abi, address } = contracts['money']
    const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
    const contract = new web3.eth.Contract(abi, address) // 创建合约
    return await contract.methods.balanceOf('0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC').call()
}

//
const eligible = async (userAddress: string = '') => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) //  
    const contract = new web3.eth.Contract(abi, address) // 
    return await contract.methods.contains(userAddress).call()
}
// 
const distribute = (contractName: string = 'test', contractAddress: string = '', from: string = '') => {
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 
    const contract = new web3.eth.Contract(abi, address) // 
    // 发送交易，使用事件获取返回结果
    return contract.methods.distribute(contractAddress).send({ from })
}

// 
const call = async () => {
    const { abi, address } = contracts['test']
    const web3 = new Web3((window as any).ethereum) // 
    const contract = new web3.eth.Contract(abi, address) // 
    const res = await contract.methods.get().call()
    // const res = await contract.methods.test('0x9a4244c1d438810f09f468dfc2ea4cf40ad93c10', '2').call()
    console.log(`---------->:call_test`, res)
}

// 
const send = () => {
    const { abi, address } = contracts['airdrop']
    const web3 = new Web3((window as any).ethereum) //  
    const contract = new web3.eth.Contract(abi, address) // 
    let user = store.state.moralis?.user.accounts[0]
    console.log(`---------->:user`, user)
    // console.log(`---------->:Moralis.Units.Token("0.5", "18")`, Moralis.Units.Token('0.5', '18'))
    // 
    contract.methods
        .distribute('0x9d027E7fDFF8d5E194449CfC1B9275584F7624CE', [{ beneficiary: user, amount: `${7 * Math.pow(10, 18)}` }])
        // .addListing(contracts['GameItems']['address'], '1', 45)
        .send({ from: user })
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
        })
}

//
const setApprovalForAll = async (contractName: string = 'test', contractAddress: string = '', from: string = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC') => {
    if (!contractAddress || !from) {
        console.log(`---------->:参数异常{ contractName = 'test', contractAddress = '', from = '' }`, { contractName, contractAddress, from })
    }
    const { abi, address } = (contracts as any)[contractName]
    const web3 = new Web3((window as any).ethereum) // 
    const contract = new web3.eth.Contract(abi, address) //
    const res = await contract.methods.setApprovalForAll(contractAddress, true).send({ from })
    console.log(`---------->:setApprovalForAll`, res)
}

// 
const addListing = () => {
    const { abi, address } = contracts['nftTreader']
    const web3 = new Web3((window as any).ethereum) //  
    const contract = new web3.eth.Contract(abi, address) // 
    // 发送交易，使用事件获取返回结果
    contract.methods
        .addListing(222, contracts['GameItems']['address'], '2')
        // .addListing(contracts['GameItems']['address'], '1', 45)
        .send({ from: '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' })
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
        })
}

// 
const purchase = () => {
    const { abi, address } = contracts['nftTreader']
    const web3 = new Web3((window as any).ethereum) //  
    const contract = new web3.eth.Contract(abi, address) // 
    // 
    contract.methods
        .purchase(contracts['GameItems']['address'], '2', 1)
        // .addListing(contracts['GameItems']['address'], '1', 45)
        .send({ from: '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' })
        .on('transactionHash', function (hash: any) {
            console.log(`---------->:hash`, hash)
        })
        .on('receipt', function (receipt: any) {
            console.log(`---------->:receipt`, receipt)
        })
        .on('confirmation', function (confirmationNumber: any, receipt: any) {
            console.log(`---------->:confirmationNumber, receipt`, confirmationNumber, receipt)
        })
        .on('error', (err: any) => {
            console.log(`---------->:err`, err)
        })
}

export default {
    login,
    getAccounts,
    getBalance,
    getContract,
    approve,
    setAirdrop,
    pool,
    eligible,
    distribute,
    setApprovalForAll,
    call,
    send,
    addListing,
    purchase,
}
