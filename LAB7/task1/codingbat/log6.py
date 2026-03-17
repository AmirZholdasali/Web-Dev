def alarm_clock(day, vacation):
    # Check if it's weekend (day 0 or 6)
    is_weekend = day == 0 or day == 6
    
    if vacation:
        if is_weekend:
            return "off"
        else:
            return "10:00"
    else:
        if is_weekend:
            return "10:00"
        else:
            return "7:00"