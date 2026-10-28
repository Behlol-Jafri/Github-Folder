def calculate_histogram(numbers, bin_size):
    histogram = {}
    for number in numbers:
        bin_key = (number // bin_size) * bin_size
        if bin_key in histogram:
            histogram[bin_key] += 1
        else:
            histogram[bin_key] = 1
    return histogram


numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
bin_size = int(input("Enter the bin size: "))
print(calculate_histogram(numbers, bin_size))