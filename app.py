from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'crud_example'


mysql = MySQL(app)


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', users=data)


@app.route("/add", methods=['POST'])
def add_user():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
        mysql.connection.commit()
        cur.close()
        
        return redirect(url_for('index'))
    
    
@app.route("/edit/<int:id>", methods=['POST', "GET"])
def edit_user(id):
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("UPDATE users SET name = %s, email = %s WHERE id = %s", (name, email, id))
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('index'))
    else:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE id = %s", (id, ))
        data = cur.fetchone()
        cur.close()
        return render_template('edit.html', user=data)
        
        
@app.route("/delete/<int:id>")
def delete_user(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM users WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return redirect(url_for('index'))


@app.route('/search', methods=['GET'])
def search():
    search_term = request.args.get('q', '')  # 'q' es el parámetro de búsqueda
    cur = mysql.connection.cursor()
    
    if search_term:
        # Búsqueda en nombre y email, usando LIKE para coincidencias parciales
        cur.execute("""
            SELECT * FROM users 
            WHERE name LIKE %s OR email LIKE %s
            """, (f'%{search_term}%', f'%{search_term}%'))
    else:
        # Si no hay término de búsqueda, mostrar todos
        cur.execute("SELECT * FROM users")
        
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', users=data, search_term=search_term)


if __name__ == "__main__":
    app.run(debug=True)

