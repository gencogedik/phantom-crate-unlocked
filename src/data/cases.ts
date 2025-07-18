import { Case, Item } from '@/types';

const baseWeaponSkins: Item[] = [
  // Consumer Grade (Çöp Tier) - Daha fazla ekleyeceğiz
  {
    id: 'ak47-safari',
    name: 'AK-47 | Safari Mesh',
    price: 0.50,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Çöp Koleksiyonu'
  },
  {
    id: 'm4a4-desert',
    name: 'M4A4 | Çöl Saldırısı',
    price: 0.80,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Çöp Koleksiyonu'
  },
  {
    id: 'glock-sand',
    name: 'Glock-18 | Kum Tepesi',
    price: 0.30,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'Çöp Koleksiyonu'
  },
  {
    id: 'p250-sand',
    name: 'P250 | Kum Fırtınası',
    price: 0.25,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Çöp Koleksiyonu'
  },
  {
    id: 'nova-walnut',
    name: 'Nova | Ceviz',
    price: 0.40,
    rarity: 'consumer',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Çöp Koleksiyonu'
  },

  // Industrial Grade (Az Daha İyi Çöp)
  {
    id: 'ak47-blue',
    name: 'AK-47 | Mavi Laminat',
    price: 5.50,
    rarity: 'industrial',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Fabrika Koleksiyonu'
  },
  {
    id: 'm4a1-bright',
    name: 'M4A1-S | Parlak Su',
    price: 7.30,
    rarity: 'industrial',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Fabrika Koleksiyonu'
  },
  {
    id: 'awp-safari',
    name: 'AWP | Safari Mesh',
    price: 6.80,
    rarity: 'industrial',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Fabrika Koleksiyonu'
  },

  // Mil-Spec Grade (Biraz Değerli)
  {
    id: 'ak47-redline',
    name: 'AK-47 | Kırmızı Çizgi',
    price: 25.80,
    rarity: 'milspec',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'eSports 2013 Koleksiyonu'
  },
  {
    id: 'awp-graphite',
    name: 'AWP | Grafit',
    price: 32.10,
    rarity: 'milspec',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'eSports 2013 Koleksiyonu'
  },
  {
    id: 'm4a4-dragon',
    name: 'M4A4 | Ejder Kralı',
    price: 28.50,
    rarity: 'milspec',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'eSports 2013 Koleksiyonu'
  },

  // Restricted (İyi Stuff)
  {
    id: 'ak47-vulcan',
    name: 'AK-47 | Vulkan',
    price: 85.50,
    rarity: 'restricted',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Phoenix Koleksiyonu'
  },
  {
    id: 'awp-electric',
    name: 'AWP | Elektrik Mavisi',
    price: 92.00,
    rarity: 'restricted',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Phoenix Koleksiyonu'
  },

  // Classified (Çok İyi)
  {
    id: 'awp-asiimov',
    name: 'AWP | Asiimov',
    price: 125.80,
    rarity: 'classified',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    collection: 'Phoenix Koleksiyonu'
  },
  {
    id: 'm4a4-howl',
    name: 'M4A4 | Uluma',
    price: 450.00,
    rarity: 'classified',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Huntsman Koleksiyonu'
  },

  // Covert (Süper Rare)
  {
    id: 'ak47-fire',
    name: 'AK-47 | Ateş Yılanı',
    price: 850.50,
    rarity: 'covert',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
    collection: 'Bravo Koleksiyonu'
  },
  {
    id: 'awp-dragon',
    name: 'AWP | Ejder Lore',
    price: 1200.00,
    rarity: 'covert',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'Cobblestone Koleksiyonu'
  },

  // Exceedingly Rare (Bıçaklar)
  {
    id: 'karambit-fade',
    name: '★ Karambit | Fade',
    price: 2500.00,
    rarity: 'exceedingly-rare',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    collection: 'Özel Eşyalar'
  },
  {
    id: 'bayonet-doppler',
    name: '★ Bayonet | Doppler',
    price: 1800.00,
    rarity: 'exceedingly-rare',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    collection: 'Özel Eşyalar'
  }
];

// Döngüsel olarak Consumer ve Industrial grade'leri çoğalt
const generateMoreItems = (baseItems: Item[], multiplier: number): Item[] => {
  const result = [...baseItems];
  const consumerItems = baseItems.filter(item => item.rarity === 'consumer');
  const industrialItems = baseItems.filter(item => item.rarity === 'industrial');
  
  // Consumer grade'leri 15 kez çoğalt
  for (let i = 0; i < 15; i++) {
    consumerItems.forEach((item, index) => {
      result.push({
        ...item,
        id: `${item.id}-copy-${i}-${index}`,
        name: `${item.name} (${i + 2}. Seri)`
      });
    });
  }
  
  // Industrial grade'leri 8 kez çoğalt
  for (let i = 0; i < 8; i++) {
    industrialItems.forEach((item, index) => {
      result.push({
        ...item,
        id: `${item.id}-copy-${i}-${index}`,
        name: `${item.name} (${i + 2}. Seri)`
      });
    });
  }
  
  return result;
};

const weaponSkins = generateMoreItems(baseWeaponSkins, 1);

export const cases: Case[] = [
  {
    id: 'shitpost-case',
    name: 'Shitpost Kasası',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop',
    description: 'İçinde çöp var ama açmaya devam et',
    items: weaponSkins
  },
  {
    id: 'chad-case',
    name: 'Chad Premium Kasası',
    price: 4.20,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop',
    description: 'Sadece alfalar açabilir',
    items: weaponSkins.filter(item => ['Phoenix Koleksiyonu', 'Özel Eşyalar', 'Huntsman Koleksiyonu'].includes(item.collection || ''))
  },
  {
    id: 'sigma-case',
    name: 'Sigma Grindset Kasası',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
    description: 'Hustle while they sleep',
    items: weaponSkins.filter(item => ['eSports 2013 Koleksiyonu', 'Özel Eşyalar', 'Cobblestone Koleksiyonu'].includes(item.collection || ''))
  },
  {
    id: 'gigachad-case',
    name: 'GigaChad Kasası',
    price: 13.37,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=400&fit=crop',
    description: 'Average knife enjoyer',
    items: weaponSkins.filter(item => ['Bravo Koleksiyonu', 'Özel Eşyalar'].includes(item.collection || ''))
  },
  {
    id: 'based-case',
    name: 'Based Department Kasası',
    price: 21.37,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop',
    description: 'Certified based moment',
    items: weaponSkins
  }
];