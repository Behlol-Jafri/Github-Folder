current_population = 10000

for year in range(10, 0, -1):
    print(f"Population in {year} years ago: {current_population}")
    current_population -= current_population * 0.1