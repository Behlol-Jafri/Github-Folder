cp = int(input("Enter cp:"))
sp = int(input("Enter sp:"))
if sp > cp:
    profit = sp - cp
    print("Profit:", profit)
elif sp < cp:
    loss = cp - sp
    print("Loss:", loss)
else:
    print("No Profit No Loss")