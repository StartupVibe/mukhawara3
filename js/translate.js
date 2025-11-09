let currentLang = "en";
let translations = {};

async function loadTranslations() {
  try {
    const res = await fetch(`lang/${currentLang}.json`);
    translations = await res.json();
    applyTranslations();
  } catch (err) {
    console.error("Error loading translation file:", err);
  }
}

function applyTranslations() {
  for (const key in translations) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[key];
    }
  }

  // تغيير الاتجاه حسب اللغة
  if (currentLang === "ar") {
    document.body.dir = "rtl";
    document.body.style.textAlign = "right";
  } else {
    document.body.dir = "ltr";
    document.body.style.textAlign = "left";
  }

  // تحديث نص الزرار
  const langBtn = document.getElementById("lang_btn");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "AR" : "EN";
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang_btn");

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      loadTranslations();
    });
  }

  // تحميل أول ملف ترجمة
  loadTranslations();
});
