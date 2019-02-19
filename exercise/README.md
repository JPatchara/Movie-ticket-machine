# Technologies:
[ Technology และ Library ต่างๆกับเหตุผลที่เลือกใช้ ]
* ## Libraries:
    * ### React(JavaScript Library)
        - เพราะเกิดมาเพื่อสร้างภาพ(View) จากพื้นฐานแนวความคิดแบบ MVC(Model View Controller)โดยที่มีคุณสมบัติเด่นคือ การสร้่าง component สำหรับ front-end และแนวคิดรักษ์โลกอย่าง Reusable เหล่า component 
        - รองรับการเขียนด้วย JSX (JavaScript syntax extension)
        - รองรับ ES6 (JavaScript ที่มีฟีเจอร์มากกว่าเหล่า Ecmascript รุ่นก่อนๆ ซึ่งช่วยให้เราเขียนโค้ดได้ง่ายขึ้น และสวยกว่าเดิมมาก ถ้าเทียบกับเขียน JavaScript แบบเดิมๆ)
        - สามารถ pass ข้่อมูลระหว่าง component ที่ใช้งานได้ผ่านมือซ้าย และมืิอขวาอย่าง state และ props (React Features)
        - มี component lifecycle ในการทำงาน ที่เป็นขั้นเป็นตอนดูดีมีระเบียบ ตามรูปด้านล่างนี้
<br/><br/>

![Image](https://cdn-images-1.medium.com/max/2000/1*QK7cSH3i-OxqrUcXR-eXuQ.png)
##### credit: https://medium.com/pirsquare/%E0%B8%9C%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%88%E0%B8%B2%E0%B8%81-react-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87-fb9dd853f143
* ## Hosting service:
    * ### Firebase hosting
        - เพราะเป็น hosting หรือ Host static file service ซี่งเราสามารถทำเว็บง่ายๆด้วย static file อย่าง HTML, JavaScript, CSS เนียบๆขึ้นไปวาง Host ไว้บน Firebase ได้ฟรี **ฟรี!!** ซึ่งตัว hosting นี้ก็รองรับการทำ SPA ได้ หมายความว่าเราสามารถเขียนเว็บของเราด้วย Angular, React, หรือ Vue.js และไปวาง Host ไว้ได้เลยฟรีๆ
        - เนื่องจาก scope งานไม่ใหญ่มาก และ back-end service ก็สามารถใช้ของ Firebase service ต่างๆได้เลยอย่าง real-time database, cloud firestore, firebase storage, etc.
* ## Testing tool:
    * ### Jest
* ## Database(No-SQL):
    * ### Firebase database(Cloud Firestore)
        - ใช้งานง่าย ฟรี และอยู่ในขอบเขตบริการของ Firebase ซี่งใช้งานร่วมกับบริการอื่นๆของ Firebase ได้สะดวก
        - การ query และ รูปแบบของ database structure ที่ดีกว่า real-time database service ของ Firebase database service ด้วยกันซี่ง structure เป็น tree ซี่งต่างจากตัว cloud firestore ที่ query แบบ collection และ document

Could Firestore structure
![Image](https://4.bp.blogspot.com/-djTTPRRjwzw/XFHyXdg_0mI/AAAAAAAADU4/TEDA6qFSKuAvm27lghESOXApm28l1k_RwCLcBGAs/s1600/image8.png)
##### credit: https://stories.sellsuki.co.th/cloud-firestore-%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%A3-b471d9b926e3

![Image](https://i.stack.imgur.com/tGGqa.png)
##### credit: https://stackoverflow.com/questions/49037832/firestore-logical-collection-schema-for-setting-data-per-user
<hr/>

# Architecture Design:

<hr/>

# Installation:
- Project local installation:
- Firebase installation:

<hr/>

# Deployment:
*   Deploy ขึ้นไปยัง Firebase Hosting ผ่านการรันคำสั่ง build ตัว project ภายใน src directory ไปเก็บไว้ใน build directory แล้วจึงรันคำสั่ง firebase deploy เพื่ออัพโหลด static files ที่ build มาไปยัง hosting ตามที่ได้ตั้งค่าเอาไว้ ซี่งเมื่อ deploy สำเร็จก็จะได้ URL ที่มี URL path ตามที่ได้เซ็ตไว้ตอน firebase init แล้ว install ตัว hosting กลับมา

<br/>  >  The project URL: https://movieticketmachine-patchara.firebaseapp.com/

<hr/>