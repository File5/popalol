from django.shortcuts import render

def index(request):
    text = "Test text"
    context = {
        "rows": range(120),
        "cols": range(60),
        "text": text,
        "shorttext": text[len(text) // 3:],
    }
    return render(request, 'notice/index.html', context=context)
