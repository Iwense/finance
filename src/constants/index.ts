export enum ACTIVE_STORY {
  HOME = "home",
  CALCULATOR = "calculator",
  NEWS = "news",
  PROFILE = "profile",
}

export enum ACTIVE_PANEL {
  //HOME STORY
  HOME = "home",
  CREDIT = "credit",
  LOANS = "loans",
  LOAN_DETAILS = 'loan_details',
  INSURANCE = 'insurance',
  BANK_CARDS = 'bank_cards',
  IPOTEKA = 'ipoteka',
  INVESTING = 'investing',
  CRYPTO = 'crypto',

  CALCULATOR = "calculator",
  CREDIT_CALC = 'credit_calc',
  NEWS = "news",
  PROFILE = "profile",
}

export enum ACTIVE_MODAL {
  LOANS_FILTER = "loans_filter",
}

export enum ACTIVE_POPUP {
  TEST = "test",
  NOT_AVAILABLE = 'not_available',
}

export enum PARAMS_LIST {
  LOAN_ID = 'loan_id'
}


export const DEFAULT_ACTIVE_STORY = {
    [ACTIVE_STORY.HOME]: ACTIVE_PANEL.HOME,
    [ACTIVE_STORY.CALCULATOR]: ACTIVE_PANEL.CALCULATOR,
    [ACTIVE_STORY.NEWS]: ACTIVE_PANEL.NEWS,
    [ACTIVE_STORY.PROFILE]: ACTIVE_PANEL.PROFILE,
  };