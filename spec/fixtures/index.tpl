<!DOCTYPE html>
<html lang="fr">

<head>
    <title></title>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <!-- styles -->
</head>

<body>
    <div class="before-body">
        <!--[if lt IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    </div>
    <div class="">
        <h1>local {{./and}}</h1>
        <h2>global {{@root.and}}</h2>
        <ul>
        {{#repeat 4}}
            <li>
                <a href="">Index {{@index}} | count: {{count}} of {{of}}</a>
                {{#repeat 2}}
                <span>{{@index}}/{{@../index}}</span>
                {{/repeat}}
            </li>
        {{/repeat}}
        </ul>
    </div>
    <div class="after-body"></div>
</body>

</html>
