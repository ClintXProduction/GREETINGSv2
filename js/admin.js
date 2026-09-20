const PASS = "1342000";
const $ = (id) => document.getElementById(id);
function load(){
  $("greetings").textContent = localStorage.getItem("cltx4_greetings") || 0;
  $("opens").textContent = localStorage.getItem("cltx4_opens") || 0;
  $("visitors").textContent = localStorage.getItem("cltx4_anon") ? 1 : 0;
  const last = localStorage.getItem("cltx4_last_open");
  $("events").textContent = last ? "Last consented open: " + new Date(last).toLocaleString() : "No consented opens recorded.";
}
function login(){
  if($("pass").value === PASS){
    $("login").classList.add("hidden");
    $("dash").classList.remove("hidden");
    $("err").textContent = "";
    load();
  } else {
    $("err").textContent = "Wrong password.";
  }
}
$("loginBtn").addEventListener("click", login);
$("pass").addEventListener("keydown", (e)=>{ if(e.key === "Enter") login(); });
$("clear").addEventListener("click", ()=>{
  ["cltx4_greetings","cltx4_opens","cltx4_anon","cltx4_last_open"].forEach(k=>localStorage.removeItem(k));
  load();
});
