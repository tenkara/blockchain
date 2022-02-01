import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x4A2474f1F4922d58219F405ECfC7d261025ac7eE'
);

export default instance;
