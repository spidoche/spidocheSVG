#SpidocheSVG - jQuery inline svg loader

## What?
SpidocheSVG include your svg file right on your html.

DEMO : http://spidoche.com/spidocheSVG/

## Why?
It's keep your code clean and don't break your site on browser that do not support svg (ie8 old android).

## How?
Add the required script.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/js/spidocheSVG.min.js"></script>

```

Add the svg url you want to load on a container using the "data-svg" attribute.
Place your optional fallback inside the container.
```
<span class="logo" data-svg="images/carotte.svg">
    <img src="images/carotte.png" title="image fallback if svg is no support"/>
</span>
```

Additionaly is inline svg is not support spidocheSVG.js will add an helper class "no-svg" on the body tag of the page
