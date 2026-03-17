def big_diff(nums):
    # Initialize min and max with the first element
    min_val = nums[0]
    max_val = nums[0]
    
    # Loop through the rest of the array
    for num in nums[1:]:
        if num < min_val:
            min_val = num
        if num > max_val:
            max_val = num
    
    # Return the difference
    return max_val - min_val