import pandas as pd
import pickle
from sklearn.preprocessing import MultiLabelBinarizer


with open("model.pkl", "rb") as f:
    model, mlb, data_final, data = pickle.load(f)

def get_recommendations(volunteer_skills, volunteer_location):

    volunteer_skills = [skill.strip().lower() for skill in volunteer_skills]
    volunteer_skills_encoded = pd.DataFrame(0, index=[0], columns=mlb.classes_)
    for skill in volunteer_skills:
        if skill in volunteer_skills_encoded.columns:
            volunteer_skills_encoded[skill] = 1

    location_encoded = pd.DataFrame(0, index=[0], columns=[f"location_{volunteer_location}"])

    if f"location_{volunteer_location}" in data_final.columns:
        location_encoded[f"location_{volunteer_location}"] = 1
    else:
        pass


    volunteer_profile = pd.concat([volunteer_skills_encoded, location_encoded], axis=1)


    missing_cols = list(set(data_final.columns) - set(volunteer_profile.columns))
    volunteer_profile = volunteer_profile.reindex(columns=volunteer_profile.columns.tolist() + missing_cols, fill_value=0)


    volunteer_profile = volunteer_profile[data_final.columns]

    distances, indices = model.kneighbors(volunteer_profile, n_neighbors=3)
    recommendations = data.iloc[indices[0]].to_dict(orient="records")

    return recommendations

if __name__ == "__main__":

    skills_input = input("Enter your skills (comma-separated): ").strip().lower()
    skills = skills_input.split(",")
    location = input("Enter your preferred location: ").strip().lower()


    recommendations = get_recommendations(skills, location)

    if recommendations:
        print("\n🔹 Recommended Volunteer Jobs for You:\n")
        for idx, job in enumerate(recommendations, start=1):
            print(f"{idx}. {job['title']} at {job['NGO']} ({job['location']})")
            print(f"   Skills Required: {job['skillsRequired']}")
            print(f"   Area of Impact: {job['areaOfImpact']}")
            print(f"   Deadline: {job['deadline']}\n")
    else:
        print("\n No matching volunteer jobs found for your skills and location.")
