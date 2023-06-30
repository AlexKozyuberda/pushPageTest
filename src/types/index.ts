export enum EnumIcons {
  audience = 'audience',
  dashboard = 'dashboard',
  devices = 'devices',
  metrics = 'metrics',
  offers = 'offers',
  pushes = 'pushes',
  arrow = 'arrow',
  calendar = 'calendar',
  choiceArrow = 'choiceArrow',
  close = 'close',
  clock = 'clock',
  info = 'info',
  plus = 'plus',
  trash = 'trash',
}

export enum EnumPushOptions {
  segmentOptions = 'segmentOptions',
  dateOptions = 'dateOptions',
}

export enum EnumBreakpoints {
  mobile = '576px',
  tablet = '768px',
  tabletPortrait = '991px',
  desktopSmall = '1439px',
  desktopMedium = '1440px',
}
export interface ISegmentation {
  index: number;
  handleDelete: (index: number) => void;
}

export interface ISegmentOption {
  id: string;
  index: number;
  segment: string;
}

interface IAudienceOption {
  value: string;
  label: string;
}

interface IDeposit {
  name: string;
  answer: string;
  count: string;
  register: string;
  more: string;
}

interface IMailing {
  date: string;
  time: string;
}

export interface IPush {
  pushName: string;
  pushTitle: string;
  pushMessage: string;
  pushIcon: string;
  pushImg: string;
  pushLanguage: string;
  pushAudience: IAudienceOption[];
  pushTypeDistribution: string;
  pushSegmentation: IDeposit;
  pushDates: IMailing;
}
