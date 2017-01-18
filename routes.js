<!-- Product skeleton-->
    <!--Product Image-->
    <!--Product Image click collapse the image-->
    <a class="product-grid__product" >
        <img ng-src='{{product.image}}' ng-show='showImage' class="product-grid__img"   sizes="(min-width: 960px) 33vw, (min-width: 769px) 50vw, 100vw" alt="">
    </a>
    <a class="product-grid__product" ng-click='showImage = !showImage' ng-hide='showImage'>
        show image
    </a>

    <!--Product Meta-->
    <div class="product-grid__meta">
        <!--Title click Should redirect to the product-details section. remember to pass along the product id so you can make an api call
    to get the specific product details-->
        <h3 class="product-grid__name"><a><!--Title-->{{product.title}}</a></h3>

        <!--Product Description-->
        <h4 class="product-grid__sub"><!--Desc-->{{product.desc}}</h4>

        <!--Product Price-->
        <div class="product-grid__price"><!--Price-->{{product.price}}</div>
    </div>
<!--End product Skeleton -->
