        document.body.setAttribute('class','js');
        var draw = SVG('canvas');
        var image = draw.image('https://graph.facebook.com/peterhhudson/picture?width=100&height=100',100,100);
        var circle = draw.circle(100).center(50,50);
        image.clipWith(circle);


