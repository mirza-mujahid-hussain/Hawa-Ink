/* Sign in page: checks the demo accounts stored in this browser */
(function () {
  const H = window.HI, err = m => H.$("#err").textContent = m;
  H.$("#signin-form").addEventListener("submit", async e => {
    e.preventDefault();
    const em = H.$("#le").value.trim().toLowerCase(), pw = H.$("#lp").value;
    if (!em || !pw) return err("Enter your email and password.");
    const h = await H.hash(pw), u = H.ls("users", []).find(x => x.e === em && x.h === h);
    if (!u) return err("Email or password is incorrect.");
    H.lset("me", {n: u.n, e: u.e}); location.href = "../../index.html";
  });
})();
