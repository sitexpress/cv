
import BTC from '/images/crypto-icons/BTC.jpg';
import Eth from '/images/crypto-icons/ETH.jpg';
import USDT from '/images/crypto-icons/USDT.jpg';
import USDC from '/images/crypto-icons/USDC.jpg';
import DOGE from '/images/crypto-icons/DOGE.jpg';
import XRP from '/images/crypto-icons/XRP.jpg';
import SOL from '/images/crypto-icons/SOL.jpg';
import PEPE from '/images/crypto-icons/PEPE.jpg';
import BNB from '/images/crypto-icons/BNB.jpg';

export const SetAnAvatarByTokenName = (tokenSymbol: any) => {
  if (tokenSymbol === 'btc') {
    return BTC;
  }
  if (tokenSymbol === 'eth') {
    return Eth;
  }
  if (tokenSymbol === 'usdt') {
    return;
  }
  if (tokenSymbol === 'doge') {
    return DOGE;
  }
  if (tokenSymbol === 'usdc') {
    return USDC;
  }
  if (tokenSymbol === 'usdt') {
    return USDT;
  }
  if (tokenSymbol === 'sol') {
    return SOL;
  }
  if (tokenSymbol === 'pepe') {
    return PEPE;
  }
  if (tokenSymbol === 'xrp') {
    return XRP;
  }
  if (tokenSymbol === 'bnb') {
    return BNB;
  }

  return 'loading...';
};
