/*
=========================================================================================================================================
=========================================================================================================================================

Sorted Sets : Ordered Lists (بدون تکرار) و Sets هستند که ترکیبی از ویژگی‌های  یکی از انواع داده‌ای   Sorted Sets  مجموعه‌های مرتب‌شده یا Redis

دارای یک کلید منحصربه‌فرد  Sorted Set مرتب‌شده بر اساس مقدار  را ارائه می‌دهند. هر عنصر در یک  

است امتیاز عددی تعیین‌کننده ترتیب عناصر در مجموعه است (Score)  و یک امتیاز عددی (Member) 

=========================================================================================================================================

ویژگی‌های اصلی

1 - باید منحصربه‌فرد باشد Sorted Set  در (Member) بدون تکرار بودن : هر عضو

2 - مرتب می‌شوند. مقادیر کمتر در ابتدای مجموعه قرار می‌گیرند  (Score)  ترتیب براساس امتیاز: عناصر بر اساس مقدار عددی

3 - کاربردهای متنوع : مناسب برای رتبه‌بندی‌ها، امتیازدهی‌ها، یا اولویت‌بندی‌ها

=========================================================================================================================================

Sorted Sets دستورات مهم در   :

1. ZADD

مشخص شود Score برای افزودن اعضا به مجموعه مرتب‌شده استفاده می‌شود. هر عضو باید با یک مقدار امتیاز 

ZADD mySortedSet 10 "Ali" 20 "Sara" 15 "Reza"

خروجی: مجموعه‌ای با اعضای Ali (امتیاز 10)، Reza (امتیاز 15)، و Sara (امتیاز 20).

=========================================================================================================================================

2. ZRANGE

برای بازیابی اعضای مجموعه بر اساس ترتیب امتیاز

ZRANGE mySortedSet 0 -1

خروجی: ["Ali", "Reza", "Sara"]

=========================================================================================================================================

3. ZREVRANGE

برای بازیابی اعضا بر اساس ترتیب معکوس امتیاز

ZREVRANGE mySortedSet 0 -1

خروجی: ["Sara", "Reza", "Ali"]

=========================================================================================================================================

4. ZSCORE

برای مشاهده امتیاز  یک عضو خاص.

ZSCORE mySortedSet "Ali"  //  10

=========================================================================================================================================

5. ZRANK و ZREVRANK

برای مشاهده رتبه یک عضو در مجموعه

ZRANK: رتبه بر اساس ترتیب صعودی

ZREVRANK: رتبه بر اساس ترتیب نزولی

ZRANK mySortedSet "Reza"

ZREVRANK mySortedSet "Reza"
 
خروجی  :  ZRANK: 1   //    ZREVRANK: 1

=========================================================================================================================================

6. ZREM

برای حذف یک یا چند عضو از مجموعه

ZREM mySortedSet "Ali"

خروجی: Ali از مجموعه حذف می‌شود.

=========================================================================================================================================

7. ZCOUNT

برای شمارش اعضا با امتیازهایی در بازه مشخص.

ZCOUNT mySortedSet 10 20

خروجی: 3 (چرا که هر سه عضو امتیازی در این بازه دارند)

=========================================================================================================================================

8. ZRANGEBYSCORE

برای بازیابی اعضا بر اساس بازه امتیاز.

ZRANGEBYSCORE mySortedSet 10 15

خروجی: ["Ali", "Reza"]

=========================================================================================================================================

9. ZINTERSTORE و ZUNIONSTORE

Sorted Set برای انجام عملیات ریاضی (اشتراک یا اجتماع) بر روی چند 

ZINTERSTORE: برای محاسبه اشتراک

ZUNIONSTORE: برای محاسبه اجتماع

ZINTERSTORE resultSet 2 set1 set2

خروجی: مجموعه‌ای حاوی اشتراک set1 و set2

=========================================================================================================================================
=========================================================================================================================================
*/