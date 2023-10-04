import { useEffect, useState } from "react"



function Ex_useEffect() {
  const [weight, setWeigth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [bmi, setBMI] = useState<number | null>(null);


  const setWeigthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeigth(Number(e.target.value));
  }
  const setHeigthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  }


  const calculatedBMI = () => {
    if (weight !== null && height !== null) {
      setBMI(Number((weight / height * height).toFixed(1)));
    }
  }

  useEffect(() => {
    if (bmi !== null) {
      const type = setType(bmi);
    }
  }, [bmi]);


  return (
    <div>
      <h1>Ex:useEffect</h1>
      <input type="number" placeholder="Nhập cân nặng" onChange={setWeigthInput} /><br />
      <input type="number" placeholder="Nhập chiều cao" onChange={setHeigthInput} /><br />
      <button onClick={calculatedBMI}>Tính toán</button>
      <p>{bmi}</p>
    </div>
  )
}

function setType(bmi: number): string {
  switch (true) {
    case bmi < 18.5:

      return "gầy";
    case bmi < 25:

      return "bình thương";

    default:
      return "thừa cân"
  }
}

export default Ex_useEffect
