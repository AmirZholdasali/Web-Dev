def sum13(nums):
    total = 0
    i = 0
    
    while i < len(nums):
        if nums[i] == 13:
            # Skip this 13 and the next element
            i += 2
        else:
            # Add this element and move to next
            total += nums[i]
            i += 1
    
    return total