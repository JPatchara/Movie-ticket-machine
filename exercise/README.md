# Technologies:
[ Technology และ Library ต่างๆกับเหตุผลที่เลือกใช้ ]
* ## Libraries:
    * ### React(JavaScript Library)
        - เพราะเกิดมาเพื่อสร้างภาพ(View) จากพื้นฐานแนวความคิดแบบ MVC(Model View Controller)โดยที่มีคุณสมบัติเด่นคือ การสร้าง component สำหรับ front-end และแนวคิดรักษ์โลกอย่าง Reusable เหล่า component 
        - รองรับการเขียนด้วย JSX (JavaScript syntax extension)
        - รองรับ ES6 (JavaScript ที่มีฟีเจอร์มากกว่าเหล่า Ecmascript รุ่นก่อนๆ ซึ่งช่วยให้เราเขียนโค้ดได้ง่ายขึ้น และสวยกว่าเดิมมาก ถ้าเทียบกับเขียน JavaScript แบบเดิมๆ)
        - สามารถ pass ข้่อมูลระหว่าง component ที่ใช้งานได้ผ่านมือซ้าย และมืิอขวาอย่าง state และ props (React Features)
        - มี component lifecycle ในการทำงาน ที่เป็นขั้นเป็นตอนดูดีมีระเบียบ ตามรูปด้านล่างนี้
