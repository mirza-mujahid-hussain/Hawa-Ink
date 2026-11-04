/* Sign up page: demo account stored in this browser (no server) */
(function () {
  const H = window.HI, err = m => H.$("#err").textContent = m;
  H.$("#signup-form").addEventListener("submit", async e => {
    e.preventDefault();
    const n = H.$("#an").value.trim(), em = H.$("#ae").value.trim().toLowerCase(), pw = H.$("#ap").value;
    if (n.length < 2) return err("Enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(em)) return err("Enter a valid email address.");
    if (pw.length < 8) return err("Use at least 8 characters for your password.");
    const users = H.ls("users", []);
    if (users.some(u => u.e === em)) return err("This email is already registered. Sign in instead.");
    users.push({n, e: em, h: await H.hash(pw)}); H.lset("users", users); H.lset("me", {n, e: em});
    location.href = "../../index.html";
  });
})();
