import { Card } from '@/components/ui/card';
import { Wallet, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BalanceDisplayProps {
  balance: number;
  onReset?: () => void;
}

export const BalanceDisplay = ({ balance, onReset }: BalanceDisplayProps) => {
  return (
    <Card className="bg-secondary/50 border-border/50 backdrop-blur-sm">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Wallet className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Balance</p>
            <p className="text-xl font-bold text-primary">
              ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        {onReset && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={onReset}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        )}
      </div>
    </Card>
  );
};