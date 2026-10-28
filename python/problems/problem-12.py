radius = float(input("Enter the radius of the cylinder (cm): "))
height = float(input("Enter the height of the cylinder (cm): "))

volume = 3.14 * radius**2 * height
liters = volume / 1000  # Convert cubic centimeters to liters
cost = liters * 40  # Assuming the cost is $0.5 per liter

print("Volume of the cylinder:", volume)
print("Liters of the cylinder:", liters)
print("Cost of the cylinder:", cost)
