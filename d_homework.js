/*
| บรรทัดโค้ด                              | ทำอะไร                                                    |
|----------------------------------------|----------------------------------------------------------|
| const calcFare = (distanceKm) => {     | สร้างฟังก์ชัน arrow ชื่อ calcFare รับ distanceKm เป็นพารามิเตอร์ |
| if (!Number.isFinite(distanceKm) || distanceKm <= 0) return 0; | ตรวจว่า distanceKm เป็นตัวเลขจริง且มากกว่า 0 ถ้าไม่ใช่คืน 0 |
| Math.ceil(distanceKm)                  | ปัดเศษกิโลเมตรขึ้น เช่น 7.2 → 8                            |
| Math.max(0, ...)                       | ถ้าผลลัพธ์ติดลบให้ใช้ 0 แทน (กันค่าผิดปกติ)                |
| Math.ceil(distanceKm) - 2              | ลบ 2 กม.แรกออก เพราะ 2 กม.แรกคิดเหมา 10 บาท              |
| ... * 2                                | คูณจำนวนกิโลเมตรที่เหลือด้วยค่า กม.ละ 2 บาท             |
| 10 + ...                               | บวกค่าเหมา 2 กม.แรก (10 บาท) เข้าไป                     |
| return 10 + Math.max(0, Math.ceil(distanceKm) - 2) * 2; | ส่งค่าfare ทั้งหมดกลับเป็นค่าส่งกลับของฟังก์ชัน |
| console.log(calcFare(1.5));            | ทดสอบ case 1.5 กม. อยู่ใน 2 กม.แรก → คืน 10            |
| console.log(calcFare(7.2));            | ทดสอบ case 7.2 กม. → ceil=8, เหลือ 6 กม.×2=12, รวม 22  |
*/
const calcFare = (distanceKm) => {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return 0;
  return 10 + Math.max(0, Math.ceil(distanceKm) - 2) * 2;
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22