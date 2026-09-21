class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int bp=prices[0];
        int p=0;
        for(int i=0;i<prices.size();i++)
        {
            if(bp>prices[i])
            {
                bp=prices[i];
            }
            p=max(p,prices[i]-bp);
        }
        return p;
    }
};
