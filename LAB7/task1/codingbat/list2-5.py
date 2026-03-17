def sum67(nums):
    total = 0
    in_section = False
    
    for num in nums:
        if num == 6:
            in_section = True
        elif in_section and num == 7:
            in_section = False
        elif not in_section:
            total += num
    
    return total