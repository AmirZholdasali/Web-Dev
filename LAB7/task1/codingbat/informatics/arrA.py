v = int(input())
arr = []
for i in range(v):
    num = int(input())
    arr.append(num)
for i in range(0, v, 2):
    print(arr[i], end = " ")