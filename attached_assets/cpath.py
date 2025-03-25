import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import plotly.graph_objects as go

# Load dataset from CSV file
try:
    # Update the path to your actual file location
    csv_path = "/Users/pratikgaad/Desktop/diverse_career_data.csv"
    df = pd.read_csv(csv_path)
    print(f"Dataset loaded successfully from {csv_path}")
except FileNotFoundError:
    print(f"Error: File not found at {csv_path}. Please check the file path and try again.")
    exit()

# Encode categorical variables
label_encoders = {}
for col in ["Skills", "Education", "Interests"]:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    # Add an 'unknown' class to each encoder
    le.classes_ = np.append(le.classes_, "<unknown>")
    label_encoders[col] = le

# Train a Machine Learning Model
X = df[["Skills", "Education", "Interests", "Desired_Income"]]
y = df["Career_Path"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier()
model.fit(X_train, y_train)

# Collect User Input
print("Enter your details to find potential career paths:")
user_skills = input("Enter your primary skill (e.g., Programming, Design): ")
user_education = input("Enter your highest education level (e.g., Bachelor's, Master's): ")
user_interests = input("Enter your primary interest (e.g., Tech, Art): ")
user_income = int(input("Enter your desired annual income: "))

# Handle unseen labels by mapping them to "<unknown>"
def safe_transform(encoder, value):
    if value in encoder.classes_:
        return encoder.transform([value])[0]
    else:
        return encoder.transform(["<unknown>"])[0]

user_data = pd.DataFrame({
    "Skills": [safe_transform(label_encoders["Skills"], user_skills)],
    "Education": [safe_transform(label_encoders["Education"], user_education)],
    "Interests": [safe_transform(label_encoders["Interests"], user_interests)],
    "Desired_Income": [user_income]
})

# Predict Career Paths and Probabilities
predictions = model.predict_proba(user_data)
career_paths = model.classes_
probabilities = predictions[0]

# Combine predictions into a DataFrame
results_df = pd.DataFrame({"Career_Path": career_paths, "Probability": probabilities})
results_df.sort_values(by="Probability", ascending=False, inplace=True)

# Highlight top 5 career paths
top_5_df = results_df.head(5)

# Create Sankey Diagram
labels = ["User"] + list(results_df["Career_Path"])
sources = [0] * len(labels[1:])  # All flows start from the user node (index 0)
targets = list(range(1, len(labels)))  # Target nodes correspond to career paths
values = list(results_df["Probability"])

# Highlight the top 5 paths with a distinct color
link_colors = ["red" if i < 5 else "gray" for i in range(len(values))]

fig = go.Figure(go.Sankey(
    node=dict(
        pad=15,
        thickness=20,
        line=dict(color="black", width=0.5),
        label=labels,
        color=["blue"] + ["red" if i < 5 else "gray" for i in range(len(labels) - 1)]
    ),
    link=dict(
        source=sources,
        target=targets,
        value=values,
        color=link_colors
    )
))

fig.update_layout(title_text="Career Path Recommendations Sankey Diagram", font_size=10)
fig.show()

print("\nTop Career Recommendations:")
print(top_5_df)
