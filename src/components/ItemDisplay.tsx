import { Card } from '@/components/ui/card';
import { Item, RARITY_COLORS, RARITY_NAMES } from '@/types';
import { cn } from '@/lib/utils';

interface ItemDisplayProps {
  item: Item;
  revealed?: boolean;
  className?: string;
}

export const ItemDisplay = ({ item, revealed = true, className }: ItemDisplayProps) => {
  const rarityColorClass = `text-${RARITY_COLORS[item.rarity]}`;
  const rarityBorderClass = `border-${RARITY_COLORS[item.rarity]}/30`;
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300",
        rarityBorderClass,
        revealed ? "animate-reveal-item" : "opacity-50",
        className
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
          `from-${RARITY_COLORS[item.rarity]}/20`
        )} />
        
        {/* Rarity indicator */}
        <div className={cn(
          "absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold",
          `bg-${RARITY_COLORS[item.rarity]}/20 text-${RARITY_COLORS[item.rarity]}`
        )}>
          {RARITY_NAMES[item.rarity]}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className={cn(
          "font-bold text-lg mb-2 leading-tight",
          rarityColorClass
        )}>
          {item.name}
        </h3>
        
        {item.collection && (
          <p className="text-sm text-muted-foreground mb-2">
            {item.collection}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>
          {item.name.includes('★') && (
            <span className="text-yellow-400 text-lg">★</span>
          )}
        </div>
      </div>
    </Card>
  );
};