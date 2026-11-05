from pathlib import Path

import joblib
import pandas as pd
import streamlit as st

st.set_page_config(page_title="Water Potability Predictor", page_icon="💧", layout="wide")

MODEL_PATH = Path(__file__).parent / "rf_model.pkl"

# Notebook ke col_list wala order (model isi order mein train hua tha)
FEATURES = [
    "ph", "Hardness", "Solids", "Chloramines", "Sulfate",
    "Conductivity", "Organic_carbon", "Trihalomethanes", "Turbidity",
]

# Training data ke means: missing values yahi se fill hongi (notebook ke fillna(mean) ki tarah)
MEANS = {
    "ph": 7.0808, "Hardness": 196.3695, "Solids": 22014.0925,
    "Chloramines": 7.1223, "Sulfate": 333.7758, "Conductivity": 426.2051,
    "Organic_carbon": 14.2850, "Trihalomethanes": 66.3963, "Turbidity": 3.9668,
}

# Input limits aur hints (limits dataset ki range se thodi wasi rakhi gayi hain)
SPEC = {
    "ph": dict(min=0.0, max=14.0, step=0.1, help="Acidity/alkalinity, 0 se 14"),
    "Hardness": dict(min=0.0, max=400.0, step=1.0, help="Calcium/magnesium ki wajah se hardness (mg/L)"),
    "Solids": dict(min=0.0, max=70000.0, step=100.0, help="Total dissolved solids (ppm)"),
    "Chloramines": dict(min=0.0, max=15.0, step=0.1, help="Chloramines ki miqdar (ppm)"),
    "Sulfate": dict(min=0.0, max=600.0, step=1.0, help="Sulfate ki miqdar (mg/L)"),
    "Conductivity": dict(min=0.0, max=800.0, step=1.0, help="Electrical conductivity (μS/cm)"),
    "Organic_carbon": dict(min=0.0, max=35.0, step=0.1, help="Total organic carbon (ppm)"),
    "Trihalomethanes": dict(min=0.0, max=150.0, step=0.5, help="Trihalomethanes (μg/L)"),
    "Turbidity": dict(min=0.0, max=10.0, step=0.1, help="Pani ka dhundlapan (NTU)"),
}

LABELS = {1: "Potable", 0: "Not potable"}


@st.cache_resource
def load_model():
    return joblib.load(MODEL_PATH)


def potable_probability(model, X: pd.DataFrame):
    """Class 1 (potable) ki probability, model.classes_ ke hisab se."""
    idx = list(model.classes_).index(1)
    return model.predict_proba(X)[:, idx]


if not MODEL_PATH.exists():
    st.error(
        f"`{MODEL_PATH.name}` nahi mili. Notebook se bani hui `rf_model.pkl` "
        "ko `app.py` ke saath usi folder mein rakhein."
    )
    st.stop()

try:
    model = load_model()
except Exception as e:  # version mismatch, corrupt file, etc.
    st.error(
        "Model load nahi ho saka. Aksar iski wajah scikit-learn ka version mismatch hota hai: "
        "`requirements.txt` mein wohi version likhein jo notebook mein tha.\n\n"
        f"Detail: {e}"
    )
    st.stop()

# if "history" not in st.session_state:
#     st.session_state.history = []

# ---------------- Sidebar ----------------
# with st.sidebar:
#     st.header("About")
#     st.write(
#         "Yeh app Random Forest model se andaza lagata hai ke pani peene ke layak hai ya nahi, "
#         "9 water-quality measurements ki bunyad par."
#     )
#     st.caption("⚠️ Yeh sirf ek ML andaza hai. Asli faisle ke liye lab testing zaroori hai.")
#     if st.button("Prediction history saaf karein"):
#         st.session_state.history = []
#         st.rerun()

st.title("Water Potability Predictor")

tab = st.tabs(["Single prediction"])

