import json

from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
import sklearn

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))


class NumpyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


@app.route("/predict", methods=['POST'])
def predict():  # put application's code here
    x = request.json
    print(x)
    prediction = model.predict(x)
    prediction_json = json.dumps(prediction, cls=NumpyEncoder)
    return jsonify({'Prediction': prediction_json})


if __name__ == '__main__':
    app.run(debug=True)
