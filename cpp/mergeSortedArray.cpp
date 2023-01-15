#include<bits/stdc++.h>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i=m-1,j=n-1,ind=m+n-1;
        while(i>=0 && j>=0){
            if(nums1[i] > nums2[j]){
                nums1[ind] = nums1[i];
                i--;
            }
            else{
                nums1[ind] = nums2[j];
                j--;
            }
            ind--;
        }

        while (i>=0)
        {
            nums1[ind] = nums1[i];
            i--;
            ind--;
        }
        
        while (j>=0)
        {
            nums1[ind] = nums2[j];
            j--;
            ind--;
        }
        

    }

int main(){
    vector<int> nums1{0},nums2{6}; int n,m; 
    m = 0; 
    n = 1;
    merge(nums1,m,nums2,n);
    for(auto i:nums1){
        cout << i << ",";
    }
    cout << endl;
}