def make_chocolate(small, big, goal):
    # Maximum kilos we can get from big bars (can't use more than available or needed)
    max_big_kilos = min(big * 5, (goal // 5) * 5)
    
    # Remaining kilos needed after using big bars
    remaining = goal - max_big_kilos
    
    # Check if we have enough small bars for the remainder
    if remaining <= small:
        return remaining
    else:
        return -1