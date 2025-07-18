import { cases } from '@/data/cases';
import { CaseCard } from '@/components/CaseCard';
import { BalanceDisplay } from '@/components/BalanceDisplay';
import { useBalance } from '@/hooks/useBalance';
import { Package2, Sparkles } from 'lucide-react';

const Index = () => {
  const { balance, resetBalance } = useBalance();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Package2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  CS:GO Case Opening
                </h1>
                <p className="text-muted-foreground">
                  Demo site - Open cases and win skins!
                </p>
              </div>
            </div>
            <BalanceDisplay balance={balance} onReset={resetBalance} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary/30 to-background py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Open Cases & Win Amazing Skins
            </h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the thrill of CS:GO case opening with realistic animations and drop rates. 
            Unlimited balance for demo purposes - just have fun!
          </p>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Available Cases
          </h2>
          <span className="text-muted-foreground">
            {cases.length} cases available
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} case={caseItem} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            This is a demo site for educational purposes only. No real money or items are involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
