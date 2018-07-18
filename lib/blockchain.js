
const params = {
  LAST_POW_BLOCK: 10000, // 345600
};

const avgBlockTime = 60; // 1 minutes (60 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 960

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 1000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;
  if (nHeight >= 0 && nHeight <=params.LAST_POW_BLOCK) {
    ret = 0;
  } else if (nHeight > params.LAST_POW_BLOCK) {
    let mNodeCoins = nMasternodeCount * 1000;
    if (mNodeCoins === 0) {
      ret = 0;
    } else if (nHeight > params.LAST_POW_BLOCK) {
      ret = blockValue * .75;
    } else {
      ret = blockValue * .75;
    }
  }
  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;
  if (nHeight === 0) {
    // Genesis block
    nSubsidy = 0;
  } else if (nHeight === 1) {
    // PREMINE: Current available Helium ??
    nSubsidy = 8891432;
  } else if (nHeight > 1 && nHeight <= params.LAST_POW_BLOCK) { // check for last PoW block is not required, it does not harm to leave it *** TODO ***
    // PoW for Launch Phase does produce 1 HLM per block
    nSubsidy = 1 ;
  } else if (nHeight > params.LAST_POW_BLOCK) {
    // PoS - Phase lasts until - undefined)
    nSubsidy = 5;
  } else {
    nSubsidy = 0;
  }
  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 182700
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
