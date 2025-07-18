import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Package } from 'lucide-react';
import { cases } from '@/data/cases';
import { Case, Item } from '@/types';
import { simulateCaseOpening } from '@/utils/caseOpening';
import { CaseOpeningAnimation } from '@/components/CaseOpeningAnimation';
import { BalanceDisplay } from '@/components/BalanceDisplay';
import { useBalance } from '@/hooks/useBalance';
import { toast } from 'sonner';

export const CaseOpening = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const { balance, deductBalance, addBalance, resetBalance } = useBalance();
  
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [winningItem, setWinningItem] = useState<Item | null>(null);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (caseId) {
      const foundCase = cases.find(c => c.id === caseId);
      setSelectedCase(foundCase || null);
    }
  }, [caseId]);

  const handleOpenCase = async () => {
    if (!selectedCase) return;

    if (balance < selectedCase.price) {
      toast.error('Insufficient balance!');
      return;
    }

    setIsOpening(true);
    setHasOpened(false);
    setWinningItem(null);
    
    // Deduct balance immediately
    deductBalance(selectedCase.price);

    try {
      const result = await simulateCaseOpening(selectedCase.items);
      setWinningItem(result);
      
      // Add the item value to balance (demo feature)
      addBalance(result.price * 0.8); // 80% of item value as "sell price"
      
      toast.success(`Won ${result.name}!`, {
        description: `Added $${(result.price * 0.8).toFixed(2)} to balance`
      });
    } catch (error) {
      toast.error('Failed to open case');
      setIsOpening(false);
    }
  };

  const handleAnimationComplete = () => {
    setIsOpening(false);
    setHasOpened(true);
  };

  const handleOpenAnother = () => {
    setWinningItem(null);
    setHasOpened(false);
  };

  if (!selectedCase) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cases
          </Button>
          <BalanceDisplay balance={balance} onReset={resetBalance} />
        </div>

        {/* Case Info */}
        <div className="text-center mb-8">
          <div className="max-w-md mx-auto mb-6">
            <Card className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img 
                  src={selectedCase.image} 
                  alt={selectedCase.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    {selectedCase.name}
                  </h1>
                  <p className="text-muted-foreground mb-2">
                    {selectedCase.description}
                  </p>
                  <span className="text-primary font-bold text-xl">
                    ${selectedCase.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {!isOpening && !hasOpened && (
            <Button 
              onClick={handleOpenCase}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-case hover:shadow-glow transition-all duration-300"
              disabled={balance < selectedCase.price}
            >
              <Package className="h-6 w-6" />
              Open Case - ${selectedCase.price.toFixed(2)}
            </Button>
          )}
        </div>

        {/* Case Opening Animation */}
        <CaseOpeningAnimation
          items={selectedCase.items}
          winningItem={winningItem}
          isOpening={isOpening}
          onComplete={handleAnimationComplete}
        />

        {/* Open Another Button */}
        {hasOpened && winningItem && (
          <div className="text-center mt-8">
            <Button 
              onClick={handleOpenAnother}
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <Package className="h-5 w-5" />
              Open Another Case
            </Button>
          </div>
        )}

        {/* Case Contents Preview */}
        {!isOpening && !hasOpened && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 text-center">Case Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedCase.items.slice(0, 8).map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate mb-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            {selectedCase.items.length > 8 && (
              <p className="text-center text-muted-foreground mt-4">
                And {selectedCase.items.length - 8} more items...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};