from google.colab import files


uploaded = files.upload()

import pandas as pd

df = pd.read_csv("volunteer_jobs.csv")
print(df.head())


import pandas as pd
import pickle
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MultiLabelBinarizer


data = pd.read_csv("volunteer_jobs.csv")


data["skillsRequired"] = data["skillsRequired"].apply(lambda x: x.split(", "))

mlb = MultiLabelBinarizer()
skills_encoded = pd.DataFrame(mlb.fit_transform(data["skillsRequired"]), columns=mlb.classes_)

data_encoded = pd.get_dummies(data, columns=["areaOfImpact", "location"])

data_final = pd.concat([data_encoded, skills_encoded], axis=1)

data_final = data_final.drop(columns=["title", "NGO", "skillsRequired", "deadline"])

model = NearestNeighbors(n_neighbors=3, metric="cosine")
model.fit(data_final)


with open("model.pkl", "wb") as f:
    pickle.dump((model, mlb, data_final, data), f)

print("✅ Model trained and saved successfully!")

