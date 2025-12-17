
import { CourseModule, ReferenceMaterial, Challenge, Achievement, DictionaryTerm } from './types';

export const courseData: CourseModule[] = [
  {
    id: "module-1",
    title: "المفاهيم الأساسية وإنشاء الهيكلية (SQL Basics & DDL)",
    lessons: [
      {
        id: "sql-intro",
        title: "مقدمة SQL وأنواع البيانات",
        description: "شرح أوامر SQL الخمسة (DQL, DDL, DML, DCL, TCL) وأنواع البيانات الرقمية والنصية.",
        durationMinutes: 25,
        sections: [
          {
            title: "ما هي أوامر SQL؟",
            content: "أوامر SQL هي تعليمات للتواصل مع قاعدة البيانات لأداء مهام محددة. تنقسم إلى 5 أنواع:\n\n1. **DQL (Data Query Language)**: لاسترجاع البيانات. الأمر: `SELECT`.\n2. **DDL (Data Definition Language)**: لتعريف الهيكل. الأوامر: `CREATE`, `DROP`, `ALTER`, `TRUNCATE`.\n3. **DML (Data Manipulation Language)**: لمعالجة البيانات. الأوامر: `INSERT`, `UPDATE`, `DELETE`.\n4. **DCL (Data Control Language)**: للتحكم بالصلاحيات. الأوامر: `GRANT`, `REVOKE`.\n5. **TCL (Transaction Control Language)**: للتحكم بالعمليات. الأوامر: `COMMIT`, `ROLLBACK`, `SAVEPOINT`."
          },
          {
            title: "أنواع البيانات الرقمية (Numeric Data Types)",
            content: "تستخدم لتخزين الأرقام:\n- **Exact Numeric (دقيقة):**\n  - `int`, `smallint`, `tinyint`, `bigint`: أعداد صحيحة بأحجام مختلفة.\n  - `decimal(p,s)` و `numeric`: أرقام عشرية بدقة ثابتة (Fixed precision).\n  - `money`: للعملات.\n  - `bit`: يخزن 0 أو 1 (True/False).\n\n- **Approximate Numeric (تقريبية):**\n  - `float`: رقم عشري بدقة عائمة.\n  - `real`: رقم عشري دقيق."
          },
          {
            title: "أنواع البيانات النصية والأخرى",
            content: "- **النصوص:**\n  - `char(n)`: نص بطول ثابت.\n  - `varchar(n)`: نص بطول متغير (يوفر المساحة).\n  - `text`: نصوص طويلة جداً.\n\n- **أخرى:**\n  - `datetime`: التاريخ والوقت.\n  - `image`: لتخزين ملفات الصور (Binary).\n  - `xml`: لتخزين بيانات بتنسيق XML.\n  - `timestamp`: رقم فريد يتم تحديثه تلقائياً عند تعديل الصف."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "أي فئة من الأوامر تحتوي على INSERT و UPDATE و DELETE؟",
            options: ["DDL", "DML", "DCL", "TCL"],
            correctAnswer: 1,
            explanation: "DML (Data Manipulation Language) هي المسؤولة عن معالجة وتغيير البيانات."
          },
          {
            id: 2,
            question: "لتخزين القيمة المنطقية (0 أو 1)، ما هو نوع البيانات الأنسب؟",
            options: ["int", "bit", "money", "float"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "ما الفرق الجوهري بين CHAR و VARCHAR؟",
            options: ["CHAR للأرقام فقط", "VARCHAR طوله ثابت دائماً", "CHAR طوله ثابت و VARCHAR طوله متغير", "لا يوجد فرق"],
            correctAnswer: 2
          },
          {
            id: 4,
            question: "الأمر GRANT يندرج تحت أي نوع من أوامر SQL؟",
            options: ["DQL", "DML", "DCL", "DDL"],
            correctAnswer: 2
          },
          {
            id: 5,
            question: "نوع البيانات decimal يعتبر:",
            options: ["Approximate Numeric (تقريبي)", "Exact Numeric (دقيق)", "Character String", "Binary"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "ما هو الاختصار الصحيح لـ DDL؟",
            options: ["Data Distribution Language", "Data Definition Language", "Daily Data Log", "Dynamic Data Library"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "لتخزين النصوص الطويلة جداً التي تتجاوز 8000 حرف، أي نوع بيانات نستخدم؟",
            options: ["char", "varchar(255)", "text أو varchar(max)", "tinyint"],
            correctAnswer: 2
          },
          {
            id: 8,
            question: "الأمر COMMIT يستخدم لـ:",
            options: ["حذف جدول", "حفظ التغييرات في المعاملة (Transaction) بشكل دائم", "استرجاع البيانات", "منح صلاحيات"],
            correctAnswer: 1
          },
          {
            id: 9,
            question: "ماذا يعني الاختصار DQL؟",
            options: ["Data Query Language", "Data Quality Language", "Dynamic Query Logic", "Direct Question Link"],
            correctAnswer: 0
          },
          {
            id: 10,
            question: "أي أمر من التالي لا يعتبر من أوامر DDL؟",
            options: ["CREATE", "ALTER", "SELECT", "TRUNCATE"],
            correctAnswer: 2
          },
          {
            id: 11,
            question: "نوع البيانات المناسب لتخزين تاريخ الميلاد هو:",
            options: ["varchar", "int", "datetime", "money"],
            correctAnswer: 2
          },
          {
            id: 12,
            question: "لتخزين صورة داخل قاعدة البيانات (SQL Server القديم)، النوع المستخدم هو:",
            options: ["image", "photo", "picture", "binary_blob"],
            correctAnswer: 0
          },
          {
            id: 13,
            question: "ما هو الفرق الرئيسي بين varchar و nvarchar؟",
            options: ["nvarchar يدعم اللغات العالمية (Unicode) ويأخذ ضعف المساحة", "varchar هو الأحدث والأسرع", "لا يوجد فرق سوى في الاسم", "nvarchar يستخدم للأرقام فقط"],
            correctAnswer: 0
          },
          {
            id: 14,
            question: "الأمر SAVEPOINT في TCL يستخدم لـ:",
            options: ["حفظ قاعدة البيانات بالكامل", "تحديد نقطة داخل المعاملة (Transaction) يمكن الرجوع إليها دون إلغاء كل شيء", "إنشاء نسخة احتياطية", "حفظ ملف نصي"],
            correctAnswer: 1
          },
          {
            id: 15,
            question: "أي نوع بيانات هو الأنسب لتخزين العملات بدقة عالية لمنع أخطاء التقريب؟",
            options: ["float", "real", "money أو decimal", "int"],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "db-table-ops",
        title: "إدارة قواعد البيانات والجداول",
        description: "إنشاء وحذف قواعد البيانات، وإنشاء الجداول (CREATE TABLE) مع المفاتيح الأساسية.",
        durationMinutes: 30,
        sections: [
          {
            title: "إدارة قاعدة البيانات (Database Operations)",
            content: "**إنشاء قاعدة بيانات:**\n`CREATE DATABASE db_name;`\nمثال: `CREATE DATABASE myDatabase;`\n\n**استخدام قاعدة البيانات:**\n`USE DATABASE db_name;`\n\n**حذف قاعدة بيانات:**\n`DROP DATABASE [dbo].[Employees];`\n(يحذف القاعدة بالكامل مع جميع محتوياتها)."
          },
          {
            title: "إنشاء الجداول (CREATE TABLE)",
            content: "الصيغة العامة:\n```sql\nCREATE TABLE tableName(\n  column1 datatype,\n  column2 datatype,\n  ...\n  PRIMARY KEY( column_name )\n);\n```\n\nمثال إنشاء جدول العملاء:\n```sql\nCREATE TABLE CUSTOMERS (\n   ID INT,\n   NAME varchar(20),\n   AGE INT,\n   ADDRESS char(20),\n   SALARY DECIMAL(18,2),\n   PRIMARY KEY(ID)\n);\n```"
          },
          {
            title: "التحقق والحذف (DESC & DROP)",
            content: "- للتحقق من هيكل الجدول: `DESC CUSTOMERS;` أو `EXEC sp_help CUSTOMERS;`.\n- لحذف الجدول نهائياً: `DROP TABLE CUSTOMERS;` (يحذف التعريف والبيانات والفهارس)."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "ما الأمر الذي يقوم بحذف الجدول وتعريفه وبياناته نهائياً؟",
            options: ["DELETE TABLE", "TRUNCATE TABLE", "DROP TABLE", "REMOVE TABLE"],
            correctAnswer: 2
          },
          {
            id: 2,
            question: "عند إنشاء جدول، ماذا يمثل PRIMARY KEY؟",
            options: ["عمود يقبل التكرار", "عمود يحدد الصف بشكل فريد", "عمود للبيانات النصية", "عمود اختياري"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "للانتقال للعمل داخل قاعدة بيانات محددة نستخدم:",
            options: ["SELECT DATABASE", "USE DATABASE", "OPEN DATABASE", "GET DATABASE"],
            correctAnswer: 1
          },
          {
            id: 4,
            question: "ما الأمر المستخدم لعرض تفاصيل هيكل الجدول (Metadata) في SQL Server؟",
            options: ["SHOW TABLE", "DESCRIBE", "EXEC sp_help", "INFO TABLE"],
            correctAnswer: 2
          },
          {
            id: 5,
            question: "في جملة CREATE TABLE، يجب تحديد ___ لكل عمود.",
            options: ["الاسم ونوع البيانات", "الاسم فقط", "القيمة الافتراضية", "العنوان"],
            correctAnswer: 0
          },
          {
            id: 6,
            question: "هل يمكن أن يحتوي الجدول على أكثر من مفتاح أساسي (PRIMARY KEY)؟",
            options: ["نعم، يمكن تعدد المفاتيح", "لا، مفتاح أساسي واحد فقط للجدول", "نعم، بشرط أن تكون أرقاماً", "لا، المفتاح الأساسي اختياري ولا فائدة منه"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "ماذا يحدث إذا حاولت إنشاء قاعدة بيانات باسم موجود مسبقاً؟",
            options: ["يتم استبدال القديمة", "يتم دمج القواعد", "يظهر خطأ يمنع الإنشاء", "يتم إنشاء نسخة جديدة برقم"],
            correctAnswer: 2
          },
          {
            id: 8,
            question: "لتعديل هيكل جدول موجود (مثلاً إضافة عمود)، نستخدم الأمر:",
            options: ["UPDATE TABLE", "CHANGE TABLE", "ALTER TABLE", "EDIT TABLE"],
            correctAnswer: 2
          },
          {
            id: 9,
            question: "ما الفرق بين DROP و TRUNCATE؟",
            options: ["TRUNCATE تحذف الهيكل و DROP تحذف البيانات", "DROP تحذف الهيكل والبيانات، TRUNCATE تحذف البيانات فقط وتحتفظ بالهيكل", "لا فرق بينهما", "TRUNCATE أبطأ من DROP"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "في SQL Server، لإنشاء جدول جديد نستخدم الأمر:",
            options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
            correctAnswer: 1
          },
          {
            id: 11,
            question: "عند حذف قاعدة بيانات باستخدام DROP DATABASE، هل يمكن استعادتها بدون نسخ احتياطي؟",
            options: ["نعم من سلة المحذوفات", "لا، الحذف نهائي", "نعم باستخدام أمر UNDO", "فقط إذا كانت صغيرة"],
            correctAnswer: 1
          },
          {
            id: 12,
            question: "المفتاح الأساسي (PK) يمنع:",
            options: ["الأرقام السالبة", "القيم المكررة والقيم الفارغة (NULL)", "النصوص", "التعديل"],
            correctAnswer: 1
          },
          {
            id: 13,
            question: "في جملة `[dbo].[Table]`، ماذا يمثل `dbo`؟",
            options: ["اسم قاعدة البيانات", "المخطط (Schema) الافتراضي", "اسم السيرفر", "اسم الملف"],
            correctAnswer: 1
          },
          {
            id: 14,
            question: "هل يسمح بتسمية جدول يبدأ برقم، مثل `1Table`؟",
            options: ["نعم دائماً", "لا، إلا إذا وضع الاسم بين أقواس [] أو علامات اقتباس", "نعم، بشرط أن يكون الجدول فارغاً", "لا مطلقاً"],
            correctAnswer: 1
          },
          {
            id: 15,
            question: "قاعدة البيانات `tempdb` هي قاعدة بيانات نظام تستخدم لـ:",
            options: ["تخزين النسخ الاحتياطي", "تخزين الكائنات والبيانات المؤقتة وإعادة بنائها عند كل تشغيل", "حفظ كلمات المرور", "إدارة المستخدمين"],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "معالجة واستعلام البيانات (DML & Basic Querying)",
    lessons: [
      {
        id: "dml-basics",
        title: "إضافة، تعديل، وحذف البيانات",
        description: "أوامر INSERT, UPDATE, DELETE والفرق بين DELETE و TRUNCATE.",
        durationMinutes: 35,
        sections: [
          {
            title: "الإضافة (INSERT INTO)",
            content: "هناك صيغتان:\n1. **تحديد الأعمدة:**\n`INSERT INTO CUSTOMERS (ID, NAME, AGE) VALUES (1, 'Ramesh', 32);`\n\n2. **بدون تحديد الأعمدة** (يجب إرسال قيم لكل الأعمدة بالترتيب):\n`INSERT INTO CUSTOMERS VALUES (2, 'Khilan', 25, 'Delhi', 1500.00);`\n\nيمكن أيضاً تعبئة جدول من جدول آخر:\n`INSERT INTO table1 SELECT * FROM table2;`"
          },
          {
            title: "التعديل (UPDATE)",
            content: "لتعديل البيانات الحالية. **تحذير**: إذا لم تستخدم `WHERE` سيتم تعديل كل الصفوف!\n\nمثال:\n```sql\nUPDATE CUSTOMERS\nSET ADDRESS = 'Pune', SALARY = 1000.00\nWHERE ID = 6;\n```"
          },
          {
            title: "الحذف (DELETE vs TRUNCATE)",
            content: "- **DELETE**: تحذف صفوف محددة (أو كلها) ويمكن التراجع عنها (في Transaction).\n`DELETE FROM CUSTOMERS WHERE ID = 6;`\n\n- **TRUNCATE**: تحذف *جميع* الصفوف بسرعة، تعيد تعيين العداد (Identity)، ولا يمكن التراجع عنها بسهولة.\n`TRUNCATE TABLE CUSTOMERS;`"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "إذا قمت بتنفيذ `UPDATE CUSTOMERS SET AGE=30;` بدون WHERE، ماذا يحدث؟",
            options: ["يظهر خطأ", "يتم تعديل الصف الأول فقط", "يتم تغيير عمر كل العملاء إلى 30", "لا يحدث شيء"],
            correctAnswer: 2
          },
          {
            id: 2,
            question: "أي أمر يستخدم لإفراغ الجدول تماماً من البيانات بأسرع وقت وإعادة تعيين الترقيم؟",
            options: ["DELETE", "DROP", "TRUNCATE", "CLEAR"],
            correctAnswer: 2
          },
          {
            id: 3,
            question: "عند استخدام INSERT بدون ذكر أسماء الأعمدة، ماذا يشترط؟",
            options: ["أن تكون القيم نصية", "أن نرسل القيم بنفس ترتيب تعريف الجدول", "أن نرسل قيمة المفتاح الأساسي فقط", "لا يشترط شيء"],
            correctAnswer: 1
          },
          {
            id: 4,
            question: "لحذف العميل الذي يملك ID رقم 5:",
            options: ["DELETE ID=5 FROM CUSTOMERS", "REMOVE FROM CUSTOMERS WHERE ID=5", "DELETE FROM CUSTOMERS WHERE ID=5", "TRUNCATE CUSTOMERS WHERE ID=5"],
            correctAnswer: 2
          },
          {
            id: 5,
            question: "هل يقوم الأمر `DROP TABLE` بنفس وظيفة `TRUNCATE TABLE`؟",
            options: ["نعم تماماً", "لا، DROP يحذف الجدول نفسه، TRUNCATE يحذف البيانات فقط", "نعم لكن DROP أبطأ", "لا، TRUNCATE يحذف الهيكل"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "هل يمكن استخدام جملة SELECT داخل جملة INSERT؟",
            options: ["لا، غير ممكن", "نعم، لنقل البيانات من جدول لآخر", "فقط إذا كان الجدول فارغاً", "نعم، ولكن للأرقام فقط"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "ماذا يحدث للبيانات عند تنفيذ `DELETE FROM Table` بدون شرط؟",
            options: ["يتم حذف العمود الأول", "يتم حذف الجدول بالكامل من قاعدة البيانات", "يتم حذف جميع السجلات ولكن يبقى هيكل الجدول", "يظهر خطأ"],
            correctAnswer: 2
          },
          {
            id: 8,
            question: "في جملة UPDATE، كيف نحدد العمود الذي نريد تغيير قيمته؟",
            options: ["باستخدام الكلمة المفتاحية SET", "باستخدام الكلمة المفتاحية TO", "باستخدام الكلمة المفتاحية CHANGE", "بكتابة الاسم مباشرة بعد UPDATE"],
            correctAnswer: 0
          },
          {
            id: 9,
            question: "لإدخال بيانات في أعمدة محددة فقط، نستخدم:",
            options: ["INSERT INTO Table VALUES (v1, v2)", "INSERT INTO Table (col1, col2) VALUES (v1, v2)", "ADD TO Table (col1, col2)", "UPDATE Table SET col1=v1"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "هل يمكن التراجع (Rollback) عن عملية DELETE؟",
            options: ["نعم، إذا كانت ضمن Transaction", "لا، الحذف نهائي دائماً", "فقط إذا كانت قاعدة البيانات صغيرة", "نعم، باستخدام زر التراجع في المتصفح"],
            correctAnswer: 0
          },
          {
            id: 11,
            question: "إذا كان العمود Age يقبل NULL، هل يجب ذكره في جملة INSERT؟",
            options: ["نعم دائماً", "لا، يمكن تجاهله وسيأخذ القيمة NULL", "نعم، ولكن نرسل 0", "لا، سيأخذ قيمة عشوائية"],
            correctAnswer: 1
          },
          {
            id: 12,
            question: "الصيغة الصحيحة لتحديث اسم العميل وراتبه معاً:",
            options: ["UPDATE table SET Name='Ali' AND Salary=5000", "UPDATE table SET Name='Ali', Salary=5000", "UPDATE table (Name, Salary) = ('Ali', 5000)", "CHANGE table Name='Ali', Salary=5000"],
            correctAnswer: 1
          },
          {
            id: 13,
            question: "ماذا يفعل خيار `OUTPUT` في جمل DML (INSERT, UPDATE, DELETE)؟",
            options: ["يعرض رسالة خطأ", "يخرج من البرنامج", "يعيد البيانات التي تم التأثير عليها (مثل ID المضاف)", "يطبع الصفحة"],
            correctAnswer: 2
          },
          {
            id: 14,
            question: "عند محاولة إدخال سجل بمفتاح أساسي مكرر، ماذا يحدث؟",
            options: ["يتم استبدال السجل القديم", "يتم إضافة السجل برقم جديد تلقائياً", "يرفض النظام العملية ويعرض خطأ (Primary Key Violation)", "يتم إضافته كنسخة"],
            correctAnswer: 2
          },
          {
            id: 15,
            question: "من حيث الأداء (Performance) وسجل المعاملات (Logs)، أيهما 'أخف' عادة لحذف كل البيانات؟",
            options: ["DELETE", "TRUNCATE", "الاثنان متساويان", "DROP"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "select-filtering",
        title: "الاستعلام والتصفية (SELECT & Filtering)",
        description: "SELECT, WHERE, المعاملات المنطقية (AND/OR)، IN, BETWEEN.",
        durationMinutes: 30,
        sections: [
          {
            title: "جملة SELECT والتعليقات",
            content: "- **التعليقات**: `--` لسطر واحد، `/* ... */` لعدة أسطر.\n- **جلب الكل**: `SELECT * FROM CUSTOMERS;`\n- **جلب أعمدة محددة**: `SELECT ID, NAME FROM CUSTOMERS;`"
          },
          {
            title: "شرط WHERE والمعاملات",
            content: "تستخدم للتصفية. المعاملات: `=`, `>`, `<`, `>=`, `<=`, `<>`.\n\n**AND / OR:**\n- `WHERE SALARY > 2000 AND AGE < 25` (يجب تحقق الشرطين).\n- `WHERE SALARY > 2000 OR AGE < 25` (يكفي شرط واحد)."
          },
          {
            title: "التصفية المتقدمة (IN & BETWEEN)",
            content: "- **IN**: للتحقق من قائمة قيم.\n`WHERE AGE IN (25, 27);` (يعني العمر 25 أو 27).\n\n- **BETWEEN**: للتحقق من نطاق.\n`WHERE AGE BETWEEN 25 AND 27;` (بين 25 و 27)."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "أي استعلام يجلب الموظفين الذين أعمارهم إما 25 أو 30؟",
            options: ["WHERE AGE BETWEEN 25 AND 30", "WHERE AGE IN (25, 30)", "WHERE AGE = 25 AND AGE = 30", "WHERE AGE LIKE '25-30'"],
            correctAnswer: 1
          },
          {
            id: 2,
            question: "الرمز `--` في SQL يستخدم لـ:",
            options: ["القسمة", "تعليق سطر واحد", "طرح", "بداية الاستعلام"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "لجلب جميع الأعمدة نستخدم الرمز:",
            options: ["ALL", "%", "*", "&"],
            correctAnswer: 2
          },
          {
            id: 4,
            question: "الجملة `WHERE SALARY > 5000 AND SALARY < 10000` يمكن استبدالها بـ:",
            options: ["SALARY IN (5000, 10000)", "SALARY BETWEEN 5000 AND 10000", "SALARY LIKE '5000-10000'", "لا يمكن استبدالها"],
            correctAnswer: 1
          },
          {
            id: 5,
            question: "ما نتيجة `SELECT 1` إذا كان الجدول فارغاً؟",
            options: ["خطأ", "1", "لا شيء (Empty Set)", "NULL"],
            correctAnswer: 2
          },
          {
            id: 6,
            question: "ما هو المعامل الذي يعني 'لا يساوي' في SQL؟",
            options: ["==", "><", "<>", "!=="],
            correctAnswer: 2
          },
          {
            id: 7,
            question: "أي جملة صحيحة للتحقق من أن العمر أكبر من أو يساوي 18؟",
            options: ["AGE => 18", "AGE >= 18", "AGE > 18 OR = 18", "AGE EQUAL 18+"],
            correctAnswer: 1
          },
          {
            id: 8,
            question: "الكلمة المفتاحية الأولى في أي استعلام لاسترجاع البيانات هي:",
            options: ["GET", "FETCH", "SELECT", "FIND"],
            correctAnswer: 2
          },
          {
            id: 9,
            question: "للتحقق من أن القيمة ليست فارغة (NULL) نستخدم:",
            options: ["IS NOT NULL", "!= NULL", "<> NULL", "NOT EMPTY"],
            correctAnswer: 0
          },
          {
            id: 10,
            question: "ما ناتج `SELECT 5 * 2` ؟",
            options: ["10", "7", "خطأ في بناء الجملة", "52"],
            correctAnswer: 0
          },
          {
            id: 11,
            question: "عند استخدام `BETWEEN 10 AND 20`، هل القيمتين 10 و 20 مشمولتان؟",
            options: ["نعم، شاملة البداية والنهاية", "لا، فقط القيم بينهما", "تشمل البداية فقط", "تشمل النهاية فقط"],
            correctAnswer: 0
          },
          {
            id: 12,
            question: "أي من التالي يستخدم لعكس نتيجة الشرط؟",
            options: ["REV", "INVERT", "NOT", "OPPOSITE"],
            correctAnswer: 2
          },
          {
            id: 13,
            question: "ما هي الأسبقية (Precedence) الصحيحة للمعاملات المنطقية؟",
            options: ["OR ثم AND", "AND ثم OR", "الترتيب لا يهم", "NOT ثم OR ثم AND"],
            correctAnswer: 1
          },
          {
            id: 14,
            question: "ما نتيجة مقارنة أي قيمة بـ NULL (مثلاً `Age = NULL`)؟",
            options: ["True", "False", "Unknown (لا يعيد صفوفاً)", "Error"],
            correctAnswer: 2
          },
          {
            id: 15,
            question: "في SQL Server، هل يمكن كتابة جملة `SELECT` بدون `FROM` (مثال: `SELECT GETDATE()`)؟",
            options: ["نعم", "لا، يجب استخدام جدول وهمي DUAL", "فقط في النسخ القديمة", "يعطي خطأ Syntax"],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "advanced-select",
        title: "خيارات متقدمة (LIKE, TOP, DISTINCT, Alias)",
        description: "البحث بالأنماط (LIKE)، تحديد النتائج (TOP)، إزالة التكرار (DISTINCT)، والأسماء المستعارة.",
        durationMinutes: 30,
        sections: [
          {
            title: "مطابقة الأنماط (LIKE Clause)",
            content: "تستخدم مع `WHERE` للبحث عن نصوص جزئية.\nالرموز المستخدمة:\n- `%`: يمثل أي عدد من الأحرف (أو لا شيء).\n- `_`: يمثل حرفاً واحداً فقط.\n\nأمثلة:\n- `'200%'`: يبدأ بـ 200.\n- `'%200%'`: يحتوي على 200.\n- `'_00%'`: الحرف الثاني والثالث هما 00.\n- `'2_%_%'`: يبدأ بـ 2 وطوله 3 أحرف على الأقل.\n- `'_2%3'`: الحرف الثاني 2 وينتهي بـ 3."
          },
          {
            title: "TOP و DISTINCT",
            content: "- **TOP**: لجلب أول N سجلات.\n`SELECT TOP 3 * FROM CUSTOMERS;`\n\n- **DISTINCT**: لمنع القيم المكررة.\n`SELECT DISTINCT SALARY FROM CUSTOMERS;`"
          },
          {
            title: "الأسماء المستعارة (Alias)",
            content: "تسمية مؤقتة للجدول أو العمود لتسهيل القراءة.\n`SELECT ID AS Customer_ID FROM CUSTOMERS AS C;`"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "ماذا تعني `LIKE 'a___'`؟",
            options: ["يبدأ بـ a ومكون من 4 أحرف", "يبدأ بـ a وأي طول", "ينتهي بـ a", "يحتوي على a"],
            correctAnswer: 0
          },
          {
            id: 2,
            question: "أي استعلام يعيد القيم الفريدة (غير المكررة) فقط؟",
            options: ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT DIFFERENT", "SELECT ONLY"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "لجلب أول 5 عملاء فقط من الجدول:",
            options: ["SELECT FIRST 5", "SELECT TOP 5", "SELECT LIMIT 5", "HEAD 5"],
            correctAnswer: 1
          },
          {
            id: 4,
            question: "الرمز `%` في جملة LIKE يمثل:",
            options: ["حرف واحد فقط", "رقم واحد فقط", "صفر أو أكثر من الأحرف", "مسافة فارغة"],
            correctAnswer: 2
          },
          {
            id: 5,
            question: "كيف نعطي اسماً مستعاراً للعمود `SALARY` ليظهر بـ `Total_Pay`؟",
            options: ["SALARY IS Total_Pay", "SALARY AS Total_Pay", "Total_Pay = SALARY", "RENAME SALARY Total_Pay"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "الجملة `WHERE NAME LIKE '%a'` تعني:",
            options: ["الاسم يبدأ بـ a", "الاسم ينتهي بـ a", "الاسم يحتوي a", "الاسم مكون من حرف a فقط"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "الجملة `LIKE '_a%'` تعني:",
            options: ["يبدأ بـ a", "الحرف الثاني هو a", "يحتوي على a", "ينتهي بـ a"],
            correctAnswer: 1
          },
          {
            id: 8,
            question: "هل يمكن تطبيق DISTINCT على أكثر من عمود في نفس الوقت؟",
            options: ["نعم، ويعيد الصفوف التي يكون مزيج الأعمدة فيها فريداً", "لا، عمود واحد فقط", "نعم، ولكن يحذف كل البيانات", "فقط مع الأرقام"],
            correctAnswer: 0
          },
          {
            id: 9,
            question: "كلمة `AS` تستخدم لـ:",
            options: ["إنشاء جدول", "تحديد اسم مستعار (Alias)", "ترتيب النتائج", "شرط تصفية"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "أي جملة تجلب الأسماء التي تحتوي على حرف 'm' في أي مكان؟",
            options: ["LIKE 'm%'", "LIKE '%m'", "LIKE '%m%'", "LIKE '_m_'"],
            correctAnswer: 2
          },
          {
            id: 11,
            question: "هل يؤثر الاسم المستعار (Alias) على اسم العمود الأصلي في قاعدة البيانات؟",
            options: ["نعم يغيره نهائياً", "لا، هو تغيير مؤقت في العرض فقط", "نعم إذا استخدمنا UPDATE", "فقط إذا كنت المدير"],
            correctAnswer: 1
          },
          {
            id: 12,
            question: "لجلب أعلى 10% من السجلات نستخدم:",
            options: ["SELECT TOP 10 PERCENT", "SELECT 10% TOP", "SELECT LIMIT 10%", "SELECT FIRST 10 PERCENT"],
            correctAnswer: 0
          },
          {
            id: 13,
            question: "للبحث عن أي حرف أبجدي واحد داخل نطاق معين (مثلاً a إلى z) نستخدم:",
            options: ["LIKE '(a-z)'", "LIKE '[a-z]'", "LIKE '{a-z}'", "LIKE 'a..z'"],
            correctAnswer: 1
          },
          {
            id: 14,
            question: "ماذا تفعل جملة `SELECT TOP 5 WITH TIES`؟",
            options: ["تضيف الصفوف التي تتساوى قيمتها مع الصف الخامس في الترتيب", "تربط الجدولين", "تجلب 5 صفوف عشوائية", "تلغي الترتيب"],
            correctAnswer: 0
          },
          {
            id: 15,
            question: "لتجاوز أول 10 صفوف وجلب الـ 5 التالية (Pagination) نستخدم:",
            options: ["LIMIT 10, 5", "OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY", "TOP 5 START AT 10", "NEXT 5 AFTER 10"],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "مواضيع متقدمة (Advanced Topics)",
    lessons: [
      {
        id: "aggregates",
        title: "الدوال والتجميع (Aggregates, GROUP BY, HAVING)",
        description: "دوال الحسابات التجميعية، وكيفية تجميع البيانات وتصفية المجموعات.",
        durationMinutes: 35,
        sections: [
          {
            title: "دوال التجميع (Aggregate Functions)",
            content: "تقوم بحسابات على مجموعة قيم لتعيد قيمة واحدة:\n- `COUNT()`: العدد.\n- `SUM()`: المجموع.\n- `AVG()`: المتوسط.\n- `MAX()`: القيمة العظمى.\n- `MIN()`: القيمة الصغرى.\n- `SQRT()`: الجذر التربيعي.\n\nدوال نصوص:\n- `CONCAT()`: دمج نصوص.\n- `UPPER()` / `LOWER()`: تكبير/تصغير الأحرف."
          },
          {
            title: "الترتيب والتجميع",
            content: "- **ORDER BY**: للفرز (`ASC` تصاعدي، `DESC` تنازلي).\n- **GROUP BY**: لتجميع الصفوف التي لها نفس القيم (مثل مجموع الرواتب لكل وظيفة).\n\nمثال:\n`SELECT NAME, SUM(SALARY) FROM CUSTOMERS GROUP BY NAME;`"
          },
          {
            title: "HAVING Clause",
            content: "تستخدم لتصفية **المجموعات** (لأن `WHERE` لا تعمل مع دوال التجميع).\nتأتي بعد `GROUP BY` وقبل `ORDER BY`.\n\nمثال:\n`SELECT AGE, COUNT(AGE) FROM CUSTOMERS GROUP BY AGE HAVING COUNT(AGE) >= 2;`"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "أي دالة تستخدم لحساب المتوسط الحسابي؟",
            options: ["SUM", "COUNT", "AVG", "MEDIAN"],
            correctAnswer: 2
          },
          {
            id: 2,
            question: "ما الفرق بين WHERE و HAVING؟",
            options: ["لا يوجد فرق", "WHERE للصفوف الفردية، HAVING للمجموعات المجمعة", "HAVING تأتي قبل GROUP BY", "WHERE أبطأ من HAVING"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "لترتيب النتائج من الأكبر للأصغر (تنازلي) نستخدم:",
            options: ["UP", "ASC", "DESC", "TOP"],
            correctAnswer: 2
          },
          {
            id: 4,
            question: "جملة `GROUP BY` تستخدم غالباً مع:",
            options: ["INSERT INTO", "دوال التجميع (Aggregates)", "DELETE", "TRUNCATE"],
            correctAnswer: 1
          },
          {
            id: 5,
            question: "ما الترتيب الصحيح للجمل؟",
            options: ["SELECT -> WHERE -> GROUP BY -> HAVING", "SELECT -> GROUP BY -> WHERE -> HAVING", "SELECT -> HAVING -> WHERE", "WHERE -> SELECT -> GROUP BY"],
            correctAnswer: 0
          },
          {
            id: 6,
            question: "دالة `COUNT(*)` تعيد:",
            options: ["مجموع القيم", "عدد الصفوف بما فيها NULL", "عدد القيم غير المكررة", "أكبر قيمة"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "هل يمكن استخدام دالة SUM() في جملة WHERE؟",
            options: ["نعم دائماً", "لا، يجب استخدامها في HAVING", "فقط إذا كان الجدول صغيراً", "نعم مع GROUP BY"],
            correctAnswer: 1
          },
          {
            id: 8,
            question: "دالة `MIN()` هل تعمل مع النصوص؟",
            options: ["لا، للأرقام فقط", "نعم، تعيد النص الأول أبجدياً", "نعم، تعيد النص الأقصر طولاً", "تعطي خطأ"],
            correctAnswer: 1
          },
          {
            id: 9,
            question: "عند استخدام GROUP BY، الأعمدة المختارة في SELECT يجب أن تكون:",
            options: ["أي عمود في الجدول", "فقط الأعمدة الموجودة في GROUP BY أو دوال تجميع", "الأعمدة الرقمية فقط", "الأعمدة النصية فقط"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "دالة `CONCAT()` تستخدم لـ:",
            options: ["حساب المجموع", "دمج سلسلتين نصيتين أو أكثر", "تحويل النص لحروف كبيرة", "قص النص"],
            correctAnswer: 1
          },
          {
            id: 11,
            question: "إذا أردت معرفة عدد العملاء في كل مدينة، استخدم:",
            options: ["GROUP BY City", "ORDER BY City", "WHERE City IS NOT NULL", "SELECT DISTINCT City"],
            correctAnswer: 0
          },
          {
            id: 12,
            question: "لتحويل النص إلى حروف كبيرة نستخدم:",
            options: ["LOWER()", "UPPER()", "CAPITAL()", "TEXT()"],
            correctAnswer: 1
          },
          {
            id: 13,
            question: "ما الفرق بين `COUNT(Column)` و `COUNT(*)`؟",
            options: ["لا يوجد فرق", "`COUNT(Column)` يتجاهل القيم NULL، بينما `COUNT(*)` يحسب كل الصفوف", "`COUNT(*)` أبطأ", "`COUNT(Column)` يحسب القيم الفريدة فقط"],
            correctAnswer: 1
          },
          {
            id: 14,
            question: "هل يُسمح بتداخل دوال التجميع (مثل `SUM(AVG(x))`)؟",
            options: ["نعم", "لا، غير مسموح", "فقط في SQL Server 2022", "نعم إذا استخدمنا GROUP BY"],
            correctAnswer: 1
          },
          {
            id: 15,
            question: "لحساب عدد القيم الفريدة (غير المكررة) في عمود، نستخدم:",
            options: ["COUNT(DISTINCT Column)", "DISTINCT COUNT(Column)", "COUNT(UNIQUE Column)", "SUM(DISTINCT Column)"],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "constraints-alter",
        title: "القيود وتعديل الجداول (Constraints & ALTER)",
        description: "شرح القيود (Constraints) بالتفصيل وكيفية تعديل الجداول الموجودة.",
        durationMinutes: 40,
        sections: [
          {
            title: "القيود (SQL Constraints)",
            content: "قواعد لضمان دقة البيانات:\n1. **NOT NULL**: يمنع القيم الفارغة.\n2. **DEFAULT**: يضع قيمة افتراضية.\n3. **UNIQUE**: يمنع التكرار في العمود.\n4. **PRIMARY KEY**: مفتاح أساسي (فريد + NOT NULL).\n5. **FOREIGN KEY**: مفتاح أجنبي للربط بجدول آخر.\n6. **CHECK**: للتحقق من شرط منطقي (مثل `AGE >= 18`).\n7. **INDEX**: لتسريع البحث."
          },
          {
            title: "تعديل الجدول (ALTER TABLE)",
            content: "يستخدم لتغيير هيكل الجدول بعد إنشائه:\n\n- **إضافة عمود:** `ALTER TABLE table ADD column type;`\n- **حذف عمود:** `ALTER TABLE table DROP COLUMN column;`\n- **تعديل نوع:** `ALTER TABLE table ALTER COLUMN column type;`\n- **إضافة قيد:** `ALTER TABLE table ADD CONSTRAINT name ...;`\n- **حذف قيد:** `ALTER TABLE table DROP CONSTRAINT name;`"
          },
          {
            title: "العمود التلقائي (Auto Increment)",
            content: "لجعل العمود يزداد تلقائياً برقم 1 لكل صف جديد.\nفي SQL Server نستخدم: `IDENTITY(1,1)`.\nمثال: `ID INT IDENTITY(1,1) PRIMARY KEY`."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "أي قيد يضمن عدم تكرار القيم في العمود؟",
            options: ["NOT NULL", "DEFAULT", "UNIQUE", "CHECK"],
            correctAnswer: 2
          },
          {
            id: 2,
            question: "المفتاح الأساسي (PRIMARY KEY) هو مزيج من قيدين، هما:",
            options: ["UNIQUE و CHECK", "NOT NULL و UNIQUE", "DEFAULT و NOT NULL", "FOREIGN KEY و UNIQUE"],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "لإضافة عمود جديد لجدول موجود نستخدم:",
            options: ["UPDATE TABLE", "INSERT COLUMN", "ALTER TABLE ... ADD", "MODIFY TABLE"],
            correctAnswer: 2
          },
          {
            id: 4,
            question: "ما وظيفة القيد CHECK؟",
            options: ["التأكد من صحة نوع البيانات", "التحقق من شرط معين قبل الإدخال", "فحص وجود الجدول", "الربط بجدول آخر"],
            correctAnswer: 1
          },
          {
            id: 5,
            question: "لحذف قيد (Constraint) موجود نستخدم:",
            options: ["DELETE CONSTRAINT", "DROP CONSTRAINT", "REMOVE CONSTRAINT", "ALTER CONSTRAINT"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "ماذا يعني `IDENTITY(1,1)`؟",
            options: ["العمود يقبل 1 فقط", "العمود فريد", "العمود يبدأ بـ 1 ويزيد بمقدار 1 تلقائياً", "العمود هوية للمستخدم"],
            correctAnswer: 2
          },
          {
            id: 7,
            question: "القيد الذي يربط جدولاً بجدول آخر يسمى:",
            options: ["PRIMARY KEY", "FOREIGN KEY", "CONNECT KEY", "LINK KEY"],
            correctAnswer: 1
          },
          {
            id: 8,
            question: "هل يمكن لعمود أن يحتوي على القيدين NOT NULL و UNIQUE معاً؟",
            options: ["نعم", "لا، يتعارضان", "فقط في المفتاح الأساسي", "فقط للأرقام"],
            correctAnswer: 0
          },
          {
            id: 9,
            question: "الفرق الرئيسي بين PRIMARY KEY و UNIQUE KEY هو:",
            options: ["لا فرق", "UNIQUE يسمح بقيمة NULL واحدة، بينما PRIMARY لا يسمح بأي NULL", "PRIMARY KEY لا يضمن التميز", "UNIQUE يستخدم للربط بجدول آخر"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "لجعل العمود يأخذ القيمة 'Unknown' تلقائياً عند عدم الإدخال نستخدم القيد:",
            options: ["DEFAULT", "CHECK", "AUTO", "SET"],
            correctAnswer: 0
          },
          {
            id: 11,
            question: "لتغيير نوع بيانات عمود موجود نستخدم:",
            options: ["ALTER TABLE ... ALTER COLUMN", "CHANGE COLUMN TYPE", "MODIFY COLUMN", "UPDATE COLUMN"],
            correctAnswer: 0
          },
          {
            id: 12,
            question: "ماذا يفعل القيد `INDEX`؟",
            options: ["يمنع التكرار", "يسرع عمليات البحث والاستعلام", "يخزن البيانات بترتيب أبجدي فقط", "يجبر العمود على قبول الأرقام"],
            correctAnswer: 1
          },
          {
            id: 13,
            question: "في المفتاح الأجنبي (Foreign Key)، خيار `ON DELETE CASCADE` يعني:",
            options: ["منع حذف الأب", "حذف السجلات المرتبطة (الأبناء) تلقائياً عند حذف الأب", "تحويل قيم الأبناء إلى NULL", "عرض رسالة خطأ"],
            correctAnswer: 1
          },
          {
            id: 14,
            question: "هل يمكن تعطيل فحص القيد (Constraint) مؤقتاً؟",
            options: ["لا يمكن", "نعم باستخدام `NOCHECK`", "فقط للمفتاح الأساسي", "نعم بحذف القيد وإعادته"],
            correctAnswer: 1
          },
          {
            id: 15,
            question: "المفتاح الأساسي المركب (Composite Primary Key) يتكون من:",
            options: ["عمود واحد فقط", "عمودين أو أكثر لتكوين قيمة فريدة", "مفاتيح أجنبية فقط", "أرقام فقط"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "joins-types",
        title: "ربط الجداول (SQL Joins)",
        description: "دمج البيانات من جدولين أو أكثر باستخدام أنواع الربط المختلفة.",
        durationMinutes: 45,
        sections: [
          {
            title: "أنواع الربط (Join Types)",
            content: "1. **INNER JOIN**: يعيد الصفوف المتطابقة في الجدولين فقط (الأكثر استخداماً).\n2. **LEFT JOIN**: يعيد كل صفوف الجدول الأيسر + المطابق من الأيمن (والباقي NULL).\n3. **RIGHT JOIN**: يعيد كل صفوف الجدول الأيمن + المطابق من الأيسر.\n4. **FULL JOIN**: يعيد كافة الصفوف عند وجود تطابق في أحدهما.\n5. **SELF JOIN**: ربط الجدول بنفسه (يستخدم لحالات مثل الهيكلية الشجرية).\n6. **CARTESIAN (CROSS) JOIN**: الضرب الديكارتي (كل صف مع كل الصفوف). يحدث عند عدم وجود شرط `ON`."
          },
          {
            title: "أمثلة",
            content: "**INNER JOIN:**\n```sql\nSELECT ID, NAME, AMOUNT \nFROM CUSTOMERS \nINNER JOIN ORDERS \nON CUSTOMERS.ID = ORDERS.CUSTOMER_ID;\n```\n\n**CARTESIAN JOIN:**\n```sql\nSELECT * FROM CUSTOMERS CROSS JOIN ORDERS;\n```"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "أي نوع ربط يعيد الصفوف الموجودة في الجدول الأيسر حتى لو لم يكن لها مقابل في الأيمن؟",
            options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
            correctAnswer: 2
          },
          {
            id: 2,
            question: "الربط الذي ينتج عنه ضرب ديكارتي (كل الاحتمالات الممكنة) هو:",
            options: ["SELF JOIN", "FULL JOIN", "CARTESIAN (CROSS) JOIN", "EQUIJOIN"],
            correctAnswer: 2
          },
          {
            id: 3,
            question: "في INNER JOIN، ماذا يحدث للصفوف التي لا تملك تطابقاً؟",
            options: ["تظهر بقيم NULL", "يتم استبعادها من النتيجة", "تظهر في نهاية الجدول", "يحدث خطأ"],
            correctAnswer: 1
          },
          {
            id: 4,
            question: "ما هو SELF JOIN؟",
            options: ["ربط الجدول بجدول آخر بنفس الاسم", "ربط الجدول بنفسه", "ربط تلقائي", "ربط بدون شروط"],
            correctAnswer: 1
          },
          {
            id: 5,
            question: "إذا كان الجدول A فيه 3 صفوف والجدول B فيه 4 صفوف، كم صفاً ينتج عن CROSS JOIN؟",
            options: ["7", "12", "0", "4"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "لإعادة كل الصفوف من الجدولين بغض النظر عن التطابق نستخدم:",
            options: ["FULL JOIN", "ALL JOIN", "COMPLETE JOIN", "TOTAL JOIN"],
            correctAnswer: 0
          },
          {
            id: 7,
            question: "ما هو النوع الافتراضي لـ JOIN إذا لم نحدد النوع؟",
            options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
            correctAnswer: 2
          },
          {
            id: 8,
            question: "إذا كان الجدول A يحتوي 10 صفوف والجدول B فارغ (0 صفوف)، كم صفاً سيعيد LEFT JOIN؟",
            options: ["0", "10", "5", "خطأ"],
            correctAnswer: 1
          },
          {
            id: 9,
            question: "للبحث عن السجلات في الجدول A التي ليس لها مقابل في الجدول B، نستخدم:",
            options: ["INNER JOIN", "LEFT JOIN مع شرط WHERE B.id IS NULL", "RIGHT JOIN", "CROSS JOIN"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "الكلمة المفتاحية `ON` في جملة JOIN تستخدم لـ:",
            options: ["تحديد شرط الربط", "تحديد اسم الجدول", "فلترة النتائج النهائية", "ترتيب النتائج"],
            correctAnswer: 0
          },
          {
            id: 11,
            question: "أي ربط يعيد الصفوف من الجدول الأيمن حتى لو لم تتطابق مع الأيسر؟",
            options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "SELF JOIN"],
            correctAnswer: 2
          },
          {
            id: 12,
            question: "هل يمكن ربط أكثر من جدولين في استعلام واحد؟",
            options: ["لا، جدولين فقط", "نعم، يمكن ربط عدة جداول", "فقط في قواعد بيانات أوراكل", "نعم ولكن باستخدام CROSS JOIN فقط"],
            correctAnswer: 1
          },
          {
            id: 13,
            question: "في استعلام Self Join، ما هو الشرط الأساسي لتجنب الغموض (Ambiguity)؟",
            options: ["استخدام أسماء مستعارة (Aliases) مختلفة لنفس الجدول", "استخدام CROSS JOIN", "حذف الجدول", "لا يوجد شرط"],
            correctAnswer: 0
          },
          {
            id: 14,
            question: "ماذا يعني 'Anti-Join'؟",
            options: ["ربط يعيد الصفوف غير المتطابقة فقط", "عكس INNER JOIN", "ربط يحذف البيانات", "مصطلح غير موجود"],
            correctAnswer: 0
          },
          {
            id: 15,
            question: "هل يمكن استخدام معاملات غير التساوي (`<`, `>`, `<>`) في شرط `ON`؟",
            options: ["نعم (Non-Equi Join)", "لا، يجب استخدام `=` فقط", "فقط في Full Join", "يعطي خطأ"],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "backup-restore",
        title: "النسخ الاحتياطي والاستعادة (Backup & Restore)",
        description: "كيفية حماية البيانات باستخدام النسخ الاحتياطي واستعادتها.",
        durationMinutes: 15,
        sections: [
          {
            title: "النسخ الاحتياطي (Backup)",
            content: "**1. Full Backup (كامل):** ينسخ كل شيء.\n```sql\nBACKUP DATABASE testDB\nTO DISK = 'D:\\backups\\testDB.bak'\nWITH INIT;\n```\n\n**2. Differential Backup (تفاضلي):** ينسخ فقط ما تغير منذ آخر نسخة كاملة (أسرع وأصغر).\n```sql\nBACKUP DATABASE testDB\nTO DISK = 'D:\\backups\\testDB_diff.bak'\nWITH DIFFERENTIAL;\n```"
          },
          {
            title: "الاستعادة (Restore)",
            content: "لاسترجاع قاعدة البيانات من ملف النسخة الاحتياطية.\n```sql\nRESTORE DATABASE testDB\nFROM DISK = 'D:\\backups\\testDB.bak'\nWITH REPLACE;\n```"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "ما ميزة النسخ التفاضلي (Differential) مقارنة بالكامل؟",
            options: ["ينسخ كل البيانات من جديد", "أسرع لأنه ينسخ التغييرات فقط", "أبطأ ويأخذ مساحة أكبر", "يقوم بحذف البيانات القديمة"],
            correctAnswer: 1
          },
          {
            id: 2,
            question: "الأمر المستخدم لاستعادة قاعدة البيانات هو:",
            options: ["RECOVER DATABASE", "RETURN DATABASE", "RESTORE DATABASE", "GET DATABASE"],
            correctAnswer: 2
          },
          {
            id: 3,
            question: "ما هو الامتداد الشائع لملفات النسخ الاحتياطي في SQL Server؟",
            options: [".sql", ".txt", ".bak", ".db"],
            correctAnswer: 2
          },
          {
            id: 4,
            question: "هل يمكن استعادة نسخة احتياطية لقاعدة بيانات باسم مختلف؟",
            options: ["نعم", "لا، يجب أن يكون نفس الاسم", "فقط في النسخة المدفوعة", "نعم، ولكن بدون البيانات"],
            correctAnswer: 0
          },
          {
            id: 5,
            question: "هل يعتمد النسخ الاحتياطي التفاضلي (Differential) على وجود نسخة كاملة (Full) سابقة؟",
            options: ["لا، يعمل مستقلاً", "نعم، يجب وجود Full Backup قبله", "يعتمد على Transaction Log", "فقط إذا كانت قاعدة البيانات كبيرة"],
            correctAnswer: 1
          },
          {
            id: 6,
            question: "ما هو Transaction Log Backup؟",
            options: ["نسخ هيكل الجدول فقط", "نسخ سجل المعاملات لتوفير استعادة لنقطة زمنية محددة", "نسخ البيانات النصية فقط", "نفس الـ Full Backup"],
            correctAnswer: 1
          },
          {
            id: 7,
            question: "خيار `WITH REPLACE` عند الاستعادة يستخدم لـ:",
            options: ["استبدال قاعدة البيانات الموجودة حالياً", "تغيير اسم القاعدة", "نقل الملفات لمكان جديد", "إصلاح الأخطاء"],
            correctAnswer: 0
          },
          {
            id: 8,
            question: "ما هو نموذج الاسترداد (Recovery Model) الذي يسمح باستعادة الـ Log؟",
            options: ["Simple", "Full", "Bulk-Logged", "Basic"],
            correctAnswer: 1
          },
          {
            id: 9,
            question: "أين يتم تخزين ملفات النسخ الاحتياطي عادة؟",
            options: ["في الذاكرة العشوائية (RAM)", "على القرص الصلب (Disk) أو شريط (Tape)", "داخل جدول في قاعدة البيانات", "في ملفات النظام"],
            correctAnswer: 1
          },
          {
            id: 10,
            question: "أمر `BACKUP DATABASE` ينتمي لأي نوع من الأوامر؟",
            options: ["Administrative / T-SQL", "DML", "DQL", "DCL"],
            correctAnswer: 0
          },
          {
            id: 11,
            question: "هل يمكن إجراء نسخ احتياطي لقاعدة البيانات أثناء عمل المستخدمين عليها؟",
            options: ["نعم (Online Backup)", "لا، يجب إيقاف السيرفر", "لا، يجب فصل قاعدة البيانات", "فقط للقراءة"],
            correctAnswer: 0
          },
          {
            id: 12,
            question: "ماذا يحدث لسجل المعاملات (Log) بعد عملية Full Backup في وضع Simple Recovery؟",
            options: ["يتم قصه (Truncated) تلقائياً لتوفير المساحة", "يحتفظ بكل البيانات للأبد", "يتم حذفه", "يتحول إلى ملف نصي"],
            correctAnswer: 0
          },
          {
            id: 13,
            question: "لأخذ نسخة احتياطية (Backup) دون التأثير على تسلسل النسخ الاحتياطي (Log Chain)، نستخدم:",
            options: ["COPY_ONLY", "NO_LOG", "STANDBY", "MIRROR"],
            correctAnswer: 0
          },
          {
            id: 14,
            question: "للتحقق من سلامة ملف النسخة الاحتياطية دون استعادته فعلياً، نستخدم:",
            options: ["RESTORE VERIFYONLY", "CHECKDB", "TEST BACKUP", "VALIDATE"],
            correctAnswer: 0
          },
          {
            id: 15,
            question: "أي قاعدة بيانات نظام لا يمكن عمل نسخ احتياطي لها؟",
            options: ["master", "model", "msdb", "tempdb"],
            correctAnswer: 3
          }
        ]
      }
    ]
  }
];

export const referenceMaterials: ReferenceMaterial[] = [
  {
    id: "lec1",
    title: "محاضرة 1: أساسيات أوامر SQL (Database I Lab)",
    sections: [
      {
        heading: "1. أوامر SQL (SQL Commands)",
        content: "تستخدم أوامر SQL للتواصل مع قاعدة البيانات لأداء مهام محددة. تنقسم إلى:\n- **DQL (Data Query Language)**: لاسترجاع البيانات (`SELECT`).\n- **DDL (Data Definition Language)**: لتعريف الهيكل (`CREATE`, `DROP`, `ALTER`, `TRUNCATE`).\n- **DML (Data Manipulation Language)**: لمعالجة البيانات (`INSERT`, `UPDATE`, `DELETE`).\n- **DCL (Data Control Language)**: للتحكم بالصلاحيات (`GRANT`, `REVOKE`).\n- **TCL (Transaction Control Language)**: للتحكم بالعمليات (`COMMIT`, `ROLLBACK`)."
      },
      {
        heading: "2. أنواع البيانات (Data Types)",
        content: "أهم أنواع البيانات في SQL:\n- **Exact Numeric**: `int`, `smallint`, `tinyint`, `bigint`, `decimal`, `numeric`, `money`.\n- **Approximate Numeric**: `float`, `real`.\n- **String**: `char(n)` (ثابت), `varchar(n)` (متغير), `text`.\n- **Date/Time**: `datetime`.\n- **Binary**: `image`, `binary`.\n- **Other**: `bit` (0/1), `xml`, `timestamp`.",
        table: {
          headers: ["Data Type", "Description"],
          rows: [
            ["int", "Integer data (exact numeric)"],
            ["varchar(n)", "Variable length character data"],
            ["datetime", "Date and time data"],
            ["float", "Floating precision data"],
            ["bit", "Integer data that is a 0 or 1"],
          ]
        }
      },
      {
        heading: "3. أوامر قاعدة البيانات (Database Commands)",
        content: "**إنشاء قاعدة بيانات (CREATE DATABASE):**\n```sql\nCREATE DATABASE db_name;\n```\n**استخدام قاعدة البيانات (USE):**\n```sql\nUSE DATABASE db_name;\n```\n**حذف قاعدة بيانات (DROP DATABASE):**\n```sql\nDROP DATABASE db_name;\n```"
      },
      {
        heading: "4. إنشاء وحذف الجداول (CREATE & DROP TABLE)",
        content: "**إنشاء جدول (CREATE TABLE):**\n```sql\nCREATE TABLE CUSTOMERS (\n  ID INT NOT NULL,\n  NAME VARCHAR(20) NOT NULL,\n  AGE INT NOT NULL,\n  ADDRESS CHAR(25),\n  SALARY DECIMAL(18,2),\n  PRIMARY KEY(ID)\n);\n```\n**حذف جدول (DROP TABLE):**\nتحذف الجدول بالكامل مع بياناته.\n```sql\nDROP TABLE CUSTOMERS;\n```"
      },
      {
        heading: "5. إضافة البيانات (INSERT INTO)",
        content: "لإضافة سجلات جديدة.\n**الطريقة 1 (تحديد الأعمدة):**\n```sql\nINSERT INTO CUSTOMERS (ID, NAME, AGE) VALUES (1, 'Ramesh', 32);\n```\n**الطريقة 2 (كل القيم):**\n```sql\nINSERT INTO CUSTOMERS VALUES (2, 'Khilan', 25, 'Delhi', 1500.00);\n```"
      },
      {
        heading: "6. إفراغ الجدول (TRUNCATE TABLE)",
        content: "تحذف جميع الصفوف من الجدول ولكن تبقي على هيكله. هي أسرع من DELETE ولا يمكن التراجع عنها بسهولة.\n```sql\nTRUNCATE TABLE CUSTOMERS;\n```"
      },
      {
        heading: "7. الاستعلام (SELECT Statement)",
        content: "لاسترجاع البيانات من الجدول.\n- **كل الأعمدة:** `SELECT * FROM CUSTOMERS;`\n- **أعمدة محددة:** `SELECT ID, NAME FROM CUSTOMERS;`"
      },
      {
        heading: "8. التصفية (WHERE Clause)",
        content: "تستخدم لتصفية السجلات بناءً على شرط.\n```sql\nSELECT ID, NAME, SALARY FROM CUSTOMERS WHERE SALARY > 2000;\n```\nيمكن استخدام المعاملات: `=`, `>`, `<`, `>=`, `<=`, `<>`, `LIKE`.\n\n**AND / OR Operators:**\nلدمج الشروط.\n```sql\nSELECT * FROM CUSTOMERS WHERE SALARY > 2000 AND AGE < 25;\n```"
      },
      {
        heading: "9. التعديل والحذف (UPDATE & DELETE)",
        content: "**UPDATE:** لتعديل السجلات الموجودة.\n```sql\nUPDATE CUSTOMERS SET ADDRESS = 'Pune' WHERE ID = 6;\n```\n**DELETE:** لحذف سجلات محددة.\n```sql\nDELETE FROM CUSTOMERS WHERE ID = 6;\n```"
      },
      {
        heading: "10. البحث بالنطاق والقائمة (IN & BETWEEN)",
        content: "**IN Clause:** للتحقق من وجود القيمة ضمن قائمة.\n```sql\nSELECT * FROM CUSTOMERS WHERE AGE IN (25, 27);\n```\n**BETWEEN Clause:** للتحقق من وجود القيمة ضمن نطاق.\n```sql\nSELECT * FROM CUSTOMERS WHERE AGE BETWEEN 25 AND 27;\n```"
      }
    ]
  },
  {
    id: "lec2",
    title: "محاضرة 2: العمليات المتقدمة والقيود (Database I Lab)",
    sections: [
      {
        heading: "1. البحث بالأنماط (LIKE Clause)",
        content: "تستخدم لمقارنة القيم بنمط معين باستخدام Wildcards:\n- `%`: يمثل صفر أو أكثر من الأحرف.\n- `_`: يمثل حرفاً واحداً فقط.\n\nأمثلة:\n- `'200%'`: يبدأ بـ 200.\n- `'%200%'`: يحتوي على 200 في أي مكان.\n- `'_00%'`: الحرف الثاني والثالث هما 00.\n- `'_2%3'`: الحرف الثاني 2 وينتهي بـ 3.\n\n```sql\nSELECT * FROM CUSTOMERS WHERE SALARY LIKE '200%';\n```",
        table: {
            headers: ["Pattern", "Description"],
            rows: [
                ["'200%'", "Starts with 200"],
                ["'%200%'", "Contains 200"],
                ["'_00%'", "Has 00 in 2nd and 3rd position"],
                ["'%2'", "Ends with 2"]
            ]
        }
      },
      {
        heading: "2. تحديد النتائج والتميز (TOP & DISTINCT)",
        content: "**TOP:** لجلب عدد محدد من السجلات.\n```sql\nSELECT TOP 3 * FROM CUSTOMERS;\n```\n**DISTINCT:** لمنع التكرار في النتائج.\n```sql\nSELECT DISTINCT SALARY FROM CUSTOMERS;\n```"
      },
      {
        heading: "3. الأسماء المستعارة (Alias)",
        content: "إعادة تسمية الجدول أو العمود مؤقتاً.\n```sql\nSELECT ID AS CUSTOMER_ID, NAME AS CUSTOMER_NAME FROM CUSTOMERS;\n```"
      },
      {
        heading: "4. دوال التجميع (Aggregate Functions)",
        content: "تقوم بحسابات على مجموعة قيم لتعيد قيمة واحدة.\n- `MAX()`, `MIN()`: القيمة العظمى والصغرى.\n- `AVG()`, `SUM()`: المتوسط والمجموع.\n- `COUNT()`: العدد.\n- `SQRT()`: الجذر التربيعي.\n- `CONCAT()`: دمج النصوص.\n\n```sql\nSELECT SUM(SALARY), AVG(AGE) FROM CUSTOMERS;\n```"
      },
      {
        heading: "5. الترتيب والتجميع (ORDER BY, GROUP BY, HAVING)",
        content: "**ORDER BY:** لترتيب النتائج (ASC/DESC).\n```sql\nSELECT * FROM CUSTOMERS ORDER BY NAME DESC;\n```\n**GROUP BY:** لتجميع الصفوف المتشابهة.\n```sql\nSELECT NAME, SUM(SALARY) FROM CUSTOMERS GROUP BY NAME;\n```\n**HAVING:** لتصفية المجموعات (تستخدم بدلاً من WHERE مع GROUP BY).\n```sql\nSELECT AGE, COUNT(AGE) FROM CUSTOMERS GROUP BY AGE HAVING COUNT(AGE) >= 2;\n```"
      },
      {
        heading: "6. القيود (Constraints)",
        content: "لفرض قواعد على البيانات:\n- **NOT NULL**: يمنع القيم الفارغة.\n- **DEFAULT**: يحدد قيمة افتراضية.\n- **UNIQUE**: يمنع التكرار.\n- **PRIMARY KEY**: مفتاح أساسي (معرف وحيد).\n- **FOREIGN KEY**: مفتاح أجنبي للربط بجدول آخر.\n- **CHECK**: للتحقق من شرط معين (مثل العمر > 18).\n- **INDEX**: لتسريع البحث."
      },
      {
        heading: "7. تعديل الجداول (ALTER TABLE)",
        content: "لتغيير هيكل الجدول بعد إنشائه.\n- **إضافة عمود:** `ALTER TABLE table ADD col type;`\n- **حذف عمود:** `ALTER TABLE table DROP COLUMN col;`\n- **إضافة قيد:** `ALTER TABLE table ADD CONSTRAINT ...;`\n- **حذف قيد:** `ALTER TABLE table DROP CONSTRAINT ...;`"
      },
      {
        heading: "8. ربط الجداول (JOINS)",
        content: "لدمج السجلات من جدولين أو أكثر.\n- **INNER JOIN**: الصفوف المتطابقة في الجدولين.\n- **LEFT JOIN**: كل اليسار + المطابق من اليمين.\n- **RIGHT JOIN**: كل اليمين + المطابق من اليسار.\n- **FULL JOIN**: كل الصفوف عند وجود تطابق في أحدهما.\n- **SELF JOIN**: ربط الجدول بنفسه.\n- **CARTESIAN (CROSS) JOIN**: الضرب الديكارتي (كل صف مع كل الصفوف).\n\n```sql\nSELECT C.NAME, O.AMOUNT \nFROM CUSTOMERS C \nINNER JOIN ORDERS O \nON C.ID = O.CUSTOMER_ID;\n```"
      },
      {
        heading: "9. النسخ الاحتياطي (BACKUP DATABASE)",
        content: "**Full Backup:**\n```sql\nBACKUP DATABASE testDB TO DISK = 'D:\\testDB.bak';\n```\n**Differential Backup:**\n```sql\nBACKUP DATABASE testDB TO DISK = 'D:\\testDB_diff.bak' WITH DIFFERENTIAL;\n```\n**Restore:**\n```sql\nRESTORE DATABASE testDB FROM DISK = 'D:\\testDB.bak' WITH REPLACE;\n```"
      }
    ]
  }
];

export const challenges: Challenge[] = [
  {
    id: "ch1",
    title: "العميل الأغنى",
    difficulty: "Beginner",
    description: "نحتاج إلى معرفة اسم العميل الذي يتقاضى أعلى راتب في الشركة لتجهيز عرض خاص له.",
    task: "قم بكتابة استعلام لاسترجاع اسم العميل (NAME) والراتب (SALARY) لصاحب أعلى راتب.",
    initialSql: "SELECT ... FROM CUSTOMERS ...",
    hints: ["استخدم ORDER BY لترتيب الرواتب.", "استخدم TOP 1 لجلب سجل واحد فقط.", "تأكد من الترتيب التنازلي DESC."],
    solution: "SELECT TOP 1 NAME, SALARY FROM CUSTOMERS ORDER BY SALARY DESC;"
  },
  {
    id: "ch2",
    title: "تحليل الطلبات",
    difficulty: "Intermediate",
    description: "نريد معرفة مجموع مبالغ الطلبات لكل عميل.",
    task: "اكتب استعلام يعرض ID العميل ومجموع (SUM) حقل AMOUNT من جدول ORDERS، مجمعة حسب CUSTOMER_ID.",
    initialSql: "SELECT ... FROM ORDERS ...",
    hints: ["استخدم دالة التجميع SUM().", "لا تنسى GROUP BY.", "تأكد من تجميع النتائج حسب CUSTOMER_ID."],
    solution: "SELECT CUSTOMER_ID, SUM(AMOUNT) FROM ORDERS GROUP BY CUSTOMER_ID;"
  },
  {
    id: "ch3",
    title: "العملاء بدون طلبات",
    difficulty: "Advanced",
    description: "هناك عملاء مسجلين لدينا لكنهم لم يقوموا بأي طلب حتى الآن. نحتاج لقائمة بهم.",
    task: "استخدم LEFT JOIN لعرض جميع العملاء، واسترجع فقط الذين لا يملكون أي طلب (OID في جدول الطلبات يكون NULL).",
    initialSql: "SELECT C.NAME FROM CUSTOMERS C ...",
    hints: ["استخدم LEFT JOIN لربط العملاء بالطلبات.", "استخدم شرط WHERE للتحقق من القيم الفارغة (IS NULL) في جدول الطلبات."],
    solution: "SELECT C.NAME FROM CUSTOMERS C LEFT JOIN ORDERS O ON C.ID = O.CUSTOMER_ID WHERE O.ORDER_ID IS NULL;"
  }
];

export const achievements: Achievement[] = [
  { id: "first_query", title: "بداية الطريق", description: "قمت بتنفيذ أول استعلام بنجاح", icon: "🚀" },
  { id: "quiz_master", title: "عبقري الاختبارات", description: "حصلت على درجة كاملة في اختبار", icon: "🏆" },
  { id: "challenger", title: "المتحدي", description: "أتممت تحدي برمجي واحد", icon: "⚔️" },
  { id: "sql_master", title: "محترف SQL", description: "أكملت جميع الدروس", icon: "👑" },
];

export const dictionaryTerms: DictionaryTerm[] = [
  // A) Query Commands
  {
    id: "select",
    term: "SELECT",
    category: "Query Commands",
    definition: "يُستخدم لاسترجاع البيانات من قاعدة البيانات.",
    example: "SELECT name, age FROM students;",
    usedWith: ["FROM", "WHERE", "GROUP BY", "ORDER BY"],
    relatedLessonId: "select-filtering"
  },
  {
    id: "where",
    term: "WHERE",
    category: "Query Commands",
    definition: "يُستخدم لتصفية السجلات واسترجاع الصفوف التي تحقق شرطاً معيناً فقط.",
    example: "SELECT * FROM customers WHERE age > 25;",
    note: "بدون WHERE سيتم تطبيق الأمر على جميع الصفوف.",
    usedWith: ["SELECT", "UPDATE", "DELETE"],
    relatedLessonId: "select-filtering"
  },
  {
    id: "distinct",
    term: "DISTINCT",
    category: "Query Commands",
    definition: "يُستخدم لإرجاع القيم المختلفة (غير المكررة) فقط.",
    example: "SELECT DISTINCT country FROM customers;",
    relatedLessonId: "advanced-select"
  },
  {
    id: "top",
    term: "TOP",
    category: "Query Commands",
    definition: "يُستخدم لتحديد عدد السجلات التي سيتم إرجاعها (في SQL Server).",
    example: "SELECT TOP 3 * FROM customers;",
    note: "يُكافئ LIMIT في قواعد بيانات أخرى مثل MySQL.",
    relatedLessonId: "advanced-select"
  },
  {
    id: "as",
    term: "AS (Alias)",
    category: "Query Commands",
    definition: "يُستخدم لإعطاء اسم مؤقت لجدول أو عمود لتسهيل القراءة.",
    example: "SELECT count(*) AS total_count FROM orders;",
    relatedLessonId: "advanced-select"
  },
  {
    id: "order-by",
    term: "ORDER BY",
    category: "Query Commands",
    definition: "يُستخدم لترتيب النتائج تصاعدياً (ASC) أو تنازلياً (DESC).",
    example: "SELECT * FROM products ORDER BY price DESC;",
    note: "الترتيب الافتراضي هو تصاعدي (ASC).",
    relatedLessonId: "aggregates"
  },
  {
    id: "group-by",
    term: "GROUP BY",
    category: "Query Commands",
    definition: "يُستخدم لتجميع الصفوف التي لها نفس القيم في صفوف ملخصة.",
    example: "SELECT country, COUNT(*) FROM customers GROUP BY country;",
    usedWith: ["COUNT", "SUM", "AVG"],
    relatedLessonId: "aggregates"
  },
  {
    id: "having",
    term: "HAVING",
    category: "Query Commands",
    definition: "يُستخدم لتصفية المجموعات التي يتم إنشاؤها بواسطة GROUP BY.",
    example: "SELECT country, COUNT(*) FROM customers GROUP BY country HAVING COUNT(*) > 5;",
    commonMistakes: "استخدام WHERE بدلاً من HAVING مع الدوال التجميعية.",
    relatedLessonId: "aggregates"
  },

  // B) Conditions & Operators
  {
    id: "and",
    term: "AND",
    category: "Conditions",
    definition: "عامل منطقي يعرض السجل إذا كانت *كل* الشروط صحيحة.",
    example: "SELECT * FROM users WHERE age > 18 AND active = 1;",
    relatedLessonId: "select-filtering"
  },
  {
    id: "or",
    term: "OR",
    category: "Conditions",
    definition: "عامل منطقي يعرض السجل إذا كان *أي* من الشروط صحيحاً.",
    example: "SELECT * FROM users WHERE city = 'Cairo' OR city = 'Alex';",
    relatedLessonId: "select-filtering"
  },
  {
    id: "not",
    term: "NOT",
    category: "Conditions",
    definition: "يستخدم لعكس نتيجة الشرط.",
    example: "SELECT * FROM products WHERE NOT color = 'Red';",
    relatedLessonId: "select-filtering"
  },
  {
    id: "like",
    term: "LIKE",
    category: "Conditions",
    definition: "يُستخدم للبحث عن نمط معين في عمود نصي.",
    example: "SELECT * FROM customers WHERE name LIKE 'A%';",
    note: "% يمثل أي عدد من الأحرف، _ يمثل حرفاً واحداً.",
    relatedLessonId: "advanced-select"
  },
  {
    id: "in",
    term: "IN",
    category: "Conditions",
    definition: "يسمح بتحديد قيم متعددة في شرط WHERE.",
    example: "SELECT * FROM products WHERE id IN (1, 5, 9);",
    relatedLessonId: "select-filtering"
  },
  {
    id: "between",
    term: "BETWEEN",
    category: "Conditions",
    definition: "يختار القيم ضمن نطاق معين (شامل البداية والنهاية).",
    example: "SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;",
    relatedLessonId: "select-filtering"
  },
  {
    id: "is-null",
    term: "IS NULL",
    category: "Conditions",
    definition: "يُستخدم لاختبار القيم الفارغة (NULL).",
    example: "SELECT * FROM users WHERE phone IS NULL;",
    commonMistakes: "استخدام phone = NULL (غير صحيح)."
  },

  // C) Data Manipulation (DML)
  {
    id: "insert-into",
    term: "INSERT INTO",
    category: "DML",
    definition: "يُستخدم لإضافة صفوف جديدة إلى الجدول.",
    example: "INSERT INTO users (name, age) VALUES ('Ahmed', 25);",
    relatedLessonId: "dml-basics"
  },
  {
    id: "update",
    term: "UPDATE",
    category: "DML",
    definition: "يُستخدم لتعديل السجلات الموجودة في الجدول.",
    example: "UPDATE users SET age = 26 WHERE id = 1;",
    commonMistakes: "نسيان شرط WHERE، مما يؤدي لتحديث كل الجدول!",
    relatedLessonId: "dml-basics"
  },
  {
    id: "delete",
    term: "DELETE",
    category: "DML",
    definition: "يُستخدم لحذف سجلات موجودة من الجدول.",
    example: "DELETE FROM users WHERE id = 1;",
    commonMistakes: "نسيان شرط WHERE، مما يؤدي لحذف كل البيانات!",
    relatedLessonId: "dml-basics"
  },
  {
    id: "truncate",
    term: "TRUNCATE",
    category: "DML",
    definition: "يُفرغ الجدول تماماً من البيانات بسرعة ويعيد تعيين العدادات.",
    example: "TRUNCATE TABLE logs;",
    note: "أسرع من DELETE ولا يمكن التراجع عنه بسهولة.",
    relatedLessonId: "dml-basics"
  },

  // D) Table Management (DDL)
  {
    id: "create-database",
    term: "CREATE DATABASE",
    category: "DDL",
    definition: "يُستخدم لإنشاء قاعدة بيانات جديدة.",
    example: "CREATE DATABASE SchoolDB;",
    relatedLessonId: "db-table-ops"
  },
  {
    id: "use",
    term: "USE",
    category: "DDL",
    definition: "يستخدم لاختيار قاعدة البيانات التي تريد العمل عليها.",
    example: "USE SchoolDB;",
    relatedLessonId: "db-table-ops"
  },
  {
    id: "drop-database",
    term: "DROP DATABASE",
    category: "DDL",
    definition: "يقوم بحذف قاعدة البيانات بالكامل.",
    example: "DROP DATABASE OldDB;",
    note: "عملية خطيرة لا يمكن التراجع عنها.",
    relatedLessonId: "db-table-ops"
  },
  {
    id: "create-table",
    term: "CREATE TABLE",
    category: "DDL",
    definition: "يُستخدم لإنشاء جدول جديد في قاعدة البيانات.",
    example: "CREATE TABLE Students (ID int, Name varchar(50));",
    relatedLessonId: "db-table-ops"
  },
  {
    id: "alter-table",
    term: "ALTER TABLE",
    category: "DDL",
    definition: "يُستخدم لإضافة، حذف، أو تعديل أعمدة في جدول موجود.",
    example: "ALTER TABLE Students ADD Email varchar(100);",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "drop-table",
    term: "DROP TABLE",
    category: "DDL",
    definition: "يُستخدم لحذف جدول موجود بالكامل (الهيكل والبيانات).",
    example: "DROP TABLE OldData;",
    relatedLessonId: "db-table-ops"
  },

  // E) Constraints
  {
    id: "primary-key",
    term: "PRIMARY KEY",
    category: "Constraints",
    definition: "قيد يحدد بشكل فريد كل سجل في الجدول (لا يقبل NULL ولا التكرار).",
    example: "ID int PRIMARY KEY",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "foreign-key",
    term: "FOREIGN KEY",
    category: "Constraints",
    definition: "قيد لربط جدولين معاً، يشير إلى المفتاح الأساسي في جدول آخر.",
    example: "FOREIGN KEY (StudentID) REFERENCES Students(ID)",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "not-null",
    term: "NOT NULL",
    category: "Constraints",
    definition: "يضمن أن العمود لا يمكن أن يحتوي على قيمة فارغة (NULL).",
    example: "Username varchar(50) NOT NULL",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "unique",
    term: "UNIQUE",
    category: "Constraints",
    definition: "يضمن أن جميع القيم في العمود مختلفة وفريدة.",
    example: "Email varchar(100) UNIQUE",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "default",
    term: "DEFAULT",
    category: "Constraints",
    definition: "يحدد قيمة افتراضية للعمود في حال لم يتم إدخال قيمة.",
    example: "City varchar(50) DEFAULT 'Cairo'",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "check",
    term: "CHECK",
    category: "Constraints",
    definition: "يضمن أن القيم في العمود تحقق شرطاً معيناً.",
    example: "Age int CHECK (Age >= 18)",
    relatedLessonId: "constraints-alter"
  },
  {
    id: "index",
    term: "INDEX",
    category: "Constraints",
    definition: "يستخدم لإنشاء فهارس لتسريع استرجاع البيانات.",
    example: "CREATE INDEX idx_lastname ON Persons (LastName);",
    relatedLessonId: "constraints-alter"
  },

  // F) Joins
  {
    id: "inner-join",
    term: "INNER JOIN",
    category: "Joins",
    definition: "يُرجع السجلات التي لها قيم متطابقة في كلا الجدولين.",
    example: "SELECT * FROM Orders INNER JOIN Customers ON Orders.CustID = Customers.ID;",
    relatedLessonId: "joins-types"
  },
  {
    id: "left-join",
    term: "LEFT JOIN",
    category: "Joins",
    definition: "يُرجع كل السجلات من الجدول الأيسر، والسجلات المطابقة من الجدول الأيمن.",
    example: "SELECT * FROM Students LEFT JOIN Grades ON Students.ID = Grades.StudentID;",
    relatedLessonId: "joins-types"
  },
  {
    id: "right-join",
    term: "RIGHT JOIN",
    category: "Joins",
    definition: "يُرجع كل السجلات من الجدول الأيمن، والسجلات المطابقة من الجدول الأيسر.",
    example: "SELECT * FROM Orders RIGHT JOIN Employees ON Orders.EmpID = Employees.ID;",
    relatedLessonId: "joins-types"
  },
  {
    id: "full-join",
    term: "FULL JOIN",
    category: "Joins",
    definition: "يُرجع كل السجلات عندما يكون هناك تطابق في أي من الجدولين (اليسار أو اليمين).",
    example: "SELECT * FROM TableA FULL JOIN TableB ON TableA.id = TableB.id;",
    relatedLessonId: "joins-types"
  },
  {
    id: "self-join",
    term: "SELF JOIN",
    category: "Joins",
    definition: "ربط عادي ولكن الجدول يتم ربطه بنفسه.",
    example: "SELECT A.Name AS Employee, B.Name AS Manager FROM Employees A, Employees B WHERE A.ManagerID = B.ID;",
    relatedLessonId: "joins-types"
  },

  // G) Functions
  {
    id: "count",
    term: "COUNT",
    category: "Functions",
    definition: "يُرجع عدد الصفوف التي تطابق معايير محددة.",
    example: "SELECT COUNT(*) FROM Products;",
    relatedLessonId: "aggregates"
  },
  {
    id: "sum",
    term: "SUM",
    category: "Functions",
    definition: "يُرجع المجموع الإجمالي لعمود رقمي.",
    example: "SELECT SUM(Quantity) FROM OrderDetails;",
    relatedLessonId: "aggregates"
  },
  {
    id: "avg",
    term: "AVG",
    category: "Functions",
    definition: "يُرجع القيمة المتوسطة لعمود رقمي.",
    example: "SELECT AVG(Price) FROM Products;",
    relatedLessonId: "aggregates"
  },
  {
    id: "max",
    term: "MAX",
    category: "Functions",
    definition: "يُرجع أكبر قيمة في العمود المحدد.",
    example: "SELECT MAX(Price) FROM Products;",
    relatedLessonId: "aggregates"
  },
  {
    id: "min",
    term: "MIN",
    category: "Functions",
    definition: "يُرجع أصغر قيمة في العمود المحدد.",
    example: "SELECT MIN(Price) FROM Products;",
    relatedLessonId: "aggregates"
  },
  {
    id: "concat",
    term: "CONCAT",
    category: "Functions",
    definition: "يُستخدم لدمج سلسلتين أو أكثر من النصوص.",
    example: "SELECT CONCAT(FirstName, ' ', LastName) FROM Users;",
    relatedLessonId: "aggregates"
  },
  {
    id: "upper",
    term: "UPPER",
    category: "Functions",
    definition: "تحول النص إلى حروف كبيرة.",
    example: "SELECT UPPER(Name) FROM Users;",
    relatedLessonId: "aggregates"
  },
  {
    id: "lower",
    term: "LOWER",
    category: "Functions",
    definition: "تحول النص إلى حروف صغيرة.",
    example: "SELECT LOWER(Name) FROM Users;",
    relatedLessonId: "aggregates"
  }
];


export const resources = [
  { title: " SQL ملخص في أساسيات أوامر  ", type: "Internal", link: "#/reference/lec1" },
  { title: " العمليات المتقدمة والقيود ", type: "Internal", link: "#/reference/lec2" },
  { title: " موقع ما يكروسوفت الرسمي في شرح قواعد البيانات ", type: "Internal", link: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver17&utm_source=chatgpt.com" },
  { title: " W3Schools SQL ", type: "Internal", link: "https://www.w3schools.com/sql/default.asp" },
  { title: "تحميل وتثبيت SQL Server & SSMS", type: "YouTube", link: "https://youtu.be/3kPZLsLoM_o?si=Jnpo0ToCvU2szUct" },
  { title: "سلسلة دروس عملية شاملة ", type: "YouTube", link: "https://youtube.com/playlist?list=PLyFpzCU4VP3k-3I7dQwvNOovyxmNxnfcu&si=_8fsY6tWULbYL8XM" },
    { title: "SQL Server Tutorial Full Course ", type: "YouTube", link: "https://youtube.com/playlist?list=PLyFpzCU4VP3k-3I7dQwvNOovyxmNxnfcu&si=_8fsY6tWULbYL8XM" },

];