import { IPlugin, IQuickStart, OrderItemResp, OrderStatus, QuickStartTypeEnum } from '@/interface/services/client';
import { ServiceTypeEnum } from '@/modules/Account/Order/FormOrder.constants';
import configs from '@/configs';
import { DALayerEnum } from '@/modules/Buy/Buy.constanst';

const FinalizationPeriod = 604800 + ''; // 7 days

const getPlugins = ({ isProduction }: { isProduction: boolean }): Array<IPlugin> => {
  const plugins = [
    {
      name: 'Trustless Bridge',
      description: '',
      image: 'https://cdn.trustless.domains/icons/ic-bridge.svg',
      link: (isProduction ? 'https://trustlessbridge.io/' : 'https://dev.trustlessbridge.io/') + `?from=tc&to=nos`,
    },
  ];

  return [...plugins];
};

const COMPUTERS: Array<OrderItemResp> = [
  {
    // trustless computer mainnet
    orderId: '1',
    index: 0,
    isConstant: true,
    createAt: '1679624226',
    tcAddress: '',
    serviceType: ServiceTypeEnum.DEFAULT,
    serviceFee: '0',
    setupCost: '0',
    instanceId: '1',
    reward: '0',
    isWithdrawableReward: false,
    domain: 'TC',
    chainId: configs.CHAIN_ID.TRUSTLESS_COMPUTER + '',
    chainName: 'Trustless Computer',
    description: '',
    finalizationPeriod: '',
    blockTime: '600',
    isMainnet: true,
    evmVersion: '',
    minGasPrice: '',
    dataAvaibilityChain: DALayerEnum.DALayer_BTC,
    monitorLink: '',
    needToTopupBalance: '0',
    nextBillingAt: '',
    status: OrderStatus.Started,
    l2BridgeContract: '',
    l2PortalContract: '',
    explorer: 'https://explorer.trustless.computer/',
    rpc: 'https://tc-node.trustless.computer/',
    rollupCost: '0',
    userName: 'NBC team',
    plugins: getPlugins({ isProduction: true }),
  },
  {
    // NOS mainnet
    createAt: '1687832226',
    index: 1,
    isConstant: true,
    orderId: '2',
    tcAddress: '',
    serviceType: ServiceTypeEnum.DEFAULT,
    serviceFee: '0',
    setupCost: '0',
    instanceId: '1',
    reward: '0',
    isWithdrawableReward: false,
    domain: `NOS`,
    chainId: configs.CHAIN_ID.NOS + '',
    chainName: `Alpha Chain`,
    description: '',
    finalizationPeriod: FinalizationPeriod,
    blockTime: '2',
    isMainnet: true,
    evmVersion: '',
    minGasPrice: '',
    dataAvaibilityChain: DALayerEnum.DALayer_PLG,
    monitorLink: '',
    needToTopupBalance: '0',
    nextBillingAt: '',
    status: OrderStatus.Started,
    l2BridgeContract: '',
    l2PortalContract: '',
    explorer: 'https://explorer.l2.trustless.computer/',
    rpc: 'https://node.l2.trustless.computer/',
    rollupCost: '0',
    userName: 'NBC team',
    plugins: getPlugins({ isProduction: true }),
  },
  {
    // Trustless layer 1 (Testnet)
    createAt: '1677896226',
    orderId: '3',
    index: 0,
    isConstant: true,
    tcAddress: '',
    serviceType: ServiceTypeEnum.DEFAULT,
    serviceFee: '0',
    setupCost: '0',
    instanceId: '3',
    reward: '0',
    isWithdrawableReward: false,
    domain: 'TC (Testnet)',
    chainId: configs.CHAIN_ID.TRUSTLESS_COMPUTER_TEST + '',
    chainName: 'BVM (Testnet)',
    description: '',
    finalizationPeriod: '',
    blockTime: '600',
    isMainnet: false,
    evmVersion: '',
    minGasPrice: '',
    dataAvaibilityChain: DALayerEnum.DALayer_BTC,
    monitorLink: '',
    needToTopupBalance: '0',
    nextBillingAt: '',
    status: OrderStatus.Started,
    l2BridgeContract: '',
    l2PortalContract: '',
    explorer: 'https://explorer.regtest.trustless.computer/',
    rpc: 'https://tc-node-manual.regtest.trustless.computer',
    rollupCost: '0',
    userName: 'NBC team',
    plugins: getPlugins({ isProduction: false }),
  },
  {
    createAt: '1685240226',
    index: 1,
    isConstant: true,
    orderId: '4',
    tcAddress: '',
    serviceType: ServiceTypeEnum.DEFAULT,
    serviceFee: '0',
    setupCost: '0',
    instanceId: '3',
    reward: '0',
    isWithdrawableReward: false,
    domain: 'NOS (Testnet)',
    chainId: configs.CHAIN_ID.NOS_TEST + '',
    chainName: 'NOS (Testnet)',
    description: '',
    finalizationPeriod: FinalizationPeriod,
    blockTime: '2',
    isMainnet: false,
    evmVersion: '',
    minGasPrice: '',
    dataAvaibilityChain: DALayerEnum.DALayer_PLG,
    monitorLink: '',
    needToTopupBalance: '0',
    nextBillingAt: '',
    status: OrderStatus.Started,
    l2BridgeContract: '',
    l2PortalContract: '',
    explorer: 'https://nos-explorer.regtest.trustless.computer/',
    rpc: 'https://l2-node.regtest.trustless.computer/',
    rollupCost: '0',
    userName: 'NBC team',
    plugins: getPlugins({ isProduction: false }),
  },
];

const QUICK_START: Array<IQuickStart> = [
  {
    title: 'Build your Bitcoin Virtual Machine',
    completed: true,
    type: QuickStartTypeEnum.CREATE,
  },
  {
    title: 'Get some testnet BVM',
    completed: false,
    type: QuickStartTypeEnum.FAUCET,
  },
  {
    title: 'Issue your gov token',
    completed: false,
    type: QuickStartTypeEnum.ISSUE_TOKEN,
  },
  {
    title: 'Set up your crowdfund campaign',
    completed: false,
    type: QuickStartTypeEnum.CROWD_FUNDING,
  },
  {
    title: 'Set up your DAO',
    completed: false,
    type: QuickStartTypeEnum.DAO,
  },
  {
    title: 'Tweet about your Bitcoin L2',
    completed: false,
    type: QuickStartTypeEnum.TWITTER,
  },
  {
    title: 'Join Discord',
    completed: false,
    type: QuickStartTypeEnum.JOIN_DISCORD,
  },
];

export { COMPUTERS, QUICK_START };
