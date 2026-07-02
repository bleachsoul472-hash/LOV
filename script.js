let current = 0;
let score = 0;

// 🔥 الأسئلة
const questions = [
  {
    img: "https://i.ibb.co/14xvYH5/48-20260702115901.png",
    question: "اجب عما داخل الصورة؟",
    options: ["فلندا", "سويد", "كندا", "النرويج"],
    answer: "فلندا"
  },
  {
    img: "https://i.ibb.co/PZ2JcmnY/48-20260702115956.png",
    question: "اجب عما داخل الصورة؟",
    options: ["القلب", "الجلد", "الكبد", "الرئتين"],
    answer: "الجلد"
  },
  {
    img: "https://i.ibb.co/hF5KFgPv/48-20260702120036.png",
    question: "اجب عما داخل الصورة",
    options: ["الهيدروجين", "الاكسجين", "الهيليوم", "الليثيوم"],
    answer: "الهيدروجين"
  },
    {
    img: "https://i.ibb.co/ZzPCHJvh/48-20260702120302.png",
    question: "اجب عما داخل الصورة؟",
    options: ["صحراء اتأكاما", "الصحراء القطبية الجنوبية", "الصحراء الكبرى", "صحراء غوبي"],
    answer: "الصحراء القطبية الجنوبية"
  },
    {
    img: "https://i.ibb.co/ZzJyC6vk/48-20260702120410.png",
    question: "اجب عما داخل الصورة؟",
    options: ["فرنسا", "روسيا","الولايات المتحدة","الصين"],
    answer: "فرنسا"
  },
    
    {
    img: "https://i.ibb.co/bMmkChtR/48-20260702120452.png",
    question: "اجب عما داخل الصورة؟",
    options: ["المسجد الحرام", "المسجد النبوي","مسجد قباء","مسجد القبلتين"],
    answer: "مسجد قباء"
  },
    
    {
    img: "https://i.ibb.co/KjTTBCKP/48-20260702120539.png",
    question: "اجب عما داخل الصورة؟",
    options: ["الاكسجين", "النيتروجين","الارجون ","ثاني اكسيد الكربون"],
    answer: "النيتروجين"
  },
    {
    img: "https://i.ibb.co/VcYBxYqV/48-20260702120827.png",
    question: "اجب عما داخل الصورة؟",
    options: ["5", "4","6","7"],
    answer: "5"
  },
    
    {
    img: "https://i.ibb.co/s9bqqj68/48-20260702120915.png",
    question: "اجب عما داخل الصورة؟",
    options: ["روما", "اثينا","باريس","لندن"],
    answer: "اثينا"
  },
    
    {
    img: "https://i.ibb.co/KxyDvD9g/48-20260702121211.png",
    question: "اجب عما داخل الصورة؟",
    options: ["4", "5","8","11"],
    answer: "5"
  },
    
   {
    img: "https://i.ibb.co/4Z23b2tc/48-20260702121435.png",
    question: "اجب عما داخل الصورة؟",
    options: ["التنفس", "البناء الضوئي","الهضم","الاخراج"],
    answer: "البناء الضوئي"
  },
    
    {
    img: "https://i.ibb.co/Kp2QGSv4/48-20260702133451.png",
    question: "اجب عما داخل الصورة؟",
    options: ["سيول", "طوكيو بكين","بانكوك",""],
    answer: "طوكيو"
  },
    
    
    {
    img: "https://i.ibb.co/ccp1NLYD/48-20260702133624.png",
    question: "اجب عما داخل الصورة؟",
    options: ["ابن سينا", "الخوارزمي نيوتن","ڤيثاغورس"],
      answer: "الخوارزمي"
  },
    
    
    {
    img: "https://i.ibb.co/6JPztcrw/48-20260702133532.png",
    question: "اجب عما داخل الصورة؟",
    options: ["33", "34","27","32"],
    answer: "32"
  },
    
    
    {
    img: "https://i.ibb.co/Z6Hv5F3F/48-20260702133715.png",
    question: "اجب عما داخل الصورة؟",
    options: ["ڤولت", "اوم","امبير","واط"],
    answer: "امبير"
  },
    
    {
    img: "https://i.ibb.co/pvpjysC9/48-20260702133824.png",
    question: "اجب عما داخل الصورة؟",
    options: ["نيل أرمسترونغ", "باز ألدرين","مايكل كولينز","يوري غاغارين"],
    answer: "يوري غاغارين"
  },
    
    {
    img: "https://i.ibb.co/pvpjysC9/48-20260702133824.png",
    question: "اجب عما داخل الصورة؟",
    options: ["يوان", "ين","وون","دولار"],
    answer: "ين"
  },
    
    {
    img: "https://i.ibb.co/ZpX88bdM/48-20260702135111.png",
    question: "اجب عما داخل الصورة؟",
    options: ["عطارد", "الزهرة","الارض","المريخ"],
    answer: "عطارد"
  },
    
    {
    img: "https://i.ibb.co/b52B6gTJ/48-20260702135524.png",
    question: "اجب عما داخل الصورة؟",
    options: ["الفلور", "الحديد","المغنيسيوم","الكلور"],
    answer: "الحديد"
  },
{
    img: "https://i.ibb.co/GwNJQdQ/48-20260702135753.png",
    question: "اجب عما داخل الصورة؟",
    options: ["الاكسجين", "الهيليوم","الهيدروجين","النتيروجين"],
    answer: "الهيدروجين"
  },
    
    {
    img: "https://i.ibb.co/b52B6gTJ/48-20260702135524.png",
    question: "اجب عما داخل الصورة؟",
    options: ["الحديد", "الزئبق","النحاس","الفضة"],
    answer: "الزئبق"
  },
    
    {
    img: "https://i.ibb.co/ych6JC1S/48-20260702140228.png",
    question: "اجب عما داخل الصورة؟",
    options: ["داروين", "ويليام هارفي","نيوتن","ابن سينا"],
    answer: "ويليام هارفي"
  },
    
    {
    img: "https://i.ibb.co/bMHgXss3/48-20260702140610.png",
    question: "اجب عما داخل الصورة؟",
    options: ["الاطلسي", "الهندي","الهادئ","المتجمد الشمالي"],
    answer: "الهادئ"
  },
      {
    img: "https://i.ibb.co/4RT28m2b/48-20260702140834.png",
    question: "اجب عما داخل الصورة؟",
    options: ["سان مارينو", "مالطو","الفاتيكان","موناكو"],
    answer: "الفاتيكان"
  },
    
    {
    img: "https://i.ibb.co/V0krWvRf/48-20260702141115.png",
    question: "اجب عما داخل الصورة؟",
    options: ["شهر", "12شهر","شهرين","6اشهر"],
    answer: "12شهر"
  },
    
    {
    img: "https://i.ibb.co/rXfWh9B/48-20260702141531.png",
    question: "اجب عما داخل الصورة؟",
    options: ["207", "210","215","206"],
    answer: "206"
  },
    {
    img: "https://i.ibb.co/FCCkkKc/48-20260702141819.png",
    question: "اجب عما داخل الصورة؟",
    options: ["360", "364","365","366"],
    answer: "366"
  },
    
    {
    img: "https://i.ibb.co/vCswLXTV/48-20260702141949.png",
    question: "اجب عما داخل الصورة؟",
    options: ["القلب", "الكبد","الرئتين","الكلى"],
    answer: "الكلى"
  },
    
    
    {
    img: "https://i.ibb.co/LdkvBG7p/48-20260702142321.png",
    question: "اجب عما داخل الصورة؟",
    options: ["المشتري", "زحل","المريخ","الارض"],
    answer: "المشتري"
  },
    {
    img: "https://i.ibb.co/zT5Bj5Nk/48-20260702142550.png",
    question: "اجب عما داخل الصورة؟",
    options: ["كندا", "اندونيسيا","السويد","الفلبين"],
    answer: "السويد"
  },
    
    
    
    
    
    
    
];
    
