let pendapatan = 0;

const tombolJumlah = document.getElementById("btnJumlahkanPendapatanShift");

tombolJumlah.addEventListener("click", function () {
  const pendapatanShift1Pk1 = Number(
    document.getElementById("shift1Pk1").value,
  );
  const pendapatanShift1Pk4 = Number(
    document.getElementById("shift1Pk4").value,
  );
  const pendapatanShift2Pk1 = Number(
    document.getElementById("shift2Pk1").value,
  );
  const pendapatanShift2Pk4 = Number(
    document.getElementById("shift2Pk4").value,
  );
  const pendapatanShift3Pk1 = Number(
    document.getElementById("shift3Pk1").value,
  );
  const pendapatanShift3Pk4 = Number(
    document.getElementById("shift3Pk4").value,
  );

  if (
    pendapatanShift1Pk1 === "" ||
    pendapatanShift1Pk4 === "" ||
    pendapatanShift2Pk1 === "" ||
    pendapatanShift2Pk4 === "" ||
    pendapatanShift3Pk1 === "" ||
    pendapatanShift3Pk4 === ""
  ) {
    alert("Silahkan input pendapatan shift terlebih dahulu");
    return;
  }

  pendapatan =
    pendapatanShift1Pk1 +
    pendapatanShift1Pk4 +
    pendapatanShift2Pk1 +
    pendapatanShift2Pk4 +
    pendapatanShift3Pk1 +
    pendapatanShift3Pk4;

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
  document.getElementById("shift1Pk1").value = "";
  document.getElementById("shift1Pk4").value = "";
  document.getElementById("shift2Pk1").value = "";
  document.getElementById("shift2Pk4").value = "";
  document.getElementById("shift3Pk1").value = "";
  document.getElementById("shift3Pk4").value = "";
  document.getElementById("totalSetoran").value = "";

  document.getElementById("hasilJumlahPendapatanShift").textContent = "";
  document.querySelector(".hasilSelisih").textContent = "";
  pendapatan = 0;
});
