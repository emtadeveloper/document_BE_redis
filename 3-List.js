/*
=========================================================================================================================================
=========================================================================================================================================

استفاده بکنیم List  برای ذخیره داده هایی که ماهیتی از نوع آرایه دارند ما میتونیم در داخل ردیس از نوع داده ای 

استفاده میکنیم LPUSH برای استفاده از این نوع داده ای از 

EXAMPLE LPUSH ==========================================================================================================================
 
LPISH  courses "nest"  "php"   "nodejs"  "wordpress"

دستورات پایین اگر لیست اای نداشته باشیم میاد و برامون می سازد

LPISH   به اول لیست امون اضافه میکند 

RPUSH   به آخر لیست امون میاد و اضافه میکند  

=========================================================================================================================================

حالا برای این که بتونیم مقادیر ایتم های لیست امون استفاده بکنیم از دستور  زیر استفاده میکنیم

LRANGE  key  start stop  

EXAMPLE LRANGE =========================================================================================================================

LRANGE  courses  0  2

LRANGE  courses  0  -1   //  به این شکل یعنی بیا هرچی آیتم در این لیست داریم رو برام برگردون

=========================================================================================================================================

LLEN  key   این دستور به ما طول لیستی که درست کردیم رو می دهد

=========================================================================================================================================
=========================================================================================================================================
*/