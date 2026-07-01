const t = { baseOrderPoints: 10, tiers: [{ minAmount: 5e5, maxAmount: 999900, bonusPoints: 5 }, { minAmount: 1e6, maxAmount: 1499900, bonusPoints: 15 }, { minAmount: 15e5, maxAmount: 1999900, bonusPoints: 25 }, { minAmount: 2e6, bonusPoints: 40 }], referralRewardPoints: 50, redemptionRewards: [{ points: 100, description: "Free Drink", rewardType: "Free Drink" }, { points: 150, description: "15% Discount on Next Order", rewardType: "15% discount on next order" }, { points: 200, description: "1,000 Naira Discount", rewardType: "1000 discount" }, { points: 300, description: "Free Yum Meal", rewardType: "Free Yum Meal" }, { points: 400, description: "Free Shirt", rewardType: "Free shirt" }] };
function s(o) {
  let n = t.baseOrderPoints;
  for (const e of t.tiers) if (o >= e.minAmount && (!e.maxAmount || o <= e.maxAmount)) {
    n += e.bonusPoints;
    break;
  }
  return n;
}
function i(o, n) {
  const e = t.baseOrderPoints, r = n - e;
  return r > 0 ? `You earned ${e} base points + ${r} bonus points for this order!` : `You earned ${n} points for this order!`;
}
export { t as P, s as c, i as g };
