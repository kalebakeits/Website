import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np
import random
data = [[random.randint(0,1) for __ in range(500)] for _ in range(100)]
plt.imsave('filename.png', np.array(data).reshape(500,100), cmap=cm.gray)