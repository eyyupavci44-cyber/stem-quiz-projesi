from flask import Flask, send_from_directory
import os
import webbrowser
from threading import Timer

# Initialize Flask app
# We set static_folder to the current directory to serve CSS and JS files directly
app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    """Serve the main HTML file."""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve any other static files (CSS, JS, Images)."""
    if os.path.exists(path):
        return send_from_directory('.', path)
    return "File not found", 404

def open_browser():
    """Open the browser automatically after a short delay."""
    webbrowser.open_new("http://127.0.0.1:5000")

if __name__ == '__main__':
    print("STEM Quiz Sunucusu Başlatılıyor...")
    print("Tarayıcınız otomatik olarak açılacak.")
    print("Durdurmak için CTRL+C tuşlarına basın.")
    
    # Schedule browser to open after 1.5 seconds
    Timer(1.5, open_browser).start()
    
    # Run the app
    app.run(debug=True, port=5000)
