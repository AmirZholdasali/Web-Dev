def close_far(a, b, c):
    # Check if b is close to a and c is far from both
    if abs(b - a) <= 1:
        if abs(c - a) >= 2 and abs(c - b) >= 2:
            return True
    
    # Check if c is close to a and b is far from both
    if abs(c - a) <= 1:
        if abs(b - a) >= 2 and abs(b - c) >= 2:
            return True
    
    # Neither arrangement works
    return False