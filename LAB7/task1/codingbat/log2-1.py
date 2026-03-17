def make_bricks(small, big, goal):
    # Maximum we can get from big bricks (can't use more than needed or available)
    max_big_contribution = min(big, goal // 5) * 5
    
    # Remaining length needed after using big bricks
    remaining = goal - max_big_contribution
    
    # Check if we have enough small bricks for the remaining length
    return remaining <= small