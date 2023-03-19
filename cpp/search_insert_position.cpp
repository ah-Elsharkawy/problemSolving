#include <bits/stdc++.h>
using namespace std;


int searchInsert(vector<int>& nums, int target) {
        
    int first = 0, last = nums.size() - 1;
    int mid;
    
    while (first <= last)
    {
        mid = (first + last) / 2;
        if(nums[mid] == target)
            return mid;

        if(nums[mid] > target)
        {
            last = mid - 1;
            if(last < first)
                return last + 1;
        }
        
        else
        {
            first = mid + 1; 
            if(first > last)
                return first;
        }
    }

    return -1; // returns -1 only if the vector is empty

}

int main()
{
    vector<int> v(30);
    iota(v.begin(), v.end(), 1); // initializing the vector with values from 1 to 30
    int n; cin >> n;

    cout << "found or could be inserted at: " << searchInsert(v, n) << endl;
   
}