// 🚀 بدء
function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "flex";
  loadQuestion();
}

// 📌 تحميل سؤال
function loadQuestion() {
  let q = questions[current];

  document.getElementById("questionImg").src = q.img;
  document.getElementById("questionText").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      if (opt === q.answer) {
        score++;
        document.getElementById("result").innerText = "✅ صح";
      } else {
        document.getElementById("result").innerText = "❌ خطأ";
      }
    };

    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
}

// ➜ التالي
function nextQuestion() {
  current++;

  if (current >= questions.length) {
    showEnd();
    return;
  }

  loadQuestion();
}

// 🏁 النهاية
function showEnd() {
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("endScreen").style.display = "flex";

  document.getElementById("scoreText").innerText =
    `${score} / ${questions.length}`;

  let percent = (score / questions.length) * 100;

  let message = "";

  if (percent === 100) message = "🔥 أسطورة!";
  else if (percent >= 70) message = "👏 ممتاز!";
  else if (percent >= 40) message = "🙂 جيد";
  else message = "💪 حاول مرة ثانية";

  document.getElementById("message").innerText = message;
}

// 🔄 إعادة
function restartQuiz() {
  current = 0;
  score = 0;

  document.getElementById("endScreen").style.display = "none";
  document.getElementById("startScreen").style.display = "flex";

  loadQuestion();
}