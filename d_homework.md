// ✅ ข้อ 1: แยก magic numbers ออกมาเป็นค่าคงที่
const BASE_FARE = 10;
const BASE_DISTANCE = 2;
const RATE_PER_KM = 2;

const calcFare = (distanceKm) => {
  // ✅ ข้อ 2: coerce string เป็น number ก่อน validate
  const dist = Number(distanceKm);

  // ตรวจสอบว่าเป็นตัวเลขจริงและมากกว่า 0
  if (!Number.isFinite(dist) || dist <= 0) return 0;

  // คำนวณค่าโดยสาร
  const extraKm = Math.max(0, Math.ceil(dist) - BASE_DISTANCE);
  return BASE_FARE + extraKm * RATE_PER_KM;
};

// ✅ ข้อ 3: JSDoc สำหรับ documentation
/**
 * คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
 * @param {number|string} distanceKm - ระยะทางเป็นกิโลเมตร
 * @returns {number} ค่าโดยสาร (บาท)
 */
const calcFareDoc = calcFare;
สรุป: โค้ดเดิมทำงานได้ถูกต้อง แต่ไม่แข็งแรงพอสำหรับ production — เรื่อง magic numbers เป็นสิ่งที่ senior dev ให้ความสำคัญสูงสุดเพราะส่งผลต่อการ maintenance ตรงๆ