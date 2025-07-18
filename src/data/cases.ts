import { Case, Item } from '@/types';

const weaponSkins: Item[] = [
  // Consumer Grade
  {
    id: 'ak47-safari',
    name: 'AK-47 | Safari Mesh',
    price: 2.50,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Safehouse Collection'
  },
  {
    id: 'm4a4-desert',
    name: 'M4A4 | Desert-Strike',
    price: 3.20,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Safehouse Collection'
  },
  {
    id: 'glock-sand',
    name: 'Glock-18 | Sand Dune',
    price: 1.80,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
  },

  // Industrial Grade
  {
    id: 'ak47-blue',
    name: 'AK-47 | Blue Laminate',
    price: 12.50,
    rarity: 'industrial',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Industrial Collection'
  },
  {
    id: 'm4a1-bright',
    name: 'M4A1-S | Bright Water',
    price: 15.30,
    rarity: 'industrial',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Industrial Collection'
  },

  // Mil-Spec Grade
  {
    id: 'ak47-redline',
    name: 'AK-47 | Redline',
    price: 35.80,
    rarity: 'milspec',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'eSports 2013 Collection'
  },
  {
    id: 'awp-graphite',
    name: 'AWP | Graphite',
    price: 42.10,
    rarity: 'milspec',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'eSports 2013 Collection'
  },

  // Restricted
  {
    id: 'ak47-vulcan',
    name: 'AK-47 | Vulcan',
    price: 85.50,
    rarity: 'restricted',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Phoenix Collection'
  },

  // Classified
  {
    id: 'awp-asiimov',
    name: 'AWP | Asiimov',
    price: 125.80,
    rarity: 'classified',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Phoenix Collection'
  },

  // Covert
  {
    id: 'ak47-fire',
    name: 'AK-47 | Fire Serpent',
    price: 350.50,
    rarity: 'covert',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Bravo Collection'
  },

  // Exceedingly Rare
  {
    id: 'karambit-fade',
    name: '★ Karambit | Fade',
    price: 1250.00,
    rarity: 'exceedingly-rare',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'Special Items'
  }
];

export const cases: Case[] = [
  {
    id: 'weapon-case',
    name: 'Weapon Case',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop',
    description: 'Contains one of the following',
    items: weaponSkins
  },
  {
    id: 'operation-phoenix',
    name: 'Operation Phoenix Weapon Case',
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop',
    description: 'Contains one of the following',
    items: weaponSkins.filter(item => ['Phoenix Collection', 'Special Items'].includes(item.collection || ''))
  },
  {
    id: 'esports-case',
    name: 'eSports 2013 Case',
    price: 5.80,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop',
    description: 'Contains one of the following',
    items: weaponSkins.filter(item => ['eSports 2013 Collection', 'Special Items'].includes(item.collection || ''))
  },
  {
    id: 'bravo-case',
    name: 'Operation Bravo Case',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=400&fit=crop',
    description: 'Contains one of the following',
    items: weaponSkins.filter(item => ['Bravo Collection', 'Special Items'].includes(item.collection || ''))
  }
];