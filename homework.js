// calcFare: คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม.แรก 10 บาท, กม.ถัดไป กม.ละ 2 บาท, เศษของกม.ปัดขึ้น
const calcFare = (distanceKm) => {
  // ระยะทางต้องเป็นตัวเลขที่ถูกต้องและมากกว่า 0
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return 0;

  // ปัดระยะทางขึ้น แล้วหัก 2 กม.แรก (ไม่คิดค่าแรกเริ่มเกิน)
  return 10 + Math.max(0, Math.ceil(distanceKm) - 2) * 2;
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22