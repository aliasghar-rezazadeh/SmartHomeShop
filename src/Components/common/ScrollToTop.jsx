import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const location = useLocation();
  const navigate = useNavigate(); // برای اطمینان از اینکه navigate هم کار می‌کند

  useEffect(() => {
    // تنظیم اسکرول به بالای صفحه هر بار که location تغییر می‌کند (یعنی مسیر عوض می‌شود)
    window.scrollTo(0, 0);

    // اگر بخواهید موقعیت اسکرول را بعد از رفتن به صفحه جدید حفظ کنید (این معمولاً پیش‌فرض است)
    // می‌توانید این خط را حذف کنید یا درباره‌ی scrollRestoration مرورگر تحقیق کنید.
    // window.history.scrollRestoration = 'auto'; // یا 'manual' برای کنترل کامل

  }, [location, navigate]); // وابستگی‌ها: هر وقت location یا navigate تغییر کرد، این useEffect اجرا شود

  // این کامپوننت چیزی رندر نمی‌کند، فقط یک hook است
  return null;
}

export default ScrollToTopOnNavigate;
