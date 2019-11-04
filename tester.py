
for i in range(1,10):
  x=2**i
  sum=1
  while x > 1:
    sum*=x
    x/=2
  print(i,sum)