 #include<bits/stdc++.h>
 using namespace std;
 
 void moveZeroes(vector<int>& nums) {

    for(int i=nums.size()-1; i>=0; i--){
        if(nums[i] == 0){
            nums.push_back(0);
            nums.erase(nums.begin()+i);
        }
    }
       


     
    }


 int main(){


    vector<int> nums{2,3,4,12,1,0,4,7575,0};

    moveZeroes(nums);
  /*   for (auto i: nums){
        cout << i << " ";
    } */
    

 }