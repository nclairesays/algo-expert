# O(2^n) time | O(n) space
# def getNthFib(n):
#     if n==2:
#         return 1
#     elif n==1:
#         return 0
#     else: 
#         return getNthFib(n-1) + getNthFib(n-2)



# store in hash table and access hash by using caching/memoization
# pass in the memoize hash table s second argument; recursively
# O(n) time | O(n) space
def getNthFib(n, memoize={1: 0, 2: 1}): #initialize 
    if n in memoize:
        print('#A if:  ')
        print(n)
        # print('memoize[n]: if #1 ')
        # print(memoize[n])
        return memoize[n]
    else:
        memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize)
        print('#B else: ')
        print(n)
        # print('memoize[n]: else #2 ')
        # print(memoize[n]) # smallest number (3) gets called first on the call stack
        return memoize[n]

print('answer is: ', getNthFib(6))


# #A if:  
# 2
# #A if:  
# 1
# #B else: 
# 3
# #A if:  
# 2
# #B else: 
# 4
# #A if:  
# 3
# #B else: 
# 5
# #A if:  
# 4
# #B else: 
# 6
# answer is:  5




# O(n) time | O(1) space
# def getNthFib(n):
#     lastTwo=[0,1]
#     counter = 3
#     while counter <= n:
#         nextFib = lastTwo[0] + lastTwo[1]
#         lastTwo[0] = lastTwo[1]
#         lastTwo[1] = nextFib
#         counter += 1
#     return lastTwo[1] if n > 1 else lastTwo[0]