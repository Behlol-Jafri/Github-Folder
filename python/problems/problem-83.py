
def count_case_chars(s):
    case_count = {'upper_case': 0, 'lower_case': 0}
    for char in s:
        if char.isupper():
            case_count['upper_case'] += 1
        elif char.islower():
            case_count['lower_case'] += 1
    return case_count

count = count_case_chars("Hello World!")
print(count)