
export interface ITranslation {
    english: string[];
    thai: string[];
    sentence: string;
    words: string[];
}

export function ProcessTranslations(): ITranslation[] {
    const allLines = Translations.split("---");
    const lines = allLines[0].split("\n");

    const translations: ITranslation[] = []
    lines.forEach(line => {
        if (!line) {
            return;
        }
        const parts = line.split(" ")
        const [english, thai, sentence, ...words] = parts

        translations.push({
            english: english.split(","),
            thai: thai.split(","),
            sentence,
            words
        })
    })

    return translations
}

interface ILine {
    sentences: string[];
    words: string[]

}

export const Translations = `
Donkey ลา ลาดูงู ลา ดู งู
Snake งู งูดูปู งู ดู ปู
Watching,Looking ดู ดูทีวี ดู ทีวี
TV ทีวี ดูทีวี ดู ทีวี
Hit ตี อีกาตีงู อีกา ตี งู
Leg ขา ลามี4ขา ผม มี ขา
Medicine,Drug ยา ทายา ทา ยา
Lid ฝา คุฌช่วยส่งฝาให้ฉันได้ไหม คุฌ ช่วย ส่ง ฝา ไห้ ฉัน ได้ ไหม
Eye ตา ลิงมี2ตา ลิง มา ตา
Grandpa ตา ตาพาอามาศาลา ตา พา อา มา ศาลา
Horn,Sesame งา ช้างมีงา ช้าง มี งา
Field นา นามีรูงู นา มี รู งู
Apply ทา อาทายาชาขาตา อา ทา ยา ชา ขา ตา
Paint ทาสี ผมกำลังทาสีSylvanethสีน้ำตาล ผม กำลัง ทาสี สีน้ำตาล
Minutes นาที รอ10นาที รอ นาที
Year ปี ปีอะไร ปี อะไร
Cat แมว ผมมี2แมว ผม มี แมว
Day วัน วันนี้เป็นวันจันทร์ วัน นี้ เป็น วันจันทร์
Monday วันจันทร์ วันนี้เป็นวันจันทร์ วัน นี้ เป็น วันจันทร์
Tuesday วันอังคาร วันนี้เป็นวันอังคาร วัน นี้ เป็น วันอังคาร
Wednesday วันพธ วันนี้เป็นวันพธ วัน นี้ เป็น วันพธ
Thursday วันพฤหัสบดี วันนี้เป็นวันพฤหัสบดี วัน นี้ เป็น วันพฤหัสบดี 
Friday วันสุกร์ วันนี้เป็นวันสุกร์ วัน นี้ เป็น วันสุกร์
Saturday วันเสาร์ วันนี้เป็นวันเสาร์ วัน นี้ เป็น วันสุกร์
Sunday วันอาทิตย์ วันนี้เป็นวันอาทิตย์ วัน นี้ เป็น วันอาทิตย์
Book หนังสือ ผมมีหนังสือ ผม มี หนังสือ
Laptop แล็ปท็อป ผมมีแล็ปท็อป ผม มี แล็ปท็ป
Night กลางคืน,คืน เมื่อคืนผมดูหนัง เมื่อ คืน ผม ดู หนัง
Japan ญี่ปุ่น ข้าวญี่ปุ่นดีกว่าข้าวไทย ข้าว ญี่ปุ่น ดีกว่า ข้าว ไทย
Better ดีกว่า เย็นดีกว่าร้อน เย็น ดีกว่า ร้อน
Hot ร้อน ประเทศไทยร้อนมาก ประเทศ ไทย ร้อน มาก
Country ประเทศ ผมยุ่ประเทศไทย ผม ยุ่ ประเทศ ไทย
I ผม,ฉัน ฉันอิ่มแล้ว ฉัน อิ่ม แลัว
No,Not ไม่ ผมไม่อยากทำงาน ผม ไม่ อยาก ทำงาน
Is,Are เป็น คัตสึเป็นควาย คัตสึ เป็น ควาย
Have มี หูลามีรู หู ลา มี รู
Crab ปู ผมไม่กินปู ผม ไม่ กิน ปู
Hole รู ชุดชั้นในของฉันมีรู ชุด ชั้น ใน ของ ฉัน มี รู
Ear หู หูของนันบันสกปรก หู ของ นันบัน สกปรก
Rub,Scrub ถู คัตสึชอบถูหลัง คัตสึ ชอบ ถู หลัง
Ditch,Canal คู อย่านอนในคูน้ำ อย่า นอน ใน คู น้ำ
Snake งู งูไม่ควรอยู่ในบ้าน งุ ไม่ ควร อยู่ ใน บ้าน
Circle วงกลม Naเป็นวงกลม เป็น วงกลม
Think คิด ฉันคิดว่างานนั้นน่าเบื่อ ฉัน คิด ว่า งาน นั้น น่าเบื่อ
Shirt เสื้อ ฉันมีเสื้อสีน้ำเงินหลายตัว ฉัน มี เสื้อ สีน้ำเงิน หลาย ตัว
Buttons กระดุม เสื้อบางตัวมีกระดุม เสื้อ บาง ตัว มี กระดุม
Face หน้า ทุกคนมีหน้า ทุก คน มี หน้า
Know รู้จัก ผมรู้จักคุณ ผม รุ้จัก คุณ
Clock นาฬิกา นาฬิกาแสดงเวลา นาฬิกา แสดง เวลา
Fan พัดลม ใช้พัดลมถูกกว่าแอร์ ใช้ พัดลม ถูก กว่า แอร์
Triangle สามเหลี่ยม 
Tree ต้นไม้ ต้นไม้เป็นสี่งที่ดีสำหรับโลก ต้นไม้ เป็น สี่ง ที่ ดี สำหรับ โลก
Umbrella ร่มใช้ในลายฝน ร่ม ใช้ ใน สายฝน
Tell บอก ผมบอกแล้ว ผม บอก แล้ว
Nose จมูก คุณมีจมูกใหญ่ คุณ มี จมูก ใหญ่
Forget ลืม ผมลืมแขวนผ้า ผม ลืม แขวน ผ้า
Ready พร้อม คุณพร้อมไหม คุณ พร้อม ไหม
Correct ถูกต้อง ผมคิดประโยคที่ถูกต้องไม่ออก ผม คิด ประโยด ที่ ถูกต้อง ไท่ ออก
Oval วงรี มะม่วงเป็นวงรี มะม่วง เป็น วงรี
Pineapple สับปะรด ประเทศไทยชอบสับปะรดมีอยู่ทั่วไป ประเทศ ไทย ชอบ ศับปะรด มี อยู่ ทั่วไป
Question คำภาม ผมถูกถามคำถามมากมายในที่ทำงาน ผม ถูกถาม คำถาม มาก มาย ใน ที่ ทำงาน
Watermelon แตงโม แตงโมมีเมล็ดมาก แตงโม มี เมล็ด มาก
See เห็น ผมไม่เห็นคุณ ผม ไม่ เห็น คุณ
Know รู้ ผมไม่รู้จักชื่อของคุณ ผม ไม่ รู้ จัก ชื่อ ของ คุณ
Mango มะม่วง ข้าวเหนียวมะม่วงอร่อยมาก ข้าว เหนียว มะม่วง อร่อย มาก
Durian ทุเรียน ทุเรียนมีกลิ่นไม่ดี ทุเรียน มี กลิ่น มไ่ ดี
Drunk เมา ผทไท่เคยเมา ผม ไม่ เคย เมา
Dragon-fruit แก้วมังกร ผมไม่ชอบแก้วมังกร ผม ไม่ ชอบ แก้วมัทดร
Banana กล้วย ฝรั่งบอกว่าควยแทนกล้วย ฝรั่ง บอก ว่า ควย แทน กล้วย
Grape องุ่น คุณซื้อ องุ่นจำนวนมากในคราวเดียว คุณ ซื้อ องุ่น จำนวนมาก ใน คราว เดียว
Big ใหญ่ คัตสึเป็นแมวตัวไหณ่ คัตสึ เป็น แมว ตัว ไหญ่
Small เล็ก คัตสึเป็นลูกแมวตัวเล็กฯ คัตสึ เป็น ลูกแมว ตัว เล็ก
Door ประตู ประตูเปิดอยู่ ประตู เปิด อยู่
Roof หลังคา หลังคาเป็นสีเทา หลังคา เป็น สี เทา
Window หน้าต่าง หน้าต่างปิดอยู่ หน้าต่าง ปิด อยู่
Wall ผนัง
Bedroom ห้องนอน ห้องนอนอยุ่ที่นั่น ห้องนอน อยู่ ที่ นั่น
Stairs บันได
Kitchen ครัว
House บ้าน มี่บ้านของเรา มี่ บ้าน ของ เรา
Brave กล้าหาญ 
Shy ขี้อาย
Kind ใจดี่
Funny ตลก
์์Name ชื่อ ชื่อของคุณคืออะไร ชื่อ ของ คุณ คือ อะไร
Age อายุ คุณอายุเท่าไหร่ คุณ อายุ เท่าไหร่
Week สัปดาห์ ผมอยากไปเที่ยวสุดสัปดาห์นี้ ผม อยาก ไป เที่ยว สุดสุปดาห์ นี่
Month เดือน ผมอยากไปเที่ยวเดือนหน้า ผม อยาก ไป เที่ยว เดือน หน้า
Hello สวัสดี สวัสดีครับ สวัสดี ครับ
Error ผิดพลาด ผมทำผิดพลาด ผม ทำ ผิดพลาด
Bridge สะพาน สะพานเป็นสีเขียว สะพาน เป็น สี เขียว
River แม่น้ำ แม่น้ำเป็นสายน้ำที่ยาว แม่น้ำ เป็น สายน้ำ ที่ ยาว
A-lot มาก ผมชอบกินมาก ผม ชอบ กิน มาก
Buy ซื้อ ผมซื้อของใหม่ ผม ซื้อ ของ ใหม่
Already แล้ว ผมกินข้าวแล้ว ผม กิน ข้าว แล้ว
Come มา คุณมาที่นี่ คุณ มา ที่ นี่
Person คน คนนั้นเป็นคนดี คน นั้น เป็น คน ดี
Every ทุก ทุกคนที่นี่เป็นคนดี ทุก คน ที่ นี่ เป็น คน ดี
Time เวลา ผมมีเวลาว่าง ผม มี เวลา ว่าง
Shop ร้าน ร้านของฉัน ร้าน ของ ฉัน
Secondary รอง รองเท้าของฉัน รอง เท้า ของ ฉัน
Shoe รองเท้า รองเท้าของฉัน รองเท้า ของ ฉัน
Feet เท้า ผมมี2เท้า ผม มี 2 เท้า
In ใน ผมอาศัยอยุ่ในประเทศไทยเป็นเวลา6ปี ผม อาศัยอยุ่ ใน ประเทศ ไทย เป็น เวลา 6 ปี
One ตัว คุณมีแมวตัวเดียว คุณ มี แมว ตัว เดียว
The ที่ ที่นี่เป็นที่สุดที่สวยที่สุด ที่ นี่ เป็น ที่ สุด ที่ สวย ที่ สุด
The-most ที่สุด ที่นี่เป็นที่สุดที่สวยที่สุด ที่ นี่ เป็น ที่ สุด ที่ สวย ที่ สุด
From จาก ผมมาจากประเทศอังกฤษ ผม มา จาก ประเทศ อังกฤษ
Translate แปล แปลคำศัพท์นี้ให้ผมฟัง แปล คำศัพท์ นี้ ให้ ผม ฟัง
Lion สิงโต สิงโตเป็นสัตว์ที่อยู่ในป่า สิงโต เป็น สัตว์ ที่ อยู่ ใน ป่า
Question-particle ไหม คุณชอบกินข้าวไหม คุณ ชอบ กิน ข้าว ไหม
Little น้อย น้อยกว่านี้ไม่ได้ น้อย กว่า นี้ ไม่ ได้
At-all เลย ผมไม่เข้าใจเลย ผม ไม่ เข้าใจ เลย
Give ให้ ให้ฉันดูรูปนี้ ให้ ฉัน ดู รูป นี้
Who ใคร ใครชอบกินข้าว ใคร ชอบ กิน ข้าว
Ever เคย ผมเคยไปเที่ยวทะเล ผม เคย ไป เที่ยว ทะเล
Set ตั้ง ตั้งเวลาปลุกตัวเอง ตั้ง เวลา ปลุก ตัว เอง
Not-yet ยัง ผมยังไม่กินข้าว ผม ยัง ไม่ กิน ข้าว
Enough พอ ผมกินข้าวพอแล้ว ผม กิน ข้าว พอ แล้ว
Book หนังสือ ผมมีหนังสือ ผม มี หนังสือ
Just แค่ ผมแค่กินข้าว ผม แค่ กิน ข้าว
Owner เจ้า ผมเป็นเจ้าของร้าน ผม เป็น เจ้าของ ร้าน
Grown-up โต ผมโตแล้ว ผม โต แล้ว
City เมือง ผมอาศัยอยู่ในเมือง ผม อาศัย อยู่ ใน เมือง
This นี้ นี่คือหนังสือ นี่ คือ หนังสือ
Different ต่าง ผมชอบสีต่าง ผม ชอบ สี ต่าง
Sector ภาค ภาคเหนือของประเทศไทย ภาค เหนือ ของ ประเทศ ไทย
At ที่ ที่นี่เป็นที่สุดที่สวยที่สุด ที่ นี่ เป็น ที่ สุด ที่ สวย ที่ สุด
King ราชา ราชาเป็นคนดี ราชา เป็น คน ดี
Look-for หา ผมหาหนังสือ ผม หา หนังสือง
Take พา อาพาตามาดูรูปู อา พา ตา มา ดู รู ปู
Sport กีฬา ผมชอบเล่นกีฬา ผม ชอบ เล่น กีฬา
Good ดี ข้าวญี่ปุ่นดีกว่าข้าวไทย ข้าว ญี่ปุ่น ดีกว่า ข้าว ไทย
No ไม่ ผมไม่อยากทำงาน ผม ไม่ อยาก ทำงาน
Ghosts ผี ผีมีในนิทาน ผี มี ใน นิทาน
Room ห้อง ห้องนี้มีหลายห้อง ห้อง นี้ มี หลาย ห้อง
Field นา นามีรูงู นา มี รู งู
Frog กบ กบเป็นสัตว์ที่อยู่ในน้ำ กบ เป็น สัตว์ ที่ อยู่ ใน น้ำ
Vowel สระ สระอะไรที่คุณชอบ สระ อะไร ที่ คุณ ชอบ
Person คน คนนั้นเป็นคนดี คน นั้น เป็น คน ดี
You คุณ คุณชื่ออะไร คุณ ชื่อ อะไร
Long ยาว ผมมีผมยาว ผม มี ผม ยาว
Hand มือ มือของผม มือ ของ ผม
Numb ชา ผมชามือ ผม ชา มือ
Tea ชา ชาเขียวช่วยลดน้ำหนัก ชา เขียว ช่วย ลด น้ำหนัก
From...To... จาก...ถึง... จากประเทศไทยถึงประเทศอังกฤษ จาก ประเทศ ไทย ถึง ประเทศ อังกฤษ
Since...To... ตั้งแต่...ถึง... ตั้งแต่เมื่อไหร่ถึงเมื่อไหร่ ตั้งแต่ เมื่อไหร่ ถึง เมื่อไหร่
Exercise ออกกำลัง ผมออกกำลังกายทุกวัน ผม ออกกำลัง กาย ทุก วัน
Island เกาะ ผมอยากไปเที่ยวเกาะ ผม อยาก ไป เที่ยว เกาะ
Female-maid แม่บ้าน แม่บ้านทำงานหลายอย่าง แม่บ้าน ทำงาน หลาย อย่าง
Male-maid พ่อบ้าน พ่อบ้านทำงานหลายอย่าง พ่อบ้าน ทำงาน หลาย อย่าง
Female-chef แม่ครัว แม่ครัวทำอาหารอร่อย แม่ครัว ทำ อาหาร อร่อย
Male-chef พ่อครัว พ่อครัวทำอาหารอร่อย พ่อครัว ทำ อาหาร อร่อย
Room ห้อง ห้องนี้มีหลายห้อง ห้อง นี้ มี หลาย ห้อง
Bathroom ห้องน้ำ ห้องน้ำอยู่ที่ไหน ห้อง น้ำ อยู่ ที่ ไหน
Classroom ห้องเรียน ห้องเรียนอยู่ที่ไหน ห้อง เรียน อยู่ ที่ ไหน
Bedroom ห้องนอน ห้องนอนอยุ่ที่นั่น ห้องนอน อยู่ ที่ นั่น
Kitchen ห้องครัว ห้องครัวอยู่ที่ไหน ห้อง ครัว อยู่ ที่ ไหน
Living-room ห้องนั่งเล่น ห้องนั่งเล่นอยู่ที่ไหน ห้อง นั่ง เล่น อยู่ ที่ ไหน
Dining-room ห้องอาหาร ห้องอาหารอยู่ที่ไหน ห้อง อาหาร อยู่ ที่ ไหน
Office ห้องทำงาน ห้องทำงานอยู่ที่ไหน ห้อง ทำงาน อยู่ ที่ ไหน
Hospital โรงพยาบาล โรงพยาบาลอยู่ที่ไหน โรงพยาบาล อยู่ ที่ ไหน
Market ตลาด ตลาดอยู่ที่ไหน ตลาด อยู่ ที่ ไหน
Temple วัด วัดอยู่ที่ไหน วัด อยู่ ที่ ไหน
School โรงเรียน โรงเรียนอยู่ที่ไหน โรง เรียน อยู่ ที่ ไหน
University มหาวิทยาลัย มหาวิทยาลัยอยู่ที่ไหน มหาวิทยาลัย อยู่ ที่ ไหน
ฺBalcony ระเบียง ระเบียงอยู่ที่ไหน ระเบียง อยู่ ที่ ไหน
to-iron รีด ผมรีดเสื้อผ้า ผม รีด เสื้อผ้า
to-wash ซัก ผมซักผ้า ผม ซัก ผ้า
to-dry ตาก ผมตากผ้า ผม ตาก ผ้า
to-collect เก็บ ผมเก็บของ ผม เก็บ ของ
to-fold พับ ผมพับเสื้อผ้า ผม พับ เสื้อผ้า
to-wash ล้าง ผมล้างจาน ผม ล้าง จาน
to-wipe เช็ด ผมเช็ดโต๊ะ ผม เช็ด โต๊ะ
to-sweep กวาด ผมกวาดบ้าน ผม กวาด บ้าน
to-vacuum ดูด ผมดูดบ้าน ผม ดูด บ้าน
to-mop ถู ผมถูพื้น ผม ถู พื้น
Cloth ผ้า ผมซักผ้า ผม ซัก ผ้า
Clothes เสื้อผ้า ผมรีดเสื้อผ้า ผม รีด เสื้อผ้า
to-wash-hair สระผม ผมสระผม ผม สระ ผม
Hair ผม ผมสวย ผม สวย
Shop ร้าน ร้านของฉัน ร้าน ของ ฉัน
To-do ทำ ผมทำงาน ผม ทำ งาน
Clean สะอาด บ้านของฉันสะอาด บ้าน ของ ฉัน สะอาด
Dirty สกปรก ห้องน้ำสกปรก ห้อง น้ำ สกปรก
...ing กำลัง ผมกำลังทำงาน ผม กำลัง ทำ งาน
do-for ให้ ให้ฉันดูรูปนี้ ให้ ฉัน ดู รูป นี้
to-do-oneself เอง ผมทำเอง ผม ทำ เอง
alone คนเดียว ผมอยู่คนเดียว ผม อยู่ คน ดียว
Vocabulary คำศัพท์ คำศัพท์นี้คืออะไร คำศัพท์ นี้ คือ อะไร
That(Conjunction) ว่า ผมคิดว่างานนั้นน่าเบื่อ ผม คิด ว่า งาน นั้น น่าเบื่อ
Word คำ คำนี้คืออะไร คำ นี้ คือ อะไร
Of ของ ของฉัน ของ ฉัน
Shower อาบน้ำ ผมอาบน้ำ ผม อาบ น้ำ
Brush-Teeth แปรงฟัน ผมแปรงฟัน ผม แปรง ฟัน
Flea-market ตลาดนัด ตลาดนัดอยู่ที่ไหน ตลาด นัด อยู่ ที่ ไหน
Boat เรือ ผมชอบเรือ ผม ชอบ เรือ
Embark ขึ้น ขึ้นรถไฟฟ้า ขึ้น รถไฟฟ้า
Disembark ลง ลงจากเรือ ลง จาก เรือ
Overlap ซ้อน ซ้อนกัน ซ้อน กัน
Fry ทอด ผมชอบกินอาหารทอด ผม ชอบ กิน อาหาร ทอด
Stir-fry ผัด ผัดกะเพรา ผัด กะเพรา
Bake อบ ผมชอบกินขนมอบ ผม ชอบ กิน ขนม อบ
Roast ย่าง ผมชอบกินเนื้อย่าง ผม ชอบ กิน เนื้อ ย่าง
Grill ย่าง ผมชอบกินเนื้อย่าง ผม ชอบ กิน เนื้อ ย่าง
Grill-on-stick ปิ้ง ผมชอบกินปลาปิ้ง ผม ชอบ กิน ปลา ปิ้ง
Boil ต้ม ผมชอบกินข้าวต้ม ผม ชอบ กิน ข้าว ต้ม
Steam-food นึ่ง ผมชอบกินอาหารนึ่ง ผม ชอบ กิน อาหาร นึ่ง
Near ใกล้ โรงเรียนอยู่ใกล้บ้าน โรง เรียน อยู่ ใกล้ บ้าน
Far ไกล โรงเรียนอยู่ไกลจากบ้าน โรง เรียน อยู่ ไกล จาก บ้าน
Fast เร็ว รถเร็วมาก รถ เร็ว มาก
Slow ช้า รถช้ามาก รถ ช้า มาก
Tall สูง คัตสึเป็นคนสูง คัตสึ เป็น คน สูง
Short สั้น คัตสึเป็นคนสั้น คัตสึ เป็น คน สั้น
Short เตี้ย คัตสึเป็นคนเตี้ย คัตสึ เป็น คน เตี้ย
Big ใหญ่ คัตสึเป็นคนใหญ่ คัตสึ เป็น คน ใหญ่
Small เล็ก คัตสึเป็นคนเล็ก คัตสึ เป็น คน เล็ก
Sleepy ง่วง ผมง่วง ผม ง่วง
Tired(adjective) เหนื่อย ผมเหนื่อย ผม เหนื่อย
Tired เนื่อย ผมเนื่อย ผม เนื่อย
Heavy หนัก กระเป๋าของฉันหนัก กระเป๋า ของ ฉัน หนัก
Light เบา กระเป๋าของฉันเบา กระเป๋า ของ ฉัน เบา
Difficult ยาก งานนี้ยาก งาน นี้ ยาก
Easy ง่าย งานนี้ง่าย งาน นี้ ง่าย
Diligent ขยัน คนขยันจะสำเร็จ คน ขยัน จะ สำเร็จ
Lazy ขี้เกียจ คนขี้เกียจจะไม่สำเร็จ คน ขี้เกียจ จะ ไม่ สำเร็จ
Like ชอบ ผมชอบกินข้าว ผม ชอบ กิน ข้าว
Colour สี ผมชอบสีน้ำเงิน ผม ชอบ สี น้ำเงิน
Language ภาษา ภาษาอังกฤษ ภาษา อังกฤษ
Pen ปากกา ปากกาของฉัน ปากกา ของ ฉัน
Pencil ดินสอ ดินสอของฉัน ดินสอ ของ ฉัน
Speak พูด ผมพูดภาษาอังกฤษ ผม พูด ภาษา อังกฤษ
What อะไร อะไรคืออะไร อะไร คือ อะไร
Have มี ผมมีหนังสือ ผม มี หนังสือ
That นั้น งานนั้นง่าย งาน นั้น ง่าย
Yes ใช่ คุณชอบกินข้าวใช่ไหม คุณ ชอบ กิน ข้าว ใช่ ไหม
Thai ไทย ผมเป็นคนไทย ผม เป็น คน ไทย
Called เรียก คุณชื่ออะไรเรียก คุณ ชื่อ อะไร เรียก
Sky ฟ้า ฟ้าสวยมาก ฟ้า สวย มาก
England อังกฤษ ผมมาจากประเทศอังกฤษ ผม มา จาก ประเทศ อังกฤษ
This นี้ นี่คือหนังสือ นี่ คือ หนังสือ
Excuse-me ขอโทษ ขอโทษครับ ขอโทษ ครับ
Comfortable สบาย ที่นั่นสบายมาก ที่ นั่น สบาย มาก
He เขา เขาชื่ออะไร คุณ ชื่อ อะไร
Orange ส้ม ผมชอบกินส้ม ผม ชอบ กิน ส้ม
Red แดง ผมชอบสีแดง ผม ชอบ สี แดง
Wrong ผิด ผมทำผิด ผม ทำ ผิด
Understand เข้าใจ ผมเข้าใจ ผม  เข้าใจ
Special พิเศษ วันเกิดคุณพิเศษ วัน เกิด คุณ พิเศษ
Suppose สมมุติ ถ้าฉันเป็นคุณสมมติว่าฉันจะทำอย่างไร ถ้า ฉัน เป็น คุณ สมมติ ว่า ฉัน จะ ทำ อย่างไร
Sell ขาย ผมขายของ ผม ขาย ของ
Discount ลด ลดราคา ลด ราคา
Make-up แต่งหน้า ผมแต่งหน้า ผม แต่ง หน้า
Beautiful สวย คุณสวยมาก คุณ สวย มาก
Work ทำงาน ผมทำงาน ผม ทำ งาน
Normally ปกติ ผมทำตามปกติ ผม ทำ ตาม ปกติ
Teacher ครู ครูคนนี้สอนดี ครู คน นี้ สอน ดี
Sleep นอน ผมนอน ผม นอน
Must ต้อง ผมต้องทำงาน ผม ต้อง ทำ งาน
Water น้ำ ผมกินน้ำ ผม กิน น้ำ
Doctor หมอ หมอคนนี้ดี หมอ คน นี้ ดี
Visa วีซ่า ผมต้องการวีซ่า ผม ต้องการ วีซ่า
Late-night ดึก ผมกินข้าวดึก ผม กิน ข้าว ดึก
Plane เครื่องบิน ผมชอบเครื่องบิน ผม ชอบ เครื่องบิน
Ticket ตั๋ว ผมต้องการตั๋ว ผม ต้องการ ตั๋ว
Will จะ ผมจะไปเที่ยว ผม จะ ไป เที่ยว
But แต่ ผมชอบกินข้าวแต่ไม่ชอบกินผัก ผม ชอบ กิน ข้าว แต่ ไม่ ชอบ กิน ผัก
And และ ผมชอบกินข้าวและกินผัก ผม ชอบ กิน ข้าว และ กิน ผัก
Friend เพื่อน คุณเป็นเพื่อนของฉัน คุณ เป็น เพื่อน ของ ฉัน
Go ไป ผมไปที่ไหน ผม ไป ที่ ไหน
Come มา คุณมาที่นี่ คุณ มา ที่ นี่
Or หรือ คุณชอบกินข้าวหรือไม่ คุณ ชอบ กิน ข้าว หรือ ไม่
---
อาพาตามาดูรูปู อา พา ตา มา ดู รู ปู
ตาดูหูลา,หูลามีรู ตา ดู หู ลา หู ลา มี รู-
ลาดูงู ลา ดู รู 
ผมอยากไปเที่ยวสุดสัปดาห์นี้ ผม อยาก ไป เที่ยว สุดสุปดาห์ นี่
ผมอาศัยอยุ่ในประเทศไทยเป็นเวลา6ปี ผม อาศัยอยุ่ ใน ประเทศ ไทย เป็น เวลา 6 ปี
---
Long 
Short
Coconut
Passion Fruit
Green
Red
Blue
Yellow
Black
White
Purple
Pink
Green
Rice
`