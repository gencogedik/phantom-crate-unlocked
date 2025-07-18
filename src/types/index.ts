export interface Item {
  id: string;
  name: string;
  price: number;
  rarity: Rarity;
  image: string;
  collection?: string;
}

export type Rarity = 
  | 'consumer'
  | 'industrial'
  | 'milspec'
  | 'restricted'
  | 'classified'
  | 'covert'
  | 'exceedingly-rare';

export interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  items: Item[];
  description: string;
}

export interface User {
  balance: number;
}

export interface CaseOpeningResult {
  item: Item;
  animation: boolean;
}

export const RARITY_COLORS: Record<Rarity, string> = {
  'consumer': 'rarity-consumer',
  'industrial': 'rarity-industrial',
  'milspec': 'rarity-milspec',
  'restricted': 'rarity-restricted',
  'classified': 'rarity-classified',
  'covert': 'rarity-covert',
  'exceedingly-rare': 'rarity-exceedingly-rare',
};

export const RARITY_NAMES: Record<Rarity, string> = {
  'consumer': 'Consumer Grade',
  'industrial': 'Industrial Grade',
  'milspec': 'Mil-Spec Grade',
  'restricted': 'Restricted',
  'classified': 'Classified',
  'covert': 'Covert',
  'exceedingly-rare': 'Exceedingly Rare',
};

export const RARITY_CHANCES: Record<Rarity, number> = {
  'consumer': 0.7992,      // 79.92%
  'industrial': 0.1598,    // 15.98%
  'milspec': 0.032,       // 3.2%
  'restricted': 0.0064,   // 0.64%
  'classified': 0.0013,   // 0.13%
  'covert': 0.0026,       // 0.26%
  'exceedingly-rare': 0.0001, // 0.01%
};