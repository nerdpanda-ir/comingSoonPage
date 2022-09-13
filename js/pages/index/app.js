import TypeJs from '../../libs/type/typeJs.js'
function loader()
{
    let options,type ;
        options =
        {
            string : ' TITLE '
            ,
            place : '#title'
            ,
            speed : 100
        };
         type = new TypeJs(options);
     options =
        {
            string :'وب سایت ما در حال ساخت است'
            ,
            place : '#caption'
            ,
            speed : 100
        };
     window.setTimeout(function () {
         type = new TypeJs(options);
     },2000)
     particlesJS.load('particles-js', 'js/libs/particle/particles.json', function() {});
}
window.addEventListener('load',loader);