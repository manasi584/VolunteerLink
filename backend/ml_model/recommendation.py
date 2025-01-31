import sys
import pandas as pd
import pickle

# Load dataset
data = pd.read_csv("volunteer_jobs.csv")

# Load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

def get_recommendations(volunteer_skills, volunteer_location):
    # Filter jobs matching volunteer location
    relevant_jobs = data[data["location"] == volunteer_location]

    if relevant_jobs.empty:
        return []

    # Encode job skills
    job_features = pd.get_dummies(relevant_jobs, columns=["skillsRequired", "areaOfImpact", "location"]).drop(columns=["title", "NGO"])

    # Get top 5 recommended jobs
    distances, indices = model.kneighbors(job_features, n_neighbors=5)
    recommendations = relevant_jobs.iloc[indices[0]].to_dict(orient="records")

    return recommendations

if __name__ == "__main__":
    skills = sys.argv[1].split(",")  # Receive skills from API
    location = sys.argv[2]  # Receive location from API

    recommendations = get_recommendations(skills, location)
    print(recommendations)
