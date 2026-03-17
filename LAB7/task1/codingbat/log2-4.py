def fix_teen(n):
    # If n is a teen (13-19) but NOT 15 or 16, return 0
    if n >= 13 and n <= 19 and n != 15 and n != 16:
        return 0
    # Otherwise return the original value
    return n

def no_teen_sum(a, b, c):
    # Apply fix_teen to each value and sum them
    return fix_teen(a) + fix_teen(b) + fix_teen(c)