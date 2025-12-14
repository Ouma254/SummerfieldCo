/* ================= OTP VALIDATION ================= */
const otpForm = document.getElementById("otpForm");
if (otpForm) {
  otpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const otp = document.getElementById("otp").value;

    if (otp.length !== 6 || isNaN(otp)) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    alert("OTP verified successfully!");
    window.location.href = "reset-password.html";
  });
}

/* ================= RESET PASSWORD ================= */
const resetForm = document.getElementById("resetForm");
if (resetForm) {
  resetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    if (newPass.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password reset successful! You can now login.");
    window.location.href = "login.html";
  });
}
