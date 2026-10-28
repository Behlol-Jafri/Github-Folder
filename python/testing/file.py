for i in range(1,21):
    for j in range(1, 11):
        with open(f"tables/table_{i}.txt", "a") as f:
            f.write(str(i) + " x " + str(j) + " = " + str(i * j) + "\n")

