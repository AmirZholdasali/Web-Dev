def lucky_sum(a, b, c):
    # Check a first
    if a == 13:
        return 0
    
    # Check b (only if a wasn't 13)
    if b == 13:
        return a
    
    # Check c (only if a and b weren't 13)
    if c == 13:
        return a + b
    
    # No 13s found
    return a + b + c