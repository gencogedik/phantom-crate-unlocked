export interface Item {
  id: string;
  name: string;
  price: number;
  rarity: Rarity;
  image: string;
  collection?: string;
  compatibility?: string[];
}

export type Rarity = 
  | 'basic'
  | 'premium'
  | 'elite'
  | 'legendary'
  | 'exotic';

export interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  items: Item[];
  description: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}

export interface User {
  balance: number;
}

export interface CaseOpeningResult {
  item: Item;
  animation: boolean;
}

export const RARITY_COLORS: Record<Rarity, string> = {
  'basic': 'rarity-basic',
  'premium': 'rarity-premium',
  'elite': 'rarity-elite',
  'legendary': 'rarity-legendary',
  'exotic': 'rarity-exotic',
};

export const RARITY_NAMES: Record<Rarity, string> = {
  'basic': 'Temel',
  'premium': 'Premium',
  'elite': 'Elite',
  'legendary': 'Efsanevi',
  'exotic': 'Egzotik',
};

export const RARITY_CHANCES: Record<Rarity, number> = {
  'basic': 0.70,      // 70%
  'premium': 0.20,    // 20%
  'elite': 0.07,      // 7%
  'legendary': 0.025, // 2.5%
  'exotic': 0.005,    // 0.5%
};