def date_fashion(you, date):
    # First check if either is ≤ 2 (always results in 0)
    if you <= 2 or date <= 2:
        return 0
    # Then check if either is ≥ 8 (results in 2)
    elif you >= 8 or date >= 8:
        return 2
    # Otherwise, result is 1
    else:
        return 1