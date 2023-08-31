from django.shortcuts import render, HttpResponse

html_base = """
    <h1>Mi web Personal</h1>
    <ul>
        <li><a href="/">Portada</a></li>
        <li><a href="/about-me/">Acerca de</a></li>
        <li><a href="/portafolio/">portafolio</a></li>
        <li><a href="/contacto/">contacto</a></li>
    </ul>
"""

# Create your views here.
def home(request):
    # html_response = "<h1>Hello world</h1>"
    # for i in range(10):
    #     html_response += "<h2>Portada</h2>"
    # return HttpResponse(html_response)
    return render(request, "core/home.html", )
def about(request):
    return HttpResponse(html_base + """
        <h2>Acerca de</h2>
        <p>Me llamo Sonia y soy Administradora</p>
    """)


def portafolio(request):
    return HttpResponse(html_base + """
        <h2>Portafolio</h2>
        <p>Estos son los proyectos en los que he trabajado</p>
    """)

def contacto(request):
    return HttpResponse(html_base + """
        <h2>Contacto</h2>
        <p>cel, email, linkedin</p>
    """)
