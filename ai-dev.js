const calcFare = (distanceKm) => {
  // ตรวจสอบระยะทางให้ถูกต้อง
  if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const roundedDistance = Math.ceil(distanceKm);
  return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(7.2));

console.assert(calcFare(1.5) === 10, "1.5 กม. ต้องคิด 10 บาท");
console.assert(calcFare(2) === 10, "2 กม. ต้องคิด 10 บาท");
console.assert(calcFare(7.2) === 22, "7.2 กม. ต้องคิด 22 บาท");
console.assert(calcFare(-1) === 0, "ระยะทางติดลบต้องคืนค่า 0");
console.assert(calcFare("2") === 0, "ค่าที่ไม่ใช่ตัวเลขต้องคืนค่า 0");
