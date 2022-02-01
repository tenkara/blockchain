import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *or* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
    );
    web3 = new Web3(provider);
}

export default web3;
