if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    scores = list(set(arr))
    scores.sort()
    
    runner_up = scores[-2]
    print(runner_up)