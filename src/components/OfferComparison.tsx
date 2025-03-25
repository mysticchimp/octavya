
import { useState } from 'react';

interface Offer {
  baseSalary: number;
  equity: number;
  bonus: number;
  workLifeBalance: number;
  careerGrowth: number;
}

export const calculateOfferScore = (offer: Offer) => {
  const totalCompensation = offer.baseSalary + offer.equity + offer.bonus;
  const qualityScore = (offer.workLifeBalance + offer.careerGrowth) * 10000;
  return totalCompensation + qualityScore;
};

export const useOfferComparison = () => {
  const [offer1, setOffer1] = useState<Offer>({
    baseSalary: 0,
    equity: 0,
    bonus: 0,
    workLifeBalance: 5,
    careerGrowth: 5,
  });
  
  const [offer2, setOffer2] = useState<Offer>({
    baseSalary: 0,
    equity: 0,
    bonus: 0,
    workLifeBalance: 5,
    careerGrowth: 5,
  });

  const [compassAngle, setCompassAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasCompared, setHasCompared] = useState(false);

  const compareOffers = () => {
    setIsSpinning(true);
    const score1 = calculateOfferScore(offer1);
    const score2 = calculateOfferScore(offer2);
    
    // Spin for 2 seconds before showing result
    setTimeout(() => {
      if (score1 > score2) {
        setCompassAngle(-45); // Point to Offer 1
      } else if (score2 > score1) {
        setCompassAngle(135); // Point to Offer 2
      } else {
        setCompassAngle(45); // Neutral position
      }
      setIsSpinning(false);
      setHasCompared(true);
    }, 2000);
  };

  return {
    offer1,
    offer2,
    setOffer1,
    setOffer2,
    compassAngle,
    hasCompared,
    compareOffers,
  };
};
