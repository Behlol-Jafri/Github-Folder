heads = int(input("Enter the number of heads: "))
legs = int(input("Enter the number of legs: "))

dogs = (legs - 2 * heads) // 2
chickens = heads - dogs

print(f"Number of dogs: {dogs}")
print(f"Number of chickens: {chickens}")