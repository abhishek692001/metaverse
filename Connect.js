import abi from "./abi.json" assert{type:"json"};
const connect = new Promise((res,rej)=> {
    if(typeof window.ethereum == "undefined")
    {
        rej("Install Metamask");
} window.ethereum.request({method:"eth_requestAccounts"});
let web3 =new Web3(window.ethereum);
let contract = new web3.eth.Contract(abi,"0xA4f91B6a139093775CDd6eCD61bb3a7bB7d055f9");
web3.eth.getAccounts().then((accounts)=>{
    contract.methods
    .totalSupply()
    .call({from:accounts[0]})
    .then((supply) => {
        contract.methods
        .getBuildings()
        .call({from:accounts[0]})
        .then((data)=>{res({supply:supply,buildings:data
        });
    });
    })
});
});

export default connect