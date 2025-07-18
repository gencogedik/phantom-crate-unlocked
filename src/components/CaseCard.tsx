import { Card } from '@/components/ui/card';
import { Case } from '@/types';
import { useNavigate } from 'react-router-dom';

interface CaseCardProps {
  case: Case;
}

export const CaseCard = ({ case: caseItem }: CaseCardProps) => {
  const navigate = useNavigate();

  const handleCaseClick = () => {
    navigate(`/case/${caseItem.id}`);
  };

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-case hover:scale-[1.02] bg-gradient-case border-border/50"
      onClick={handleCaseClick}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={caseItem.image} 
          alt={caseItem.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-foreground mb-1">
            {caseItem.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {caseItem.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-primary font-bold text-lg">
              ${caseItem.price.toFixed(2)}
            </span>
            <div className="text-xs text-muted-foreground">
              {caseItem.items.length} items
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};