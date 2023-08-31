from django.shortcuts import render, HttpResponse

html_base = """
    <h1>Mi web Personal</h1>
    <ul>
        <li><a href="/">Portada</a></li>
        <li><a href="/about-me/">Acerca de</a></li>
    </ul>
"""

# Create your views here.
def home(request):
    # html_response = "<h1>Hello world</h1>"
    # for i in range(10):
    #     html_response += "<h2>Portada</h2>"
    # return HttpResponse(html_response)
    return HttpResponse(html_base + """
        <h2>Portada</h2>
        <p>esto es la portada</p>
     """)

def about(request):
    return HttpResponse(html_base + """
        <h2>Acerca de</h2>
        <p>Me llamo Sonia y soy Administradora</p>
    """)
