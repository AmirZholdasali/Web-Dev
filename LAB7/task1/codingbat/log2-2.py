def lone_sum(a, b, c):
    sum = 0
    
    # Check if a is unique
    if a != b and a != c:
        sum += a
    
    # Check if b is unique
    if b != a and b != c:
        sum += b
    
    # Check if c is unique
    if c != a and c != b:
        sum += c
    
    return sum