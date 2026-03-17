def centered_average(nums):
    # Find min and max values
    min_val = min(nums)
    max_val = max(nums)
    
    # Calculate sum and count, excluding one min and one max
    total = 0
    count = 0
    min_found = False
    max_found = False
    
    for num in nums:
        # Skip the first occurrence of min_val
        if num == min_val and not min_found:
            min_found = True
            continue
        
        # Skip the first occurrence of max_val
        if num == max_val and not max_found:
            max_found = True
            continue
        
        # Add all other numbers
        total += num
        count += 1
    
    # Return integer average
    return total // count