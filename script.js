let pendapatan = 0;

const tombolJumlah = document.getElementById("btnJumlahkanPendapatanShift");

tombolJumlah.addEventListener("click", function () {
  const pendapatanShift1 = Number(document.getElementById("shift1").value);
  const pendapatanShift2 = Number(document.getElementById("shift2").value);
  const pendapatanShift3 = Number(document.getElementById("shift3").value);
  const pendapatanVoucher = Number(document.getElementById("vcr").value);

  if (
    pendapatanShift1 === 0 ||
    pendapatanShift2 === 0 ||
    pendapatanShift3 === 0 ||
    pendapatanVoucher === 0
  ) {
    alert("Silahkan input pendapatan shift terlebih dahulu");
    return;
  }

  pendapatan =
    pendapatanShift1 + pendapatanShift2 + pendapatanShift3 + pendapatanVoucher;

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
    status = `setoran PAS`;
  } else {
    status = `setoran kurang = ${selisih}`;
  }

  hasilSelisihEl.textContent = `${status}`;
});

const tombolReset = document.getElementById("btnReset");
tombolReset.addEventListener("click", () => {
  document.getElementById("shift1").value = "";
  document.getElementById("shift2").value = "";
  document.getElementById("shift3").value = "";
  document.getElementById("vcr").value = "";
  document.getElementById("totalSetoran").value = "";

  document.getElementById("hasilJumlahPendapatanShift").textContent = "";
  document.querySelector(".hasilSelisih").textContent = "";
  pendapatan = 0;
});
