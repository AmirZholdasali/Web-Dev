v = int(input())
arr = []
for i in range(v):
    num = int(input())
    arr.append(num)
for i in range(len(arr)):
    if arr[i]%2 == 0:
        print(arr[i], end = " ")