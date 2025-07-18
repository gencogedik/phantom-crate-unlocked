import { Card } from '@/components/ui/card';
import { Item, RARITY_COLORS, RARITY_NAMES } from '@/types';
import { cn } from '@/lib/utils';

interface ItemDisplayProps {
  item: Item;
  revealed?: boolean;
  className?: string;
}

export const ItemDisplay = ({ item, revealed = true, className }: ItemDisplayProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300",
        `border-[hsl(var(--rarity-${item.rarity}))]`,
        revealed ? "animate-reveal-item" : "opacity-50",
        className
      )}
      style={{
        boxShadow: `0 0 20px hsl(var(--rarity-${item.rarity}) / 0.3)`
      }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
          style={{
            background: `linear-gradient(to top, hsl(var(--rarity-${item.rarity}) / 0.3), transparent, transparent)`
          }}
        />
        
        {/* Rarity indicator */}
        <div 
          className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold"
          style={{
            backgroundColor: `hsl(var(--rarity-${item.rarity}) / 0.2)`,
            color: `hsl(var(--rarity-${item.rarity}))`
          }}
        >
          {RARITY_NAMES[item.rarity]}
        </div>
      </div>
      
      <div className="p-4">
        <h3 
          className="font-bold text-lg mb-2 leading-tight"
          style={{ color: `hsl(var(--rarity-${item.rarity}))` }}
        >
          {item.name}
        </h3>
        
        {item.collection && (
          <p className="text-sm text-muted-foreground mb-2">
            {item.collection}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ₺{item.price.toFixed(2)}
          </span>
          {item.name.includes('★') && (
            <span style={{ color: `hsl(var(--rarity-exceedingly-rare))` }} className="text-lg">★</span>
          )}
        </div>
      </div>
    </Card>
  );
};