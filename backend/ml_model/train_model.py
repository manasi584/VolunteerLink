import pandas as pd
import pickle
from sklearn.neighbors import NearestNeighbors

# Load job dataset (simulating MongoDB job listings)
data = pd.read_csv("volunteer_jobs.csv")

# Convert categorical data into numerical (One-Hot Encoding)
data_encoded = pd.get_dummies(data, columns=["skillsRequired", "areaOfImpact", "location"])

# Train a Nearest Neighbors model
X = data_encoded.drop(columns=["title", "NGO"])  # Features
model = NearestNeighbors(n_neighbors=5, algorithm='auto')
model.fit(X)

# Save the model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ ML Model trained and saved!")
