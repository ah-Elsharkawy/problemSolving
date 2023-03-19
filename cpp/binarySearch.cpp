#include <bits/stdc++.h>
using namespace std;


int search(vector<int>& nums, int target) {
        
    int first = 0, last = nums.size() - 1;
    int mid;

    while (first <= last)
    {
        mid = (first + last) / 2;
        if(nums[mid] == target)
            return mid;

        if(nums[mid] > target)
            last = mid - 1;
        
        else
            first = mid + 1; 
    }

    return -1;
    
}

int main()
{
    vector<int> v(30);
    /* iota(v.begin(), v.end(), 1); */ // initializing the vector with values from 1 to 30
    v.push_back(1);
    int n; cin >> n;

    cout << (search(v, n) == -1 ? "not found: " : "found at index: ") << search(v, n) << endl;
    for(auto i : v)
    {
        cout << i << " ";
    }
}