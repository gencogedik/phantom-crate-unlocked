import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-96">
        <SheetHeader>
          <SheetTitle>Sepetim</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Sepetiniz boş
            </p>
          ) : (
            <>
              {cartItems.map((cartItem) => (
                <Card key={cartItem.item.id} className="p-4">
                  <div className="flex gap-3">
                    <img 
                      src={cartItem.item.image} 
                      alt={cartItem.item.name}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{cartItem.item.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {cartItem.item.compatibility?.join(', ')}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">
                          ₺{cartItem.item.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="h-6 w-6"
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">{cartItem.quantity}</span>
                          <Button 
                            size="icon" 
                            variant="outline" 
                            className="h-6 w-6"
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="icon" 
                            variant="destructive" 
                            className="h-6 w-6"
                            onClick={() => removeFromCart(cartItem.item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Toplam:</span>
                  <span className="font-bold text-lg">₺{getTotalPrice()}</span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    Satın Al
                  </Button>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    Sepeti Temizle
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};