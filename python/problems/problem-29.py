for i in range(100,1000):
    number_list = list(map(int, str(i)))
    sum = 0
    for item in number_list:
        cube_of_item = item ** 3
        sum = sum + cube_of_item

    if sum == i:
        print(f"{sum} is an Armstrong number.")