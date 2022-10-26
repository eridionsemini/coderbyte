export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export enum TabStatus {
  ABOUT = 'about',
  STATS = 'stats',
  EVOLUTION = 'evolution',
  MOVES = 'moves',
}
