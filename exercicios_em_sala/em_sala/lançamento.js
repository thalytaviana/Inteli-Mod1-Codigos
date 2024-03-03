function myFunction (y, v, t){
    g= 9.8
    var fracao = ((v ** 2)/ (2 * g));
    var parenteses = (1 + Math.sqrt(1 + (2 * g* y) / ((v ** 2) * (Math.sin(t) ** 2))));
    var seno = Math.sin (2 * t);
    d = fracao * parenteses * seno;
}

myFunction (1, Math.sqrt(9.8), (Math.PI / 6));
console.log (d);