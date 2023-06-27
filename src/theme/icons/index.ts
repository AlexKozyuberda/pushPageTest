import { FC } from 'react';
import { Arrow } from './Arrow';
import { Audience } from './Audience';
import { Calendar } from './Calendar';
import { ChoiceArrow } from './ChoiceArrow';
import { Clock } from './Clock';
import { Close } from './Close';
import { Dashboard } from './Dashboard';
import { Devices } from './Devices';
import { Info } from './Info';
import { Metrics } from './Metrics';
import { Offers } from './Offers';
import { Plus } from './Plus';
import { Pushes } from './Pushes';
import { Trash } from './Trash';

export interface Icons {
  [key: string]: FC;
}

export const icons: Icons = {
  audience: Audience,
  dashboard: Dashboard,
  devices: Devices,
  metrics: Metrics,
  offers: Offers,
  pushes: Pushes,
  arrow: Arrow,
  calendar: Calendar,
  choiceArrow: ChoiceArrow,
  clock: Clock,
  close: Close,
  info: Info,
  plus: Plus,
  trash: Trash,
};