<br/><br/>
![Image](https://cdn-images-1.medium.com/max/2000/1*QK7cSH3i-OxqrUcXR-eXuQ.png) credit: https://medium.com/pirsquare/%E0%B8%9C%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%88%E0%B8%B2%E0%B8%81-react-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87-fb9dd853f143
* ## JavaScript environment:
    * ### Node.js
        - เป็น JavaScript runtime environment ที่ทำงานได้ดีในส่วนของ Frontend Middleware และมี Package ให้เลือกใช้ในการพัฒนาเยอะแยะเต็มไปหมด แถมยังน่าใช้ และมี Community ผู้ใช้งานและพัฒนาที่แข็งแรง กว้่างขวาง
* ## Hosting service:
    * ### Firebase hosting
        - เพราะเป็น hosting หรือ Host static file service ซี่งเราสามารถทำเว็บง่ายๆด้วย static file อย่าง HTML, JavaScript, CSS เนียบๆขึ้นไปวาง Host ไว้บน Firebase ได้ฟรี **ฟรี!!** ซึ่งตัว hosting นี้ก็รองรับการทำ SPA ได้ หมายความว่าเราสามารถเขียนเว็บของเราด้วย Angular, React, หรือ Vue.js และไปวาง Host ไว้ได้เลยฟรีๆ
        - เนื่องจาก scope งานไม่ใหญ่มาก และ back-end service ก็สามารถใช้ของ Firebase service ต่างๆได้เลยอย่าง real-time database, cloud firestore, firebase storage, etc.
* ## Testing tool:
    * ### Jest
* ## Database(No-SQL):
    * ### Firebase database(Cloud Firestore)
        - ใช้งานง่าย ฟรี และอยู่ในขอบเขตบริการของ Firebase ซี่งใช้งานร่วมกับบริการอื่นๆของ Firebase ได้สะดวก
        - สามารถทำ listener เพื่อ stream ข้อมูลแบบ realtime ได้ 
        - การ query และ รูปแบบของ database structure ที่ดีกว่า real-time database service ของ Firebase database service ด้วยกันซี่ง structure เป็น tree ซี่งต่างจากตัว cloud firestore ที่ query แบบ collection และ document
<br/><br/>[Could Firestore structure]
![Image](https://4.bp.blogspot.com/-djTTPRRjwzw/XFHyXdg_0mI/AAAAAAAADU4/TEDA6qFSKuAvm27lghESOXApm28l1k_RwCLcBGAs/s1600/image8.png) credit: https://stories.sellsuki.co.th/cloud-firestore-%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B8%A7%E0%B8%A3-b471d9b926e3<br/><br/>
![Image](https://i.stack.imgur.com/tGGqa.png) credit: https://stackoverflow.com/questions/49037832/firestore-logical-collection-schema-for-setting-data-per-user
<hr/>

# Architecture Design:
- การออกแบบ Architecture ของตัวโปรแกรมนั้น ออกแบบโดยใช้ ฟีเจอร์ของโปรแกรมเป็นพื้นฐาน ซี่ง Information Architecture มีดังนี้
    
    1. <หน้าต้อนรับ> สามารถแสดงโลโก้ ของผู้ให้บริการ และปุ่มสำหรับ การกดเข้าใช้บริการ
    2. <หน้าหลัก> แสดงรายการภาพยนต์ที่มีทั้งหมด โดยจะมีส่วนของการเลือกแสดงรายการภาพยนต์ ทั้งจากการค้นหาจากชื่อภาพยนต์ และแสดงรายการโดยเรียงจากวันเวลา หรือราคา รวมถึงปุ่มสำหรับกดเลือกซื้อบัตรของภาพยนต์นั้นๆ
    3. <ส่วนซื้อบัตรภาพยนต์> ทำงานหลังจากผู้ใช้งานได้กดเลือกซื้อบัตรของภาพยนต์นั้นๆ โดยจะสามารถแสดงรายละเอียดของภาพยนต์ที่เลือกได้อย่างถูกต้อง, มีส่วนการเลือกจำนวนบัตรที่ต้องการซื้อ และปุ่มสำหรับทั้งกดย้อนกลับเพื่อเลือกภาพยนต์ใหม่ที่หน้าหลัก และปุ่มกดตกลง เพื่อเข้าสู่ขั้นตอนการชำระเงิน
    4. <ส่วนชำระเงิน> แสดงผลรวมของราคาที่ต้องชำระได้อย่างถูกต้อง พร้อมทั้งมีส่วนแสดงจำนวนเงินที่รับมา และปุ่มสำหรับกดยกเลิกการชำระเงิน และปุ่มสำหรับกดเพื่อดำเนินการชำระเงิน
    5. <ส่วนสรุปผลการชำระเงิน> แสดงจำนวน และรูปแบบของเงินทอนจากผลการชำระเงิน รวมทั้งข้อความแสดงความขอบคุณในการใช้บริการ และปุ่มสำหรับกดออกเพื่อใช้บริการใหม่
<hr/>

# Installation:
* ### Project local installation:
    1. ทำการสร้าง directory สำหรับ project
    2. ใช้คำสั่ง git clone ใน Terminal(Mac User) หรือ cmd(Window user) ตามด้วย git url ของ project 
    ```
    git clone https://github.com/JPatchara/Movie-ticket-machine.git
    ```
    3. สำหรับคนที่ลง NodeJS ไว้ในเครื่องแล้ว สามารถ cd เข้าไปใน project directory แล้วทำการลง library ต่างๆที่ถูกเซ็ตไว้ได้โดยการ
    ```
    npm install
    ```
* ### Firebase installation:
    - หากยังไม่มี account หรือยังไม่ได้ทำการ login firebase สามารถจัดการก่อนได้เลยที่
    ```
    https://firebase.google.com
    ```
    - หลังจาก login firebase แล้วก็เข้าที่ Go to console ได้เลย
    <br/><br/>
![Image](https://cdn-images-1.medium.com/max/800/1*bz8kinZAKPL89ttoPysqbA.png)

    - ต้องการสร้าง project สามารถทำตามในนี้ได้เลย
    ```
    https://medium.com/jed-ng/firebase-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B8%A1%E0%B8%B2%E0%B8%94%E0%B8%B9%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-project-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A-firebase-d48bfac67b14
    ```

    - ต้องการใช้งาน Cloud Firestore ก็จัดไปแบบละเอียดๆกับ
    ```
    https://medium.com/firebasethailand/%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A-firebase-cloud-firestore-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%88%E0%B8%B2%E0%B8%81-firebase-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1-d001e43e2be7
    ```
    - จากนั้นก็มาติดตั้ง firebase ใน project ของเราโดยเริ่มจากการ
    ```
    npm install -g firebase-tools
    ```
    - ตามมาด้วย
    ```
    firebase login //เพื่อทำการเข้าใช้งาน firebase
    firebase init //เริ่มต้นลง firebase service ใน project ของเรา
    ```
    สามารถศึกษารายละเอียดเพิ่มเติมได้ที่: https://firebase.google.com/docs/cli/

    - หลังจาก firebase init แล้วคุณก็จะพบกับ
    ![Image](https://nrempel.com/img/0003-using-firebase-cli-tools-to-deploy-a-web-application/step_1.png)
    ต้องการใช้งานอะไรก็เลือกได้ตามใจชอบเลย
    <br/>ต้องการใช้งาน hosting service สามารถเรียกใช้งานตามนี้ได้เลย
    <br/>https://devahoy.com/posts/how-to-deploy-react-app-with-firebase-hosting/
<hr/>

# Deployment:
*   Deploy ขึ้นไปยัง Firebase Hosting ผ่านการรันคำสั่ง build ตัว project ภายใน src directory ไปเก็บไว้ใน build directory แล้วจึงรันคำสั่ง firebase deploy เพื่ออัพโหลด static files ที่ build มาไปยัง hosting ตามที่ได้ตั้งค่าเอาไว้ ซี่งเมื่อ deploy สำเร็จก็จะได้ URL ที่มี URL path ตามที่ได้เซ็ตไว้ตอน firebase init แล้ว install ตัว hosting กลับมา

<br/>  >>  The project URL: https://movieticketmachine-patchara.firebaseapp.com/

<hr/>