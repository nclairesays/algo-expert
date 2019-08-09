# time: O(n^2)
# space: O(1)
# def twoNumberSum (array, targetSum):
#     print(len(array))
#     print(range(len(array)-1))
#     for i in range(len(array)-1): # stopping at second to last number in order to compare it with the last number
#         firstNum = array[i]
#         for j in range(i+1, len(array)): #it's not len(array) - 1 so that it includes the last number
#             secondNum = array[j]
#             if firstNum + secondNum == targetSum:
#                 return [firstNum, secondNum]
#     return []


# time: O(n)
# space: O(n)
# def twoNumberSum (array, targetSum):
#     nums = {}
#     for num in array:
#         difference = targetSum - num #targetSum-num is like the y or difference
#         if difference in nums: 
#             return [difference, num]
#         else: 
#             nums[num] = True
#     return []


# time: O(nlogn) if using best sorting algo
# space: O(1)
def twoNumberSum (array, targetSum):
    array.sort()
    left = 0
    right = len(array)-1
    while left < right: #while the left is not past the right one
        currentSum =  array[left] + array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
    return []





print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) #[-1, 11]
print(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)) #[3, 15]

# this one gets error for algo solution #3:
print(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)) #[-5, 0]