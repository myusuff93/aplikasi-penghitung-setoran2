let pendapatan = 0;

const tombolJumlah = document.getElementById("btnJumlahkanPendapatanShift");

tombolJumlah.addEventListener("click", function () {
  const pendapatanShift1 = Number(document.getElementById("shift1").value);
  const pendapatanShift2 = Number(document.getElementById("shift2").value);
  const pendapatanShift3 = Number(document.getElementById("shift3").value);

  if (
    pendapatanShift1 === 0 ||
    pendapatanShift2 === 0 ||
    pendapatanShift3 === 0
  ) {
    alert("Silahkan input pendapatan shift terlebih dahulu");
    return;
  }

  pendapatan = pendapatanShift1 + pendapatanShift2 + pendapatanShift3;

  const hasilJumlahPendapatan = document.getElementById(
    "hasilJumlahPendapatanShift",
  );
  hasilJumlahPendapatan.textContent = pendapatan;
});

const tombolHitungSelisih = document.getElementById("btnHitungSelisih");
tombolHitungSelisih.addEventListener("click", () => {
  const setoran = Number(document.getElementById("totalSetoran").value);
  const selisih = setoran - pendapatan;

  const hasilSelisihEl = document.querySelector(".hasilSelisih");

  let status = "";

  if (selisih === 0) {
    status = `${selisih} setoran PAS`;
  } else {
    status = `kurang ${selisih}, harus nombok = ${selisih}`;
  }

  hasilSelisihEl.textContent = `${status}`;
});
