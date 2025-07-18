import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export const useBalance = () => {
  // Start with a high balance for demo purposes
  const [balance, setBalance] = useState(10000);

  const deductBalance = useCallback((amount: number) => {
    setBalance(prev => {
      const newBalance = prev - amount;
      if (newBalance < 0) {
        // For demo purposes, just add more balance when it goes negative
        toast.success('Balance replenished! Demo mode active.', {
          description: 'Unlimited balance for demo purposes'
        });
        return 10000;
      }
      return newBalance;
    });
  }, []);

  const addBalance = useCallback((amount: number) => {
    setBalance(prev => prev + amount);
  }, []);

  const resetBalance = useCallback(() => {
    setBalance(10000);
    toast.success('Balance reset to $10,000');
  }, []);

  return {
    balance,
    deductBalance,
    addBalance,
    resetBalance
  };
};