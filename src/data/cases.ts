import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Package, Sparkles } from 'lucide-react';
import { simulateCaseOpening } from '@/utils/caseOpening';
import { CaseOpeningAnimation } from '@/components/CaseOpeningAnimation';
import { useCart } from '@/hooks/useCart';
import { Cart } from '@/components/Cart';
import { toast } from 'sonner';
import { useProducts } from '@/hooks/useProducts'; // ✅ Supabase'den ürün çekme

export const ShuffleCaseOpening = () => {
  const { data: products = [], isLoading } = useProducts(); // ✅ ürünler Supabase'den geliyor
  const [isOpening, setIsOpening] = useState(false);
  const [winningItem, setWinningItem] = useState<any | null>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const { addToCart } = useCart();

  const handleOpenCase = async () => {
    if (isOpening || products.length === 0) return;

    setIsOpening(true);
    setHasOpened(false);
    setWinningItem(null);

    try {
      const result = await simulateCaseOpening(products); // ✅ random seçim Supabase verisinden
      setWinningItem(result);

      addToCart(result); // ✅ sepete ekle
      toast.success(`${result.name} kazandın!`, {
        description: 'Ürün sepetinize eklendi',
      });
    } catch (error) {
      toast.error('Kasa açılırken bir hata oluştu');
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SHUFFLE CASE</h1>
                <p className="text-sm text-muted-foreground">Premium Telefon Kılıfları</p>
              </div>
            </div>
            <Cart />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary/50 to-background py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Sürpriz Kutusu</h2>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Telefonunuzu korurken stilinizi yansıtın. Premium kaliteli kılıflar ile tanışın.
          </p>
        </div>
      </div>

      {/* Case Opening */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          {!isOpening && !hasOpened && (
            <Button
              onClick={handleOpenCase}
              size="lg"
              disabled={isLoading || products.length === 0}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 gap-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Package className="h-6 w-6" />
              {isLoading ? "Yükleniyor..." : `Kutuyu Aç - ₺99`}
            </Button>
          )}
        </div>

        {/* Case Opening Animation */}
        <CaseOpeningAnimation
          items={products}
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
              Başka Kutu Aç
            </Button>
          </div>
        )}

        {/* Sample Products Preview */}
        {!isOpening && !hasOpened && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Kazanabileceğiniz Ürünler</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.slice(0, 8).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.compatibility?.join(', ')}
                    </p>
                    <p className="text-primary font-bold text-sm">₺{item.price}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">Ve daha fazlası...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            Telefonunuzu korurken stilinizi yansıtın. Premium kalite, uygun fiyat.
          </p>
        </div>
      </div>
    </div>
  );
};