# ---------------- Single prediction ----------------
with tab[0]:
    st.write("Pani ki values dalein (shuru mein training data ka average bhara hota hai).")
    with st.form("single"):
        values = {}
        rows = [FEATURES[0:3], FEATURES[3:6], FEATURES[6:9]]
        for row in rows:
            cols = st.columns(3)
            for col, name in zip(cols, row):
                s = SPEC[name]
                values[name] = col.number_input(
                    name,
                    min_value=s["min"],
                    max_value=s["max"],
                    value=float(MEANS[name]),
                    step=s["step"],
                    # help=s["help"],
                )
        submitted = st.form_submit_button("Predict", type="primary")

    if submitted:
        X = pd.DataFrame([[values[f] for f in FEATURES]], columns=FEATURES)
        pred = int(model.predict(X)[0])
        p = float(potable_probability(model, X)[0])

        if pred == 1:
            st.success(f"Prediction: **{LABELS[1]}**")
        else:
            st.error(f"Prediction: **{LABELS[0]}**")

    #     c1, c2 = st.columns(2)
    #     c1.metric("Potable probability", f"{p:.1%}")
    #     c2.metric("Not potable probability", f"{1 - p:.1%}")
    #     st.progress(p)
    #     if 0.4 <= p <= 0.6:
    #         st.info("Probability 50% ke qareeb hai, yani model is nateeje par kam yaqeen rakhta hai.")

    #     st.session_state.history.append({**values, "prediction": LABELS[pred], "potable_prob": round(p, 3)})

    # if st.session_state.history:
    #     st.subheader("Prediction history")
    #     hist = pd.DataFrame(st.session_state.history)
    #     st.dataframe(hist)
    #     st.download_button(
    #         "History download karein (CSV)",
    #         hist.to_csv(index=False).encode("utf-8"),
    #         "prediction_history.csv",
    #         "text/csv",
    #     )

# ---------------- Batch prediction ----------------
# with tab2:
#     st.write("CSV upload karein jis mein yeh columns hon: " + ", ".join(f"`{f}`" for f in FEATURES))
#     template = pd.DataFrame([MEANS])[FEATURES]
#     st.download_button(
#         "Sample template download karein",
#         template.to_csv(index=False).encode("utf-8"),
#         "template.csv",
#         "text/csv",
#     )

#     file = st.file_uploader("CSV file", type="csv")
#     if file is not None:
#         try:
#             df = pd.read_csv(file)
#         except Exception as e:
#             st.error(f"CSV parh nahi saka: {e}")
#             st.stop()

#         missing_cols = [c for c in FEATURES if c not in df.columns]
#         if missing_cols:
#             st.error("In columns ki kami hai: " + ", ".join(missing_cols))
#         elif df.empty:
#             st.error("CSV khali hai.")
#         else:
#             X = df[FEATURES].apply(pd.to_numeric, errors="coerce")
#             n_filled = int(X.isna().sum().sum())
#             if n_filled:
#                 st.warning(
#                     f"{n_filled} missing/ghalat values training data ke average se bhari gayi hain."
#                 )
#             X = X.fillna(pd.Series(MEANS))

#             with st.spinner("Predict ho raha hai..."):
#                 preds = model.predict(X)
#                 probs = potable_probability(model, X)

#             out = df.copy()
#             out["prediction"] = pd.Series(preds, index=df.index).map(LABELS)
#             out["potable_prob"] = probs.round(3)

#             n_pot = int((preds == 1).sum())
#             m1, m2, m3 = st.columns(3)
#             m1.metric("Total rows", len(out))
#             m2.metric("Potable", n_pot)
#             m3.metric("Not potable", len(out) - n_pot)

#             if "Potability" in df.columns:
#                 truth = pd.to_numeric(df["Potability"], errors="coerce")
#                 ok = truth.notna()
#                 if ok.any():
#                     acc = float((preds[ok.to_numpy()] == truth[ok].astype(int).to_numpy()).mean())
#                     st.caption(f"File mein `Potability` column mila: is data par accuracy {acc:.1%}")

#             st.dataframe(out)
#             st.download_button(
#                 "Results download karein (CSV)",
#                 out.to_csv(index=False).encode("utf-8"),
#                 "predictions.csv",
#                 "text/csv",
#             )

# ---------------- Model info ----------------
# with tab3:
#     st.subheader("Feature importance")
#     if hasattr(model, "feature_importances_"):
#         imp = pd.Series(model.feature_importances_, index=FEATURES).sort_values(ascending=False)
#         st.bar_chart(imp)
#     if hasattr(model, "n_estimators"):
#         st.write(f"Trees ki tadaad: **{model.n_estimators}**")
#     st.caption(
#         "Is dataset par features ki importance lagbhag barabar hoti hai, yani koi ek feature "
#         "akela potability ka faisla nahi karta."
#     )