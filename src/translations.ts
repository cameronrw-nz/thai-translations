
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
---
อาพาตามาดูรูปู อา พา ตา มา ดู รู ปู
ตาดูหูลา,หูลามีรู ตา ดู หู ลา หู ลา มี รู-
ลาดูงู ลา ดู รู 
ผมอยากไปเที่ยวสุดสัปดาห์นี้ ผม อยาก ไป เที่ยว สุดสุปดาห์ นี่
ผมอาศัยอยุ่ในประเทศไทยเป็นเวลา6ปี ผม อาศัยอยุ่ ใน ประเทศ ไทย เป็น เวลา 6 ปี
`