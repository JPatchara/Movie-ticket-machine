# Technologies:
[ Technology และ Library ต่างๆกับเหตุผลที่เลือกใช้ ]
* ## Libraries:
    * ### React(JavaScript Library)
    <pre>
        - เพราะเกิดมาเพื่อสร้างภาพ(View) จากพื้นฐานแนวความคิดแบบ MVC(Model View Controller) โดยที่มีคุณสมบัติเด่นคือ การสร้่าง component สำหรับ front-end และแนวคิดรักษ์โลกอย่าง Reusable เหล่า component 
        - รองรับการเขียนด้วย JSX (JavaScript syntax extension)
        - รองรับ ES6 (JavaScript ที่มีฟีเจอร์มากกว่าเหล่า Ecmascript รุ่นก่อนๆ ซึ่งช่วยให้เราเขียนโค้ดได้ง่ายขึ้น และสวยกว่าเดิมมาก ถ้าเทียบกับเขียน JavaScript แบบเดิมๆ)
        - สามารถ pass ข้่อมูลระหว่าง component ที่ใช้งานได้ผ่านมือซ้าย และมืิอขวาอย่าง state และ props (React Features)
        - มี component lifecycle ในการทำงาน ที่เป็นขั้นเป็นตอนดูดีมีระเบียบ ตามรูปด้านล่างนี้
    </pre>
    ![Image](https://cdn-images-1.medium.com/max/2000/1*QK7cSH3i-OxqrUcXR-eXuQ.png)
* ## Hosting service:
    * ### Firebase hosting
    <pre>
    - เพราะเป็น hosting หรือ Host static file service ซี่งเราสามารถทำเว็บง่ายๆด้วย static file อย่าง HTML, JavaScript, CSS เนียบๆขึ้นไปวาง Host ไว้บน Firebase ได้ฟรี **ฟรี!!** ซึ่งตัว hosting นี้ก็รองรับการทำ SPA ได้ หมายความว่าเราสามารถเขียนเว็บของเราด้วย Angular, React, หรือ Vue.js และไปวาง Host ไว้ได้เลยฟรีๆ
    - เนื่องจาก scope งานไม่ใหญ่มาก และ back-end service ก็สามารถใช้ของ Firebase service ต่างๆได้เลยอย่าง real-time database, cloud firestore, firebase storage, etc.
    </pre>
* ## Testing tool:
    * ### Jest
* ## Database(No-SQL):
    * ### Firebase database(Cloud Firestore)

<hr/>

# Architecture Design:

<hr/>

# Installation:

<hr/>

# Deployment:
#### <pre>  Deploy ขึ้นไปยัง Firebase Hosting ผ่านการรันคำสั่ง build ตัว project ภายใน src directory ไปเก็บไว้ใน build directory แล้วจึงรันคำสั่ง firebase deploy เพื่ออัพโหลด static files ที่ build มาไปยัง hosting ตามที่ได้ตั้งค่าเอาไว้ ซี่งเมื่อ deploy สำเร็จก็จะได้ URL ที่มี URL path ตามที่ได้เซ็ตไว้ตอน firebase init แล้ว install ตัว hosting กลับมา<br/><br/>  >  The project URL: https://movieticketmachine-patchara.firebaseapp.com/
</pre>
<hr/>