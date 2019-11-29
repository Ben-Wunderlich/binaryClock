
for i in range(1,11):
  x=2**i
  sum=1
  while x > 1:
    sum*=x
    x/=2
  print(i,sum)

#2^0 * 2^1 * 2^2
#    / 2^