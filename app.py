from flask import Flask

# インスタンス化
app = Flask(__name__)

# トップページルートを設定
@app.route("/")
def home():
    return "Helllo!,Flask!"

if __name__ == "__main__":
    app.run(debug=True)