export type Pairs = {
  ETHBTC: number,
  ETHREP: number,
  BTCETH: number,
  BTCREP: number
};

export type OriginKindSwapAction = {
  type: 'SWAP_ORIGIN_KIND',
  value: string
};
export type DestinationKindSwapAction = {
  type: 'SWAP_DESTINATION_KIND',
  value: string
};
export type OriginAmountSwapAction = {
  type: 'SWAP_ORIGIN_AMOUNT',
  value: ?number
};
export type DestinationAmountSwapAction = {
  type: 'SWAP_DESTINATION_AMOUNT',
  value: ?number
};
export type BityRatesSwapAction = {
  type: 'SWAP_UPDATE_BITY_RATES',
  value: Pairs
};
export type DestinationAddressSwapAction = {
  type: 'SWAP_DESTINATION_ADDRESS',
  value: ?number
};

export type RestartSwapAction = {
  type: 'SWAP_RESTART'
};

export type LoadBityRatesSwapAction = {
  type: 'SWAP_LOAD_BITY_RATES'
};

export type ChangeStepSwapAction = {
  type: 'SWAP_STEP',
  value: number
};

export type StopLoadBityRatesSwapAction = {
  type: 'SWAP_STOP_LOAD_BITY_RATES'
};

/*** Action Type Union ***/
export type SwapAction =
  | ChangeStepSwapAction
  | OriginKindSwapAction
  | DestinationKindSwapAction
  | OriginAmountSwapAction
  | DestinationAmountSwapAction
  | BityRatesSwapAction
  | DestinationAddressSwapAction
  | RestartSwapAction
  | LoadBityRatesSwapAction
  | StopLoadBityRatesSwapAction;