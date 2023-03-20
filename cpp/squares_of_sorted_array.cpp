#include <bits/stdc++.h>
using namespace std;

vector<int> sortedSquares(vector<int>& nums)
{
    int left = 0, right = nums.size() - 1, indx = right;
    vector<int> ans(nums.size());

    while(indx >= 0)
    {
        if(abs(nums[left]) > abs(nums[right]))
        {
            ans[indx] = nums[left] * nums[left];
            left++;
        }

        else
        {
            ans[indx] = nums[right] * nums[right];
            right--;
        }
        indx--;
    }        

    return ans;
}


int main()
{
    vector<int> v = {-5, -4, -1, 0, 2, 4, 6};

     for(auto i : v)
    {
        cout << i << " ";
    }

    cout << endl;

    for(auto i : sortedSquares(v))
    {
        cout << i << " ";
    }

    cout << endl;
}